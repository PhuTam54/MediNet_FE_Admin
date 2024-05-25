import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createEnrollments } from '~/services/Courses/enrollmentService';
import { useNavigate, Link } from 'react-router-dom';

function CreateEnrollments() {
    const [courses, setCourses] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [data, setData] = useState({
        courseId: '',
        employeeId: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const courseData = await fetch('https://medinetprj.azurewebsites.net/api/v1/Courses');
                const courseJson = await courseData.json();
                setCourses(courseJson);

                const employeeData = await fetch('https://medinetprj.azurewebsites.net/api/v1/Employees');
                const employeeJson = await employeeData.json();
                setEmployees(employeeJson);
            } catch (error) {
                console.error('Error fetching Enrollments data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            await createEnrollments(data.courseId, data.employeeId);
            toast.success('Enrollments created successfully');
            navigate('/Enrollments');
        } catch (error) {
            toast.error('Failed to create Enrollments');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Enrollments" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create Enrollments</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Enrollmentss</Link>
                    </div>
                    <div className="breadcrumb-item">Create Enrollments</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Enrollments</h2>
                <p className="section-lead">On this page you can create a new Enrollments and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Enrollments</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Courses
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.courseId}
                                                onChange={(e) => setData({ ...data, courseId: e.target.value })}
                                            >
                                                <option>Select categories</option>
                                                {courses.map((course) => (
                                                    <option key={course.id} value={course.id}>
                                                        {course.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Employees
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.employeeId}
                                                onChange={(e) => setData({ ...data, employeeId: e.target.value })}
                                            >
                                                <option>Select employees</option>
                                                {employees.map((employee) => (
                                                    <option key={employee.id} value={employee.id}>
                                                        {employee.full_Name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create Enrollments
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

export default CreateEnrollments;
