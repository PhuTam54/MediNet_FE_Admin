import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProduct, editProductData } from '~/services/Shop/productService';
import { useNavigate, useParams } from 'react-router-dom';

function EditProduct() {
    const [shops, setShops] = useState([]);

    const [data, setData] = useState({
        editId: '',
        editShopId: '',
        editName: '',
        editImg: '',
        editPrice: '',
        editDescription: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await editProductData(id);
                setData({
                    editId: productData.id,
                    editShopId: productData.shop_Id,
                    editName: productData.name,
                    editImg: productData.image,
                    editPrice: productData.price,
                    editDescription: productData.description,
                });

                const shopsData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Shops');
                const shopJson = await shopsData.json();
                setShops(shopJson);
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
                data.editId,
                data.editShopId,
                data.editName,
                data.editImg,
                data.editPrice,
                data.editDescription,
            );
            toast.success('Shop updated successfully');
            navigate('/product');
        } catch (error) {
            toast.error('Failed to update Shop');
        }
    };

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setData({ ...data, editImg: image });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/product" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Edit Product</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Products</a>
                    </div>
                    <div className="breadcrumb-item">Edit Product</div>
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
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editId}
                                                disabled
                                                onChange={(e) => setData({ ...data, editId: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Name
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editName}
                                                onChange={(e) => setData({ ...data, editName: e.target.value })}
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
                                                value={data.editShopId}
                                                onChange={(e) => setData({ ...data, editShopId: e.target.value })}
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
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Price
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editPrice}
                                                onChange={(e) => setData({ ...data, editPrice: e.target.value })}
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
                                                value={data.editDescription}
                                                onChange={(e) => setData({ ...data, editDescription: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
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
