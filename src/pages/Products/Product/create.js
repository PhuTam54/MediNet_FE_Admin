import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProduct } from '~/services/Products/productService';
import { useNavigate, Link } from 'react-router-dom';

function CreateProduct() {
    const [categoryChilds, setCategoryChild] = useState([]);
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        categoryChildId: '',
        name: '',
        image: '',
        description: '',
        price: '',
        manufacturer: '',
        imageSrc: defaultImage,
        imageFile: null,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryChildData = await fetch('https://medinetprj.azurewebsites.net/api/v1/CategoryChilds');
                const categoryChildJson = await categoryChildData.json();
                setCategoryChild(categoryChildJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();

        await createProduct(
            data.categoryChildId,
            data.name,
            data.description,
            data.price,
            data.manufacturer,
            data.imageFile,
        );
        try {
            toast.success('Product created successfully');
            navigate('/product');
        } catch (error) {
            toast.error('Failed to create Product');
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
                <h1>Create Product</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard </Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Products </Link>
                    </div>
                    <div className="breadcrumb-item">Create Product</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Product</h2>
                <p className="section-lead">On this page you can create a new Product and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Product</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">CategoryChildId</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.categoryChildId}
                                                onChange={(e) => setData({ ...data, categoryChildId: e.target.value })}
                                            >
                                                <option>Select CategoryChildId</option>
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
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ImageFile</label>
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
                                                Create Product
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

export default CreateProduct;
