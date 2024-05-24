import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCourses, editCourses } from '~/services/Courses/courseService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditCourses() {
    const [employees, setEmployees] = useState([]);
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        id: '',
        title: '',
        price: '',
        img: '',
        description: '',
        duration: '',
        location: '',
        topics: '',
        targetAudience: '',
        skillCovered: '',
        medicineSalesTraining: true,
        medicalExaminationTraining: true,
        employeeId: '',
        imageSrc: defaultImage,
        imagesCourseFile: null,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesData = await editCourses(id);
                setData({
                    id: coursesData.id,
                    title: coursesData.title,
                    price: coursesData.price,
                    description: coursesData.description,
                    duration: coursesData.duration,
                    location: coursesData.location,
                    topics: coursesData.topics,
                    targetAudience: coursesData.targetAudience,
                    skillCovered: coursesData.skillCovered,
                    medicineSalesTraining: coursesData.medicineSalesTraining,
                    medicalExaminationTraining: coursesData.medicalExaminationTraining,
                    employeeId: coursesData.employeeId,
                    imageSrc: coursesData.image || defaultImage,
                    imagesCourseFile: null,
                });

                const employeeData = await fetch('https://medinetprj.azurewebsites.net/api/v1/Employees');
                const employeeJson = await employeeData.json();
                setEmployees(employeeJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateCourses(
                data.id,
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
                data.employeeId,
                data.imageFile,
            );
            toast.success('Shop updated successfully');
            navigate('/Courses');
        } catch (error) {
            toast.error('Failed to update Shop');
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
                    <Link to="/Courses" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Edit Courses</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Courses</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Courses</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Courses</h2>
                <p className="section-lead">On this page you can edit Courses details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Courses Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
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
                                            <label className="col-form-label text-md-right">Target Audience</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.targetAudience}
                                                onChange={(e) => setData({ ...data, targetAudience: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Skill Covered</label>
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
                                                    setData({
                                                        ...data,
                                                        medicineSalesTraining: e.target.value === 'true',
                                                    })
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
                                                    setData({
                                                        ...data,
                                                        medicalExaminationTraining: e.target.value === 'true',
                                                    })
                                                }
                                            >
                                                <option value="true">True</option>
                                                <option value="false">False</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Employee Id</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.employeeId}
                                                onChange={(e) => setData({ ...data, employeeId: e.target.value })}
                                            >
                                                <option>Select employee</option>
                                                {employees.map((employee) => (
                                                    <option key={employee.id} value={employee.id}>
                                                        {employee.username}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ImageFile</label>
                                            <div>
                                                <img
                                                    src={data.imageSrc}
                                                    alt="Product"
                                                    style={{ maxWidth: 200, maxHeight: 150, marginBottom: 10 }}
                                                />
                                            </div>
                                            <input
                                                type="file"
                                                className="form-control"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create Course
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

export default EditCourses;
