import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStockOuts } from '~/services/Clinics/stockOutService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateStockOuts() {
    const [clinics, setClinics] = useState([]);
    const [products, setProducts] = useState([]);

    const [data, setData] = useState({
        clinicId: '',
        productId: '',
        quantity: '',
        dateOut: '',
        reason: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clinicsData = await fetch('https://medinetprj.azurewebsites.net/api/v1/Clinics');
                const clinicsJson = await clinicsData.json();
                setClinics(clinicsJson);

                const productsData = await fetch('https://medinetprj.azurewebsites.net/api/v1/Products');
                const productsJson = await productsData.json();
                setProducts(productsJson);
            } catch (error) {
                console.error('Error fetching StockOuts data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        const dateOut = new Date(data.dateOut).toISOString();

        try {
            await createStockOuts(data.clinicId, data.productId, data.quantity, dateOut, data.reason);
            toast.success('StockOuts created successfully');
            navigate('/StockOuts');
        } catch (error) {
            toast.error('Failed to create StockOuts');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/StockOuts" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create StockOuts</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">StockOuts</Link>
                    </div>
                    <div className="breadcrumb-item">Create StockOuts</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create StockOuts</h2>
                <p className="section-lead">On this page you can create a new StockOuts and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your StockOuts</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ClinicId</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.clinicId}
                                                onChange={(e) => setData({ ...data, clinicId: e.target.value })}
                                            >
                                                <option>Select clinics</option>
                                                {clinics.map((clinic) => (
                                                    <option key={clinic.id} value={clinic.id}>
                                                        {clinic.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ProductId</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.productId}
                                                onChange={(e) => setData({ ...data, productId: e.target.value })}
                                            >
                                                <option>Select productId</option>
                                                {products.map((product) => (
                                                    <option key={product.id} value={product.id}>
                                                        {product.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Quantity</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                value={data.quantity}
                                                onChange={(e) => setData({ ...data, quantity: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">DateOut</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.dateOut}
                                                onChange={(e) => setData({ ...data, dateOut: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Reason</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.reason}
                                                onChange={(e) => setData({ ...data, reason: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create StockOuts
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

export default CreateStockOuts;