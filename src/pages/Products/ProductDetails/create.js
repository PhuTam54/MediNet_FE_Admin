import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProductDetails } from '~/services/Products/productDetailService';
import { useNavigate, Link } from 'react-router-dom';

function CreateProductDetails() {
    const [products, setProducts] = useState([]);
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        ingredient: '',
        usage: '',
        usageInstructions: '',
        description: '',
        sideEffects: '',
        precautions: '',
        storage: '',
        productId: '',
        imageSrc: defaultImage,
        imagesProductDetailFile: null,
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await fetch('https://medinetaptech.azurewebsites.net/api/v1/products');
                const productJson = await productData.json();
                setProducts(productJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();

        await createProductDetails(
            data.ingredient,
            data.usage,
            data.usageInstructions,
            data.description,
            data.sideEffects,
            data.precautions,
            data.storage,
            data.productId,
            data.imagesProductDetailFile,
        );
        try {
            toast.success('ProductDetails created successfully');
            navigate('/product/detail/create');
        } catch (error) {
            toast.error('Failed to create ProductDetails');
        }
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        setData({
            ...data,
            imagesProductDetailFile: files,
        });
    };
    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/product" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create ProductDetails</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard </Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">ProductDetailss </Link>
                    </div>
                    <div className="breadcrumb-item">Create ProductDetails</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create ProductDetails</h2>
                <p className="section-lead">On this page you can create a new ProductDetails and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your ProductDetails</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Ingredient</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.ingredient}
                                                onChange={(e) => setData({ ...data, ingredient: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Product</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.productId}
                                                onChange={(e) => setData({ ...data, productId: e.target.value })}
                                            >
                                                <option>Select productId</option>
                                                {products.map((product) => (
                                                    <option key={product.id} value={product.id}>
                                                        {product.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Usage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.usage}
                                                onChange={(e) => setData({ ...data, usage: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">UsageInstructions</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.usageInstructions}
                                                onChange={(e) =>
                                                    setData({ ...data, usageInstructions: e.target.value })
                                                }
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
                                            <label className="col-form-label text-md-right">SideEffects</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.sideEffects}
                                                onChange={(e) => setData({ ...data, sideEffects: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Precautions</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.precautions}
                                                onChange={(e) => setData({ ...data, precautions: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Storage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.storage}
                                                onChange={(e) => setData({ ...data, storage: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            imagesProductDetailFile
                                        </label>
                                        <div>
                                            <img
                                                src={data.imageSrc}
                                                alt="Product"
                                                style={{ maxWidth: 200, maxHeight: 150, marginBottom: 10 }}
                                            />
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                className="form-control"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create ProductDetails
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

export default CreateProductDetails;
