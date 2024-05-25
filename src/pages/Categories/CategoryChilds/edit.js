import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCategoryChilds, editCategoryChilds } from '~/services/Categories/categoryChildService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditCategoryChilds() {
    const [categories, setCategories] = useState([]);

    const [data, setData] = useState({
        editId: '',
        editCategoryId: '',
        editName: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryChildsData = await editCategoryChilds(id);
                setData({
                    editId: categoryChildsData.id,
                    editName: categoryChildsData.name,
                    editCategoryId: categoryChildsData.categoryId,
                });

                const categoryData = await fetch('https://medinetprj.azurewebsites.net/api/v1/Categories');
                const categoryJson = await categoryData.json();
                setCategories(categoryJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateCategoryChilds(data.editId, data.editName, data.editCategoryId);
            toast.success('Shop updated successfully');
            navigate('/CategoryChilds');
        } catch (error) {
            toast.error('Failed to update Shop');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/categoryChilds" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Edit CategoryChilds</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">CategoryChilds</Link>
                    </div>
                    <div className="breadcrumb-item">Edit CategoryChilds</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit CategoryChilds</h2>
                <p className="section-lead">On this page you can edit CategoryChilds details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit CategoryChilds Details</h4>
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
                                                value={data.editId}
                                                disabled
                                                onChange={(e) => setData({ ...data, editId: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Name
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.editName}
                                                onChange={(e) => setData({ ...data, editName: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Category
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.editCategoryId}
                                                onChange={(e) => setData({ ...data, editCategoryId: e.target.value })}
                                            >
                                                <option>Select categories</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Update CategoryChilds
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

export default EditCategoryChilds;
