import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateShows, editShows } from '~/services/Movies/showService';
import { useNavigate, useParams } from 'react-router-dom';

function EditShows() {
    const [rooms, setRooms] = useState([]);
    const [movies, setMovies] = useState([]);

    const [data, setData] = useState({
        editId: '',
        editShow_Code: '',
        editStart_Date: '',
        editMovie_Id: '',
        editRoom_Id: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const showData = await editShows(id);
                setData({
                    editId: showData.id,
                    editShow_Code: showData.show_Code,
                    editStart_Date: showData.start_Date,
                    editRoom_Id: showData.room_Id,
                    editMovie_Id: showData.movie_Id,
                });

                const roomsData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Rooms');
                const roomsJson = await roomsData.json();
                setRooms(roomsJson);

                const moviesData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Movies');
                const moviesJson = await moviesData.json();
                setMovies(moviesJson);
            } catch (error) {
                console.error('Error fetching Show data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateShows(
                data.editId,
                data.editShow_Code,
                data.editStart_Date,
                data.editRoom_Id,
                data.editMovie_Id,
            );
            toast.success('Show updated successfully');
            navigate('/shows');
        } catch (error) {
            toast.error('Failed to update Show');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/shows" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Edit Show</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Shows</a>
                    </div>
                    <div className="breadcrumb-item">Edit Show</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Show</h2>
                <p className="section-lead">On this page you can edit Show details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Show Details</h4>
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
                                                placeholder="Show Id"
                                                disabled
                                                value={data.editId}
                                                onChange={(e) => setData({ ...data, editId: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Show Code
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Show Code"
                                                value={data.editShow_Code}
                                                onChange={(e) => setData({ ...data, editShow_Code: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Start Date
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="date"
                                                className="form-control"
                                                placeholder="Enter Start Date"
                                                value={data.editStart_Date}
                                                onChange={(e) => setData({ ...data, editStart_Date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Room Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editRoom_Id}
                                                onChange={(e) => setData({ ...data, editRoom_Id: e.target.value })}
                                            >
                                                <option>Select Rooms</option>
                                                {rooms.map((room) => (
                                                    <option key={room.id} value={room.id}>
                                                        {room.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Movie Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editMovie_Id}
                                                onChange={(e) => setData({ ...data, editMovie_Id: e.target.value })}
                                            >
                                                <option>Select Movie</option>
                                                {movies.map((movie) => (
                                                    <option key={movie.id} value={movie.id}>
                                                        {movie.title}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Update Show
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

export default EditShows;
