import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCustomers, editCustomers } from '~/services/Users/customerService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditCustomers() {
    const [data, setData] = useState({
        id: '',
        address: '',
        date_Of_Birth: '',
        gender: '',
        phoneNumber: '',
        username: '',
        gender: '',
        date_Of_Birth: '',
        email: '',
        password: '',
        role: '',
        image: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const adminData = await editCustomers(id);
                setData({
                    id: adminData.id,
                    address: adminData.address,
                    date_Of_Birth: adminData.date_Of_Birth,
                    gender: adminData.gender,
                    phoneNumber: adminData.phoneNumber,
                    username: adminData.username,
                    email: adminData.email,
                    password: adminData.password,
                    role: adminData.role,
                    status: adminData.status,
                    image: adminData.image,
                });
            } catch (error) {
                console.error('Error fetching Admin data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            await updateCustomers(
                data.id,
                data.address,
                data.gender,
                data.date_Of_Birth,
                data.phoneNumber,
                data.username,
                data.email,
                data.password,
                data.role,
                data.status,
                data.image,

            );
            toast.success('Admin updated successfully');
            navigate('/Customers');
        } catch (error) {
            toast.error('Failed to update Admin');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Customers" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Edit Customers</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Customers</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Customers</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Admin</h2>
                <p className="section-lead">On this page you can edit Admin details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Admin Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
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
                                            <label className="col-form-label text-md-right">gender</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.gender}
                                                onChange={(e) => setData({ ...data, gender: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">date_Of_Birth</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.date_Of_Birth}
                                                onChange={(e) => setData({ ...data, date_Of_Birth: e.target.value })}
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
                                            <label className="col-form-label text-md-right">username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.username}
                                                onChange={(e) => setData({ ...data, username: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.email}
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">password</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.password}
                                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">role</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.role}
                                                onChange={(e) => setData({ ...data, role: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">status</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.status}
                                                onChange={(e) => setData({ ...data, status: e.target.value })}
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
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Update Customers
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

export default EditCustomers;
