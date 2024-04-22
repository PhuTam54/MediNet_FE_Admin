import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createMovies } from '~/services/Movie/movieService';
import { useNavigate } from 'react-router-dom';

function CreateMovies() {
    const [genres, setGenres] = useState([]);
    const [languages, setLanguages] = useState([]);

    const [data, setData] = useState({
        title: '',
        actor: '',
        movie_Image: '',
        cover_Image: '',
        description: '',
        duration: '',
        director: '',
        favorite_Count: '',
        trailer: '',
        genreIds: '0',
        languageIds: '0',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const genresData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Genres');
                const genresJson = await genresData.json();
                setGenres(genresJson);

                const languagesData = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Languages');
                const languagesJson = await languagesData.json();
                setLanguages(languagesJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            await createMovies(data);
            toast.success('Shop created successfully');
            navigate('/movies');
        } catch (error) {
            toast.error('Failed to create Shop');
        }
    };

    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setData({ ...data, image: image });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/movies" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create Movies</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Moviess</a>
                    </div>
                    <div className="breadcrumb-item">Create Movies</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Movies</h2>
                <p className="section-lead">On this page you can create a new Movies and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Movies</h4>
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
                                            <label className="col-form-label text-md-right">Actor</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.actor}
                                                onChange={(e) => setData({ ...data, actor: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Movie_Image</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.movie_Image}
                                                onChange={(e) => setData({ ...data, movie_Image: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Cover_Image</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.cover_Image}
                                                onChange={(e) => setData({ ...data, cover_Image: e.target.value })}
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
                                            <label className="col-form-label text-md-right">Director</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.director}
                                                onChange={(e) => setData({ ...data, director: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Favorite Count</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.favorite_Count}
                                                onChange={(e) => setData({ ...data, favorite_Count: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Trailer</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.trailer}
                                                onChange={(e) => setData({ ...data, trailer: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Languages Id</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.languageIds}
                                                onChange={(e) => setData({ ...data, languageIds: e.target.value })}
                                            >
                                                <option>Select Languages</option>
                                                {languages.map((lg) => (
                                                    <option key={lg.id} value={lg.id}>
                                                        {lg.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Genres Id</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.genreIds}
                                                onChange={(e) => setData({ ...data, genreIds: e.target.value })}
                                            >
                                                <option>Select Genres</option>
                                                {genres.map((genre) => (
                                                    <option key={genre.id} value={genre.id}>
                                                        {genre.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create Movies
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

export default CreateMovies;
