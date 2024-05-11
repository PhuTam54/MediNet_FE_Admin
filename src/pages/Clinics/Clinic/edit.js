import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateClinics, editClinics } from '~/services/Clinics/clinicService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditClinics() {
    const [data, setData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        openingHours: '',
        closingHours: '',
        description: '',
        imagesClinic: '',
        imagesClinicFile: '',
        imagesSrc: '',
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
                    imagesClinic: serviceData.imagesClinic,
                    imagesClinicFile: serviceData.imagesClinicFile,
                    imagesSrc: serviceData.imagesSrc,
                });
            } catch (error) {
                console.error('Error fetching Clinics data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            await updateClinics(
                data.id,
                data.name,
                data.phone,
                data.email,
                data.address,
                data.openingHours,
                data.closingHours,
                data.description,
                data.imagesClinic,
                data.imagesClinicFile,
                data.imagesSrc,
            );
            toast.success('Clinics updated successfully');
            navigate('/Clinics');
        } catch (error) {
            toast.error('Failed to update Clinics');
        }
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
                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Name</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.name}
                                                    onChange={(e) => setData({ ...data, name: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.email}
                                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Phone</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.phone}
                                                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.address}
                                                    onChange={(e) => setData({ ...data, address: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Opening Hours</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.openingHours}
                                                    onChange={(e) => setData({ ...data, openingHours: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Closing Hours</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.closingHours}
                                                    onChange={(e) => setData({ ...data, closingHours: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Description</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.description}
                                                    onChange={(e) => setData({ ...data, description: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Images Clinic</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.imagesClinic}
                                                    onChange={(e) => setData({ ...data, imagesClinic: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">
                                                    Images Clinic File
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.imagesClinicFile}
                                                    onChange={(e) =>
                                                        setData({ ...data, imagesClinicFile: e.target.value })
                                                    }
                                                />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <label className="col-form-label text-md-right">Images Src</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.imagesSrc}
                                                    onChange={(e) => setData({ ...data, imagesSrc: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create Clinics
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
