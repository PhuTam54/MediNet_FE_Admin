import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createProduct } from '~/services/Shop/productService';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    const [shops, setShops] = useState([]);

    const [data, setData] = useState({
        shop_Id: '',
        name: '',
        image: '',
        price: '',
        description: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const shopsData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Shops');
                const shopJson = await shopsData.json();
                setShops(shopJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            await createProduct(data.shop_Id, data.name, data.image, data.price, data.description);
            toast.success('Shop created successfully');
            navigate('/product');
        } catch (error) {
            toast.error('Failed to create Shop');
        }
    };

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setData({ ...data, image: image });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/product" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create Product</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Products</a>
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
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Name
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.name}
                                                onChange={(e) => setData({ ...data, name: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Shop Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.shop_Id}
                                                onChange={(e) => setData({ ...data, shop_Id: e.target.value })}
                                            >
                                                <option>Select Shops</option>
                                                {shops.map((shop) => (
                                                    <option key={shop.id} value={shop.id}>
                                                        {shop.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Img
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.image}
                                                onChange={(e) => setData({ ...data, image: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Thumbnail
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <div id="image-preview" className="image-preview">
                                                <label htmlFor="image-upload" id="image-label">
                                                    Choose File
                                                </label>
                                                <input
                                                    type="file"
                                                    name="image"
                                                    id="image-upload"
                                                    onChange={handleImageChange}
                                                />
                                            </div>
                                        </div>
                                    </div> */}
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Price
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.price}
                                                onChange={(e) => setData({ ...data, price: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Description
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
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
