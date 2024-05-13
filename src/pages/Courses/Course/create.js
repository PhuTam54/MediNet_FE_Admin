import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCourses } from '~/services/Courses/courseService';
import { useNavigate, Link } from 'react-router-dom';

function CreateCourses() {
    const [doctors, setDoctors] = useState([]);

    const [data, setData] = useState({
        title: '',
        price: '',
        description: '',
        duration: '',
        location: '',
        topics: '',
        targetAudience: '',
        skillCovered: '',
        medicineSalesTraining: '',
        medicalExaminationTraining: '',
        doctorId: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const doctorData = await fetch('https://localhost:7121/api/v1/Doctors');
                const doctorJson = await doctorData.json();
                setDoctors(doctorJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            await createCourses(
                data.title,
                data.price,
                data.description,
                data.duration,
                data.location,
                data.topics,
                data.targetAudience,
                data.skillCovered,
                data.medicineSalesTraining,
                data.medicalExaminationTraining,
                data.doctorId,
            );
            toast.success('Shop created successfully');
            navigate('/Courses');
        } catch (error) {
            toast.error('Failed to create Shop');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Courses" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create Courses</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Coursess</Link>
                    </div>
                    <div className="breadcrumb-item">Create Courses</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Courses</h2>
                <p className="section-lead">On this page you can create a new Courses and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Courses</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.title}
                                                onChange={(e) => setData({ ...data, title: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.price}
                                                onChange={(e) => setData({ ...data, price: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Duration</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.duration}
                                                onChange={(e) => setData({ ...data, duration: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Location</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.location}
                                                onChange={(e) => setData({ ...data, location: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Topics</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.topics}
                                                onChange={(e) => setData({ ...data, topics: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">TargetAudience</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.targetAudience}
                                                onChange={(e) => setData({ ...data, targetAudience: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">SkillCovered</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.skillCovered}
                                                onChange={(e) => setData({ ...data, skillCovered: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">
                                                Medicine Sales Training
                                            </label>
                                            <select
                                                className="form-control"
                                                value={data.medicineSalesTraining}
                                                onChange={(e) =>
                                                    setData({ ...data, medicineSalesTraining: e.target.value })
                                                }
                                            >
                                                <option value="true">True</option>
                                                <option value="false">False</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">
                                                Medical Examination Training
                                            </label>
                                            <select
                                                className="form-control"
                                                value={data.medicalExaminationTraining}
                                                onChange={(e) =>
                                                    setData({ ...data, medicalExaminationTraining: e.target.value })
                                                }
                                            >
                                                <option value="true">True</option>
                                                <option value="false">False</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Doctor Id</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.doctorId}
                                                onChange={(e) => setData({ ...data, doctorId: e.target.value })}
                                            >
                                                <option>Select Doctors</option>
                                                {doctors.map((doctor) => (
                                                    <option key={doctor.id} value={doctor.id}>
                                                        {doctor.username}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create Customers
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

export default CreateCourses;
