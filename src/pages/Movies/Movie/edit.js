import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateMovies, editMovies } from '~/services/Movie/movieService';
import { useNavigate, useParams } from 'react-router-dom';

function EditMovies() {
    const [genres, setGenres] = useState([]);
    const [languages, setLanguages] = useState([]);

    const [data, setData] = useState({
        editId: '',
        editTitle: '',
        editActor: '',
        editMovieImg: '',
        editCoverImg: '',
        editDescription: '',
        editDuration: '',
        editDirector: '',
        editFavoriteCount: '',
        editTrailer: '',
        editGenresId: '',
        editLanguesIs: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const movieData = await editMovies(id);
                setData({
                    editId: movieData.id,
                    editTitle: movieData.title,
                    editActor: movieData.actor,
                    editMovieImg: movieData.movie_Image,
                    editCoverImg: movieData.cover_Image,
                    editDescription: movieData.description,
                    editDuration: movieData.duration,
                    editDirector: movieData.director,
                    editFavoriteCount: movieData.favorite_Count,
                    editTrailer: movieData.trailer,
                    editGenresId: movieData.genreIds,
                    editLanguesIs: movieData.languageIds,
                });

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
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateMovies(
                data.editId,
                data.editTitle,
                data.editActor,
                data.editMovieImg,
                data.editCoverImg,
                data.editDescription,
                data.editDirector,
                data.editDuration,
                data.editFavoriteCount,
                data.editTrailer,
                data.editGenresId,
                data.editLanguesIs,
            );
            toast.success('Shop updated successfully');
            navigate('/Movies');
        } catch (error) {
            toast.error('Failed to update Shop');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="/movies" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Edit Movie</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Movies</a>
                    </div>
                    <div className="breadcrumb-item">Edit Movie</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Movie</h2>
                <p className="section-lead">On this page you can edit Movie details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Movie Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input type="text" className="form-control" value={data.editId} disabled />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Title
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editTitle}
                                                onChange={(e) => setData({ ...data, editTitle: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Actor
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editActor}
                                                onChange={(e) => setData({ ...data, editActor: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Movie Image
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editMovieImg}
                                                onChange={(e) => setData({ ...data, editMovieImg: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Cover Image
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editCoverImg}
                                                onChange={(e) => setData({ ...data, editCoverImg: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Description
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editDescription}
                                                onChange={(e) => setData({ ...data, editDescription: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Duration
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editDuration}
                                                onChange={(e) => setData({ ...data, editDuration: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Director
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editDirector}
                                                onChange={(e) => setData({ ...data, editDirector: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Favorite Count
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.editFavoriteCount}
                                                onChange={(e) =>
                                                    setData({ ...data, editFavoriteCount: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Trailer
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editTrailer}
                                                onChange={(e) => setData({ ...data, editTrailer: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Genres Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editGenresId}
                                                onChange={(e) => setData({ ...data, editGenresId: e.target.value })}
                                            >
                                                <option>Select genre</option>
                                                {genres.map((genre) => (
                                                    <option key={genre.id} value={genre.id}>
                                                        {genre.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Languages Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editLanguesIs}
                                                onChange={(e) => setData({ ...data, editLanguesIs: e.target.value })}
                                            >
                                                <option>Select language</option>
                                                {languages.map((language) => (
                                                    <option key={language.id} value={language.id}>
                                                        {language.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Update Movie
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

export default EditMovies;
