import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProduct, editProductData } from '~/services/Orders/productService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditProduct() {
    const [categoryChilds, setCategoryChild] = useState([]);
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        id: '',
        categoryChildId: '',
        name: '',
        image: '',
        description: '',
        price: '',
        manufacturer: '',
        manufacturerDate: '',
        expiryDate: '',
        imageSrc: defaultImage,
        imageFile: null,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await editProductData(id);
                setData({
                    id: productData.id,
                    categoryChildId: productData.categoryChildId,
                    name: productData.name,
                    description: productData.description,
                    price: productData.price,
                    manufacturer: productData.manufacturer,
                    manufacturerDate: productData.manufacturerDate,
                    expiryDate: productData.expiryDate,
                    imageSrc: productData.image || defaultImage,
                    imageFile: null,
                });

                const categoryChildData = await fetch('https://localhost:7121/api/v1/CategoryChilds');
                const categoryChildJson = await categoryChildData.json();
                setCategoryChild(categoryChildJson);
            } catch (error) {
                console.error('Error fetching Product data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        const manufacturerDate = new Date(data.manufacturerDate).toISOString();
        const expiryDate = new Date(data.expiryDate).toISOString();

        try {
            await updateProduct(
                data.id,
                data.categoryChildId,
                data.name,
                data.description,
                data.price,
                data.manufacturer,
                manufacturerDate,
                expiryDate,
                data.imageFile,
            );
            toast.success('Product updated successfully');
            navigate('/product');
        } catch (error) {
            toast.error('Failed to update product');
            console.error('Update error:', error);
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setData({
                    ...data,
                    imageFile,
                    imageSrc: x.target.result,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setData({
                ...data,
                imageFile: null,
                imageSrc: defaultImage,
            });
        }
    };
    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/product" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Edit Product</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Products</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Product</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Product</h2>
                <p className="section-lead">On this page you can edit product details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Product Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled
                                                value={data.id}
                                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.price}
                                                onChange={(e) => setData({ ...data, price: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Manufacturer</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.manufacturer}
                                                onChange={(e) => setData({ ...data, manufacturer: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Category</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.categoryChildId}
                                                onChange={(e) => setData({ ...data, categoryChildId: e.target.value })}
                                            >
                                                <option>Select Category</option>
                                                {categoryChilds.map((categoryChild) => (
                                                    <option key={categoryChild.id} value={categoryChild.id}>
                                                        {categoryChild.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Manufacturer Date</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.manufacturerDate}
                                                onChange={(e) => setData({ ...data, manufacturerDate: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Expiry Date</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.expiryDate}
                                                onChange={(e) => setData({ ...data, expiryDate: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Image File</label>
                                            <div>
                                                <img
                                                    src={data.imageSrc}
                                                    alt="Product"
                                                    style={{ maxWidth: 200, maxHeight: 150, marginBottom: 10 }}
                                                />
                                            </div>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Update Product
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default EditProduct;
