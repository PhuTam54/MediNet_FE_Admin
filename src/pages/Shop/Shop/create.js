import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createShops } from '~/services/Shop/shopService';
import { useNavigate } from 'react-router-dom';

function CreateShops() {
    const [categories, setCategories] = useState([]);
    const [floors, setFloors] = useState([]);

    const [data, setData] = useState({
        category_Id: '',
        floor_Id: '',
        name: '',
        image: '',
        phone_Number: '',
        address: '',
        description: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
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
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            await createShops(
                data.category_Id,
                data.floor_Id,
                data.name,
                data.image,
                data.address,
                data.phone_Number,
                data.description,
            );
            toast.success('Shop created successfully');
            navigate('/shops');
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
                    <a href="/shops" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create Shop</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Shops</a>
                    </div>
                    <div className="breadcrumb-item">Create Shop</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Shop</h2>
                <p className="section-lead">On this page you can create a new Shop and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Shop</h4>
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
                                            Floors Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.floor_Id}
                                                onChange={(e) => setData({ ...data, floor_Id: e.target.value })}
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
                                                value={data.category_Id}
                                                onChange={(e) => setData({ ...data, category_Id: e.target.value })}
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
                                            Phone
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.phone_Number}
                                                onChange={(e) => setData({ ...data, phone_Number: e.target.value })}
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
                                                value={data.address}
                                                onChange={(e) => setData({ ...data, address: e.target.value })}
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
                                                Create Shop
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

export default CreateShops;
