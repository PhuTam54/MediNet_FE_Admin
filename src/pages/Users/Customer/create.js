import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCustomers } from '~/services/Users/customerService';
import { useNavigate } from 'react-router-dom';

function CreateCustomers() {
    const [data, setData] = useState({
        fullName: '',
        username: '',
        email: '',
        birthDay: '',
        phone_Number: '',
        password: '',
        role: '',
        status: '',
        address: '',
    });

    const navigate = useNavigate();

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            await createCustomers(
                data.fullName,
                data.username,
                data.email,
                data.birthDay,
                data.phone_Number,
                data.password,
                data.role,
                data.status,
                data.address,
            );
            toast.success('Shop created successfully');
            navigate('/Customers');
        } catch (error) {
            toast.error('Failed to create Shop');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/Customers" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create Shop</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Customers</a>
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
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">FullName</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.fullName}
                                                onChange={(e) => setData({ ...data, fullName: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Username</label>
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
                                            <label className="col-form-label text-md-right">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.email}
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">BirthDay</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.birthDay}
                                                onChange={(e) => setData({ ...data, birthDay: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Phone</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.phone_Number}
                                                onChange={(e) => setData({ ...data, phone_Number: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Password</label>
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
                                            <label className="col-form-label text-md-right">Role</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.role}
                                                onChange={(e) => setData({ ...data, role: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Status</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.status}
                                                onChange={(e) => setData({ ...data, status: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.address}
                                                onChange={(e) => setData({ ...data, address: e.target.value })}
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

export default CreateCustomers;
