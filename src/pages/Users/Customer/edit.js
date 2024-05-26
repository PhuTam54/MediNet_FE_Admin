import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCustomers, editCustomers } from '~/services/Users/customerService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditCustomers() {
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        id: '',
        username: '',
        email: '',
        phoneNumber: '',
        date_Of_Birth: '',
        password: '',
        imageFile: null,
        imageSrc: defaultImage,
        image: '',
        address: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const customerData = await editCustomers(id);
                setData({
                    id: customerData.id,
                    username: customerData.username,
                    email: customerData.email,
                    date_Of_Birth: customerData.date_Of_Birth,
                    phoneNumber: customerData.phoneNumber,
                    password: customerData.password,
                    imageSrc: customerData.image || defaultImage,
                    imageFile: null,
                    address: customerData.address,
                });
            } catch (error) {
                console.error('Error fetching Customers data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        const date_Of_Birth = new Date(data.date_Of_Birth).toISOString();

        try {
            await updateCustomers(
                data.id,
                data.username,
                data.email,
                date_Of_Birth,
                data.phoneNumber,
                data.password,
                data.imageFile,
                data.address,
            );
            toast.success('Customers updated successfully');
            navigate('/Customers');
        } catch (error) {
            toast.error('Failed to update Customers');
        }
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imageFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setData({
                    ...data,
                    imageFile,
                    imageSrc: x.target.result,
                });
            };
            reader.readAsDataURL(imageFile);
        } else {
            setData({
                ...data,
                imageFile: null,
                imageSrc: defaultImage,
            });
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
                <h2 className="section-title">Edit Customers</h2>
                <p className="section-lead">On this page you can edit Customers details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Customers Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
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
                                            Date Of Birth
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.date_Of_Birth}
                                                onChange={(e) => setData({ ...data, date_Of_Birth: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            PhoneNumber
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.phoneNumber}
                                                onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
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
                                            ImageFile
                                        </label>
                                        <div>
                                            <img
                                                src={data.imageSrc}
                                                alt="Doctors"
                                                style={{ maxWidth: 200, maxHeight: 150, marginBottom: 10 }}
                                            />
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
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
