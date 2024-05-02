import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createAdmins } from '~/services/Users/adminService';
import { Link, useNavigate } from 'react-router-dom';

function CreateAdmins() {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: '',
        imageFile: '',
    });

    const navigate = useNavigate();

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            await createAdmins(data.username, data.email, data.password, data.imageFile);
            toast.success('Admins created successfully');
            navigate('/Admins');
        } catch (error) {
            toast.error('Failed to create Admins');
        }
    };
    const handleImageChange = (event) => {
        const image = event.target.files[0];
        console.log(event.target.files[0]);
        setData({ ...data, imageFile: image });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Admins" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create Admins</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Admins</Link>
                    </div>
                    <div className="breadcrumb-item">Create Admins</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Admins</h2>
                <p className="section-lead">On this page you can create a new Admins and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Admins</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            UserName
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.username}
                                                onChange={(e) => setData({ ...data, username: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Email
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.email}
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Password
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.password}
                                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    {/* <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            image
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.image}
                                                onChange={(e) => setData({ ...data, image: e.target.value })}
                                            />
                                        </div>
                                    </div> */}
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            ImageFile
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="file"
                                                className="form-control"
                                                // value={data.imageFile}
                                                // onChange={(e) => setData({ ...data, imageFile: e.target.value })}
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create Admins
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

export default CreateAdmins;
