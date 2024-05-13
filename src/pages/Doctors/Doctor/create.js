import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createDoctors } from '~/services/Doctors/doctorService';
import { useNavigate, Link } from 'react-router-dom';

function CreateDoctors() {
    const [specialists, setSpecialists] = useState([]);
    const [clinics, setClinics] = useState([]);

    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        full_Name: '',
        address: '',
        date_Of_Birth: '',
        phoneNumber: '',
        specialistId: '',
        username: '',
        email: '',
        password: '',
        clinicId: '',
        imageSrc: defaultImage,
        imageFile: null,
        image: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const specialistData = await fetch('https://localhost:7121/api/v1/Specialists');
                const specialistJson = await specialistData.json();
                setSpecialists(specialistJson);

                const clinicData = await fetch('https://localhost:7121/api/v1/Clinics');
                const clinicJson = await clinicData.json();
                setClinics(clinicJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        const date_Of_Birth = new Date(data.date_Of_Birth).toISOString();

        await createDoctors(
            data.full_Name,
            data.address,
            date_Of_Birth,
            data.phoneNumber,
            data.specialistId,
            data.username,
            data.email,
            data.password,
            data.clinicId,
            data.imageFile,
        );
        try {
            toast.success('Doctors created successfully');
            navigate('/Doctors');
        } catch (error) {
            toast.error('Failed to create Doctors');
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
                    <Link to="/Doctors" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create Doctors</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard </Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Doctorss </Link>
                    </div>
                    <div className="breadcrumb-item">Create Doctors</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Doctors</h2>
                <p className="section-lead">On this page you can create a new Doctors and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Doctors</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Full Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.full_Name}
                                                onChange={(e) => setData({ ...data, full_Name: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Address</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.address}
                                                onChange={(e) => setData({ ...data, address: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Date Of Birth</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.date_Of_Birth}
                                                onChange={(e) => setData({ ...data, date_Of_Birth: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">SpecialistId</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.specialistId}
                                                onChange={(e) => setData({ ...data, specialistId: e.target.value })}
                                            >
                                                <option>Select specialistId</option>
                                                {specialists.map((specialist) => (
                                                    <option key={specialist.id} value={specialist.id}>
                                                        {specialist.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.username}
                                                onChange={(e) => setData({ ...data, username: e.target.value })}
                                            />
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Email</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.email}
                                                onChange={(e) => setData({ ...data, email: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ClinicId</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.clinicId}
                                                onChange={(e) => setData({ ...data, clinicId: e.target.value })}
                                            >
                                                <option>Select clinicId</option>
                                                {clinics.map((clinic) => (
                                                    <option key={clinic.id} value={clinic.id}>
                                                        {clinic.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">PhoneNumber</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.phoneNumber}
                                                onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Password</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.password}
                                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ImageFile</label>
                                            <div>
                                                <img
                                                    src={data.imageSrc}
                                                    alt="Doctors"
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

export default CreateDoctors;
