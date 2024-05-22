import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createBlogs } from '~/services/Doctors/blogService';
import { useNavigate, Link } from 'react-router-dom';
import { postLogin } from '~/services/Account/accountService';

function CreateBlogs() {
    const [employees, setEmployees] = useState([]);
    const [diseases, setDiseases] = useState([]);

    const [data, setData] = useState({
        title: '',
        content: '',
        employeeId: '',
        diseaseId: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const employeeData = await fetch('https://localhost:7121/api/v1/Employees');
                const employeeJson = await employeeData.json();
                setEmployees(employeeJson);

                const diseaseData = await fetch('https://localhost:7121/api/v1/Diseases');
                const diseaseJson = await diseaseData.json();
                setDiseases(diseaseJson);
            } catch (error) {
                console.error('Error fetching Blogs data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            await createBlogs(data.title, data.content, data.employeeId, data.diseaseId);
            toast.success('Blogs created successfully');
            navigate('/Blogs');
        } catch (error) {
            toast.error('Failed to create Blogs');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Blogs" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create Blogs</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Blogss</Link>
                    </div>
                    <div className="breadcrumb-item">Create Blogs</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Blogs</h2>
                <p className="section-lead">On this page you can create a new Blogs and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Blogs</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Title
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.title}
                                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Content
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.content}
                                                onChange={(e) => setData({ ...data, content: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            EmployeeId
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.employeeId}
                                                onChange={(e) => setData({ ...data, employeeId: e.target.value })}
                                            >
                                                <option>Select Employee</option>
                                                {employees.map((employee) => (
                                                    <option key={employee.id} value={employee.id}>
                                                        {employee.username}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            DiseaseId
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.diseaseId}
                                                onChange={(e) => setData({ ...data, diseaseId: e.target.value })}
                                            >
                                                <option>Select Disease</option>
                                                {diseases.map((disease) => (
                                                    <option key={disease.id} value={disease.id}>
                                                        {disease.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create Blogs
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

export default CreateBlogs;
