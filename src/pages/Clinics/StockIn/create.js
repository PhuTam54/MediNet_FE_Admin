import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createStockIns } from '~/services/Clinics/stockInService';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function CreateStockIns() {
    const [clinics, setClinics] = useState([]);
    const [products, setProducts] = useState([]);

    const [data, setData] = useState({
        clinicId: '',
        productId: '',
        quantity: '',
        dateIn: '',
        supplier: '',
        manufacturerDate: '',
        expiryDate: '',
        // status: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const clinicsData = await fetch('https://medinetaptech.azurewebsites.net/api/v1/Clinics');
                const clinicsJson = await clinicsData.json();
                setClinics(clinicsJson);

                const productsData = await fetch('https://medinetaptech.azurewebsites.net/api/v1/Products');
                const productsJson = await productsData.json();
                setProducts(productsJson);
            } catch (error) {
                console.error('Error fetching StockIns data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        const dateIn = new Date(data.dateIn).toISOString();
        const manufacturerDate = new Date(data.manufacturerDate).toISOString();
        const expiryDate = new Date(data.expiryDate).toISOString();

        try {
            await createStockIns(
                data.clinicId,
                data.productId,
                data.quantity,
                dateIn,
                data.supplier,
                manufacturerDate,
                expiryDate,
                // data.status,
            );
            toast.success('StockIns created successfully');
            navigate('/StockIns');
        } catch (error) {
            toast.error('Failed to create StockIns');
        }
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/StockIns" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create StockIns</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">StockIns</Link>
                    </div>
                    <div className="breadcrumb-item">Create StockIns</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create StockIns</h2>
                <p className="section-lead">On this page you can create a new StockIns and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your StockIns</h4>
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
                                            <label className="col-form-label text-md-right">DateIn</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.dateIn}
                                                onChange={(e) => setData({ ...data, dateIn: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Supplier</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.supplier}
                                                onChange={(e) => setData({ ...data, supplier: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ManufacturerDate</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.manufacturerDate}
                                                onChange={(e) => setData({ ...data, manufacturerDate: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">ExpiryDate</label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                value={data.expiryDate}
                                                onChange={(e) => setData({ ...data, expiryDate: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create StockIns
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

export default CreateStockIns;
