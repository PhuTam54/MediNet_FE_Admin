import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createShows } from '~/services/Movies/showService';
import { useNavigate } from 'react-router-dom';

function CreateShows() {
    const [rooms, setRooms] = useState([]);
    const [movies, setMovies] = useState([]);

    const [data, setData] = useState({
        show_Code: '',
        start_Date: '',
        movie_Id: '',
        room_Id: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
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
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            await createShows(data.show_Code, data.start_Date, data.movie_Id, data.room_Id);
            toast.success('Show created successfully');
            navigate('/Shows');
        } catch (error) {
            toast.error('Failed to create Show');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/Shows" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create Show</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Shows</a>
                    </div>
                    <div className="breadcrumb-item">Create Show</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Show</h2>
                <p className="section-lead">On this page you can create a new Show and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Show</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Show Code
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Enter Show Code"
                                                value={data.show_Code}
                                                onChange={(e) => setData({ ...data, show_Code: e.target.value })}
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
                                                value={data.start_Date}
                                                onChange={(e) => setData({ ...data, start_Date: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Rooms Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.room_Id}
                                                onChange={(e) => setData({ ...data, room_Id: e.target.value })}
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
                                            Movies Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.movie_Id}
                                                onChange={(e) => setData({ ...data, movie_Id: e.target.value })}
                                            >
                                                <option>Select Movies</option>
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
                                                Create Show
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

export default CreateShows;
