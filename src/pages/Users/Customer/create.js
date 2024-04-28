import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCustomers } from '~/services/Users/customerService';
import { useNavigate, Link } from 'react-router-dom';

function CreateCustomers() {
    const [data, setData] = useState({
        address: '',
        phoneNumber: '',
        date_Of_Birth: '',
        username: '',
        email: '',
        password: '',
        gender: '',
        image: '',
        imageFile: '',
    });

    const navigate = useNavigate();

    const handleCreate = async (event) => {
        event.preventDefault();
    
        try {
            // Tạo FormData để chứa dữ liệu của form
            const formData = new FormData();
            formData.append('username', data.username);
            formData.append('email', data.email);
            formData.append('password', data.password);
            formData.append('gender', data.gender);
            formData.append('address', data.address);
            formData.append('phoneNumber', data.phoneNumber);
            formData.append('date_Of_Birth', data.date_Of_Birth);
            formData.append('imageFile', data.imageFile); // Thêm file vào FormData
    
            // Gửi FormData lên máy chủ
            await createCustomers(formData);
            toast.success('Shop created successfully');
            navigate('/Customers');
        } catch (error) {
            toast.error('Failed to create Shop');
        }
    };
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setData({ ...data, imageFile: file });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Customers" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create Customers</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard </Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Customerss </Link>
                    </div>
                    <div className="breadcrumb-item">Create Customers</div>
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
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.address}
                                                onChange={(e) => setData({ ...data, address: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">phoneNumber</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.phoneNumber}
                                                onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">BirthDay</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.date_Of_Birth}
                                                onChange={(e) => setData({ ...data, date_Of_Birth: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.username}
                                                onChange={(e) => setData({ ...data, username: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.email}
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">password</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.password}
                                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">gender</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.gender}
                                                onChange={(e) => setData({ ...data, gender: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">image</label>
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
                                            <label className="col-form-label text-md-right">imageFile</label>
                                            <input type="file" className="form-control" onChange={handleImageChange} />

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

export default CreateCustomers;
