import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateShops, editShops } from '~/services/Shop/shopService';
import { useNavigate, useParams } from 'react-router-dom';

function EditShops() {
    const [categories, setCategories] = useState([]);
    const [floors, setFloors] = useState([]);

    const [data, setData] = useState({
        editId: '',
        editCategoryId: '',
        editFloorsId: '',
        editName: '',
        editImg: '',
        editAddress: '',
        editPhone: '',
        editDescription: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const shopData = await editShops(id);
                setData({
                    editId: shopData.id,
                    editFloorsId: shopData.floor_Id,
                    editCategoryId: shopData.category_Id,
                    editName: shopData.name,
                    editImg: shopData.image,
                    editAddress: shopData.address,
                    editPhone: shopData.phone_Number,
                    editDescription: shopData.description,
                });
                const categoriesData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Categories');
                const categoriesJson = await categoriesData.json();
                setCategories(categoriesJson);

                const floorsData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Floors');
                const floorsJson = await floorsData.json();
                setFloors(floorsJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            await updateShops(
                data.editId,
                data.editFloorsId,
                data.editCategoryId,
                data.editName,
                data.editImg,
                data.editAddress,
                data.editPhone,
                data.editDescription,
            );
            toast.success('Shop updated successfully');
            navigate('/shops');
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
                    <a href="/shops" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Edit Shop</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Shops</a>
                    </div>
                    <div className="breadcrumb-item">Edit Shop</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Shop</h2>
                <p className="section-lead">On this page you can edit Shop details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Shop Details</h4>
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
                                            Floors Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editFloorsId}
                                                onChange={(e) => setData({ ...data, editFloorsId: e.target.value })}
                                            >
                                                <option>Select floor</option>
                                                {floors.map((floor) => (
                                                    <option key={floor.id} value={floor.id}>
                                                        {floor.number}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Category Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editCategoryId}
                                                onChange={(e) => setData({ ...data, editCategoryId: e.target.value })}
                                            >
                                                <option>Select category</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
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
                                            Phone
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editPhone}
                                                onChange={(e) => setData({ ...data, editPhone: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Address
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editAddress}
                                                onChange={(e) => setData({ ...data, editAddress: e.target.value })}
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
                                                Update Shop
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

export default EditShops;
