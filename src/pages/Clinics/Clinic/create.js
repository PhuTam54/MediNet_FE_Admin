import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createClinics } from '~/services/Clinics/clinicService';
import { useNavigate, Link } from 'react-router-dom';

function CreateClinics() {

    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        openingHours : '',
        closingHours: '',
        imagesClinicFile: null
    });

    const navigate = useNavigate();

    const handleCreate = async (event) => {
        event.preventDefault();
        const openingHours = new Date(data.openingHours).toISOString();
        const closingHours = new Date(data.closingHours).toISOString();
        
        await createClinics(data.name, data.email, data.phone, data.address, data.description, openingHours, closingHours, data.imagesClinicFile)
        try {
            toast.success('service created successfully');
            navigate('/clinics');
        } catch (error) {
            toast.error('Failed to create service');
        }
        
    };

    const handleImagesChange = (event) => {
        const files = event.target.files;
        setData({
            ...data,
            imagesClinicFile: files
        });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Clinics" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create service</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Clinics</Link>
                    </div>
                    <div className="breadcrumb-item">Create service</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create service</h2>
                <p className="section-lead">On this page you can create a new service and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your service</h4>
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
                                            Phone
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.phone}
                                                onChange={(e) => setData({ ...data, phone: e.target.value })}
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
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            openingHours
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.openingHours}
                                                onChange={(e) => setData({ ...data, openingHours: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            closingHours
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.closingHours}
                                                onChange={(e) => setData({ ...data, closingHours: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            imagesClinicFile
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                className="form-control"
                                                onChange={handleImagesChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create service
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

export default CreateClinics;