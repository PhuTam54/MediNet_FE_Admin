import React, { useState } from 'react';
import images from '~/assets/img/';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển hướng

    const handleSave = (e) => {
        e.preventDefault();
        if (user && email && password && confirmPassword) {
            const url = 'https://rmallbe20240413154509.azurewebsites.net/api/v1/LoginRegister/Register';
            const newData = {
                userName: user,
                email: email,
                password: password,
                confirmPassword: confirmPassword,
            };
            axios
                .post(url, newData)
                .then((result) => {
                    toast.success('Registration successful');
                    navigate('/login');
                })
                .catch((error) => {
                    toast.error('Failed to register', error);
                });
        }
    };

    return (
        <section className="section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
                        <div className="login-brand">
                            <img src={images.logo} alt="logo" width={100} className="shadow-light rounded-circle" />
                        </div>
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <label htmlFor="user">User</label>
                                    <input
                                        id="user"
                                        type="text"
                                        className="form-control"
                                        placeholder="User"
                                        value={user}
                                        onChange={(e) => setUser(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="row">
                                    <div className="form-group col-6">
                                        <label htmlFor="password" className="d-block">
                                            Password
                                        </label>
                                        <input
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group col-6">
                                        <label htmlFor="confirmPassword" className="d-block">
                                            Confirmation Password
                                        </label>
                                        <input
                                            id="confirmPassword"
                                            type="password"
                                            className="form-control"
                                            placeholder="Confirmation Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            type="checkbox"
                                            name="agree"
                                            className="custom-control-input"
                                            id="agree"
                                        />
                                        <label className="custom-control-label" htmlFor="agree">
                                            I agree with the terms and conditions
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg btn-block"
                                        onClick={handleSave}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div className="mt-5 text-muted text-center">
                                    You have an account? <a href="/login">Login</a>
                                </div>
                            </div>
                        </div>
                        <div className="simple-footer">Copyright © Stisla 2018</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;
