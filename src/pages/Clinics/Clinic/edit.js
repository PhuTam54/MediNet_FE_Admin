import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateClinics, editClinics } from '~/services/Clinics/clinicService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditClinics() {
    const [data, setData] = useState({
        id: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        openingHours: '',
        closingHours: '',
        imagesClinicFile: null,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const serviceData = await editClinics(id);
                setData({
                    id: serviceData.id,
                    name: serviceData.name,
                    email: serviceData.email,
                    phone: serviceData.phone,
                    address: serviceData.address,
                    openingHours: serviceData.openingHours,
                    closingHours: serviceData.closingHours,
                    description: serviceData.description,
                    // imageSrc: serviceData.image || defaultImage,
                    imagesClinicFile: null,
                });
            } catch (error) {
                console.error('Error fetching Clinics data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const openingHours = new Date(data.openingHours).toISOString();
        const closingHours = new Date(data.closingHours).toISOString();

        try {
            await updateClinics(
                data.id,
                data.name,
                data.email,
                data.phone,
                data.address,
                data.description,
                openingHours,
                closingHours,
                data.imagesClinicFile,
            );
            toast.success('Clinics updated successfully');
            navigate('/Clinics');
        } catch (error) {
            toast.error('Failed to update Clinics');
        }
    };

    const handleImagesChange = (event) => {
        const files = event.target.files;
        setData({
            ...data,
            imagesClinicFile: files,
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
                <h1>Edit Clinics</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Clinics</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Clinics</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Clinics</h2>
                <p className="section-lead">On this page you can edit Clinics details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Clinics Details</h4>
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
                                                disabled
                                                value={data.id}
                                                onChange={(e) => setData({ ...data, id: e.target.value })}
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
                                            OpeningHours
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
                                            ClosingHours
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
                                            ImagesClinicFile
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
                                                Edit Clinics
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

export default EditClinics;
