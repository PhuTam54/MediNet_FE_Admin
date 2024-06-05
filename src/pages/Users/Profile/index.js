import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateAdmins } from '~/services/Users/adminService';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import avatar from '~/assets/img/avatar/avatar-1.png';

function Profile() {
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        id: '',
        username: '',
        email: '',
        password: '',
        role: '',
        imageSrc: defaultImage,
        imageFile: null,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const userId = getUserIdFromToken();
        if (userId) {
            fetchUserData(userId);
        }
    }, [id]);

    const getUserIdFromToken = () => {
        const token = localStorage.getItem('token');
        if (token) {
            const decodedToken = jwtDecode(token);
            const userId = decodedToken.userId;
            return userId;
        }
        return null;
    };

    const fetchUserData = (userId) => {
        const token = localStorage.getItem('token');
        fetch(`https://medinetaptech.azurewebsites.net/api/v1/Admins/id?id=${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    };

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            await updateAdmins(data.id, data.email, data.username, data.password, data.imageFile);
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
                <h1>Profile</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">Profile</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title " value={data.username}>
                    Hi, {data.username}
                </h2>
                <p className="section-lead">Change information about yourself on this page.</p>
                <div className="row mt-sm-4">
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className="card profile-widget">
                            <div className="profile-widget-header">
                                <img
                                    alt="image"
                                    src={data.imageSrc}
                                    className="rounded-circle profile-widget-picture"
                                />
                                <div className="profile-widget-items">
                                    <div className="profile-widget-item">
                                        <div className="profile-widget-item-label">Posts</div>
                                        <div className="profile-widget-item-value">187</div>
                                    </div>
                                    <div className="profile-widget-item">
                                        <div className="profile-widget-item-label">Followers</div>
                                        <div className="profile-widget-item-value">6,8K</div>
                                    </div>
                                    <div className="profile-widget-item">
                                        <div className="profile-widget-item-label">Following</div>
                                        <div className="profile-widget-item-value">2,1K</div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-widget-description">
                                <div className="profile-widget-name">
                                    {data.username}
                                    <div className="text-muted d-inline font-weight-normal"> Web Developer</div>
                                </div>
                                {data.username} is a superhero name in <b>Indonesia</b>
                            </div>
                            <div className="card-footer text-center">
                                <div className="font-weight-bold mb-2">Follow {data.username} On</div>
                                <a href="#" className="btn btn-social-icon btn-facebook mr-1">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" className="btn btn-social-icon btn-twitter mr-1">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#" className="btn btn-social-icon btn-github mr-1">
                                    <i className="fab fa-github" />
                                </a>
                                <a href="#" className="btn btn-social-icon btn-instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className="card">
                            <form onSubmit={handleUpdate} className="needs-validation">
                                <div className="card-header">
                                    <h4>Edit Profile</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="form-group col-md-6 col-12">
                                            <label>UserName</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.username}
                                                required
                                                onChange={(e) => setData({ ...data, username: e.target.value })}
                                            />
                                            <div className="invalid-feedback">Please fill in the UserName</div>
                                        </div>
                                        <div className="form-group col-md-6 col-12">
                                            <label>Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.email}
                                                required
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                            />
                                            <div className="invalid-feedback">Please fill in the Email</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-6 col-12">
                                            <label>Role</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                required
                                                value={data.role}
                                                onChange={(e) => setData({ ...data, role: e.target.value })}
                                            />
                                            <div className="invalid-feedback">Please fill in the Role</div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="card-footer text-right">
                                    <button type="submit" className="btn btn-primary">
                                        Update Profile
                                    </button>
                                </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
