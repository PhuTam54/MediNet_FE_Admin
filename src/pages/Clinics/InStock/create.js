import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createInStocks } from '~/services/Clinics/inStockService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateInStocks() {
    const [clinics, setClinics] = useState([]);
    const [products, setProducts] = useState([]);

    const [data, setData] = useState({
        clinicId: '',
        productId: '',
        stockQuantity: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clinicsData = await fetch('https://localhost:7121/api/v1/Clinics');
                const clinicsJson = await clinicsData.json();
                setClinics(clinicsJson);

                const productsData = await fetch('https://localhost:7121/api/v1/Products');
                const productsJson = await productsData.json();
                setProducts(productsJson);
            } catch (error) {
                console.error('Error fetching InStocks data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();

        try {
            await createInStocks(data.clinicId, data.productId, data.stockQuantity);
            toast.success('InStocks created successfully');
            navigate('/InStocks');
        } catch (error) {
            toast.error('Failed to create InStocks');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/InStocks" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create InStocks</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">InStocks</Link>
                    </div>
                    <div className="breadcrumb-item">Create InStocks</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create InStocks</h2>
                <p className="section-lead">On this page you can create a new InStocks and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your InStocks</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Clinic Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.clinicId}
                                                onChange={(e) => setData({ ...data, clinicId: e.target.value })}
                                            >
                                                <option>Select clinic</option>
                                                {clinics.map((clinic) => (
                                                    <option key={clinic.id} value={clinic.id}>
                                                        {clinic.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Product Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.productId}
                                                onChange={(e) => setData({ ...data, productId: e.target.value })}
                                            >
                                                <option>Select clinic</option>
                                                {products.map((product) => (
                                                    <option key={product.id} value={product.id}>
                                                        {product.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            StockQuantity
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.stockQuantity}
                                                onChange={(e) => setData({ ...data, stockQuantity: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create InStocks
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

export default CreateInStocks;
