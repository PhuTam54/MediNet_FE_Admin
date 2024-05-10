import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProduct, editProductData } from '~/services/Shop/productService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditProduct() {
    const [categoryChilds, setCategoryChild] = useState([]);
    const [clinics, setClinics] = useState([]);

    const [data, setData] = useState({
        id: '',
        categoryChildId: '',
        clinicId: '',
        name: '',
        image: '',
        description: '',
        price: '',
        stockQuantity: '',
        manufacturer: '',
        manufacturerDate: '',
        expiryDate: '',
        imageFile: '',
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
                    clinicId: productData.clinicId,
                    name: productData.name,
                    image: productData.image,
                    description: productData.description,
                    price: productData.price,
                    stockQuantity: productData.stockQuantity,
                    manufacturer: productData.manufacturer,
                    manufacturerDate: productData.manufacturerDate,
                    expiryDate: productData.expiryDate,
                    imageFile: productData.imageFile,
                });

                const clinicData = await fetch('https://localhost:7121/api/v1/Clinics');
                const clinicJson = await clinicData.json();
                setClinics(clinicJson);

                const categoryChildData = await fetch('https://localhost:7121/api/v1/categoryChilds');
                const categoryChildJson = await categoryChildData.json();
                setCategoryChild(categoryChildJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateProduct(
                data.id,
                data.categoryChildId,
                data.clinicId,
                data.name,
                data.image,
                data.description,
                data.price,
                data.stockQuantity,
                data.manufacturer,
                data.manufacturerDate,
                data.expiryDate,
                data.imageFile,
            );
            toast.success('Shop updated successfully');
            navigate('/product');
        } catch (error) {
            toast.error('Failed to update Shop');
        }
    };

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setData({ ...data, imageFile: image });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Product" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Edit Products</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Products</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Products</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Product</h2>
                <p className="section-lead">On this page you can edit Product details.</p>
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
                                                value={data.id}
                                                disabled
                                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                            />
                                        </div>      
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ImageFile</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.imageFile}
                                                onChange={(e) => setData({ ...data, imageFile: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
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
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ClinicId</label>
                                            <select
                                                className="form-control"
                                                value={data.clinicId}
                                                onChange={(e) => setData({ ...data, clinicId: e.target.value })}
                                            >
                                                <option>Select ClinicId</option>
                                                {clinics.map((clinic) => (
                                                    <option key={clinic.id} value={clinic.id}>
                                                        {clinic.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

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
                                            <label className="col-form-label text-md-right">Img</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.image}
                                                onChange={(e) => setData({ ...data, image: e.target.value })}
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
                                            <label className="col-form-label text-md-right">StockQuantity</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.stockQuantity}
                                                onChange={(e) => setData({ ...data, stockQuantity: e.target.value })}
                                            />
                                        </div>
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
                                            <label className="col-form-label text-md-right">ManufacturerDate</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.manufacturerDate}
                                                onChange={(e) => setData({ ...data, manufacturerDate: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ExpiryDate</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.expiryDate}
                                                onChange={(e) => setData({ ...data, expiryDate: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create Customers
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
