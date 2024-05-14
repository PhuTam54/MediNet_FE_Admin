import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateAdmins, editAdmins } from '~/services/Users/adminService';
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditAdmins() {
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        id: '',
        username: '',
        email: '',
        password: '',
        image: '',
        imageFile: null,
        imageSrc: defaultImage,
        image: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const adminData = await editAdmins(id);
                setData({
                    id: adminData.id,
                    username: adminData.username,
                    email: adminData.email,
                    password: adminData.password,
                    imageFile: adminData.imageFile,
                    imageSrc: adminData.imageSrc,
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
            await updateAdmins(data.id, data.email, data.username, data.password, data.imageFile, data.imageSrc);
            toast.success('Admin updated successfully');
            navigate('/Admins');
        } catch (error) {
            toast.error('Failed to update Admin');
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
                    <Link to="/Admins" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Edit Admin</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Admins</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Admin</div>
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

export default EditAdmins;
