import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from '~/assets/img/';
import { httpRequest } from '~/utils/httpRequest';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    });
    const handleLogin = async (event) => {
        event.preventDefault();
        if (validate()) {
            try {
                const response = await httpRequest.post(
                    'https://rmallbe20240413154509.azurewebsites.net/api/v1/LoginRegister/Login',
                    {
                        email: email,
                        password: password,
                    },
                );
                if (response && response.data && response.data.token) {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem('email', email);
                    sessionStorage.setItem('email', email);
                    toast.success('Login successful!');
                    navigate('/');
                    toast.success('Login successful!');
                } else {
                    toast.error('Invalid response from server');
                }
            } catch (error) {
                toast.error('Failed to login. Please try again.');
            }
        }
    };

    const validate = () => {
        if (!email.trim()) {
            toast.warning('Please enter email.');
            return false;
        }
        if (!password.trim()) {
            toast.warning('Please enter password.');
            return false;
        }
        return true;
    };

    return (
        <section className="section">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                        <div className="login-brand">
                            <img src={images.logo} alt="logo" width={100} className="shadow-light rounded-circle" />
                        </div>
                        <div className="card card-primary">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={(event) => setEmail(event.target.value)}
                                        />
                                        <div className="invalid-feedback">Please fill in your email</div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={password}
                                            onChange={(event) => setPassword(event.target.value)}
                                        />
                                        <div className="invalid-feedback">please fill in your password</div>
                                        <div className="float-right">
                                            <Link to="/forgotpassword" className="text-small">
                                                Forgot Password?
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input
                                                type="checkbox"
                                                name="remember"
                                                className="custom-control-input"
                                                tabIndex={3}
                                                id="remember-me"
                                            />
                                            <label className="custom-control-label" htmlFor="remember-me">
                                                Remember Me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button
                                            type="submit"
                                            className={`btn btn-primary btn-lg btn-block ${
                                                email && password ? 'active' : ''
                                            }`}
                                            tabIndex={4}
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-4 mb-3">
                                    <div className="text-job text-muted">Login With Social</div>
                                </div>
                                <div className="mt-5 text-muted text-center">
                                    Don't have an account? <Link to="/register">Create One</Link>
                                </div>
                            </div>
                        </div>
                        <div className="simple-footer">Copyright © Stisla 2018</div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default Login;
