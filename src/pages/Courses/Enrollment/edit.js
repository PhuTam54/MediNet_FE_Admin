import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateEnrollments, editEnrollments } from '~/services/Courses/enrollmentService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditEnrollments() {
    const [courses, setCourses] = useState([]);
    const [employees, setEmployees] = useState([]);

    const [data, setData] = useState({
        id: '',
        courseId: '',
        employeeId: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const EnrollmentsData = await editEnrollments(id);
                setData({
                    id: EnrollmentsData.id,
                    employeeId: EnrollmentsData.employeeId,
                    courseId: EnrollmentsData.courseId,
                });

                const courseData = await fetch('https://medinetprj.azurewebsites.net/api/v1/Courses');
                const courseJson = await courseData.json();
                setCourses(courseJson);

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
            await updateEnrollments(data.id, data.courseId, data.employeeId);
            toast.success('Shop updated successfully');
            navigate('/Enrollments');
        } catch (error) {
            toast.error('Failed to update Shop');
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
                <h1>Edit Enrollments</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Enrollments</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Enrollments</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Enrollments</h2>
                <p className="section-lead">On this page you can edit Enrollments details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Enrollments Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.id}
                                                disabled
                                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                            />
                                        </div>
                                    </div>
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
                                                Update Enrollments
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

export default EditEnrollments;
