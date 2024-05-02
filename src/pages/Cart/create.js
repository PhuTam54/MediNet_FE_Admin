import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCarts } from '~/services/cartService';
import { useNavigate, Link } from 'react-router-dom';

function CreateCarts() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    const [data, setData] = useState({
        qtyCart: '',
        productID: '',
        userID: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await fetch('https://localhost:7121/api/v1/Products');
                const productJson = await productData.json();
                setProducts(productJson);

                const userData = await fetch('https://localhost:7121/api/v1/Customers');
                const userJson = await userData.json();
                setUsers(userJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };

        fetchData();
    }, []);

    const handleCreate = async (event) => {
        event.preventDefault();
        try {
            await createCarts(data.qtyCart, data.productID, data.userID);
            toast.success('Shop created successfully');
            navigate('/Carts');
        } catch (error) {
            toast.error('Failed to create Shop');
        }
    };

    return (
        <section className="section">
             <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Carts" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Create service</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Carts</Link>
                    </div>
                    <div className="breadcrumb-item">Create service</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create Carts</h2>
                <p className="section-lead">On this page you can create a new Carts and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your Carts</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleCreate}>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            QtyCart
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.qtyCart}
                                                onChange={(e) => setData({ ...data, qtyCart: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Product Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.productID}
                                                onChange={(e) => setData({ ...data, productID: e.target.value })}
                                            >
                                                <option>Select Products</option>
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
                                            User Id
                                        </label>
                                        <div className="col-sm-12 col-md-7">
                                            <select
                                                className="form-control selectric"
                                                value={data.userID}
                                                onChange={(e) => setData({ ...data, userID: e.target.value })}
                                            >
                                                <option>Select Products</option>
                                                {users.map((user) => (
                                                    <option key={user.id} value={user.id}>
                                                        {user.username}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Create Carts
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

export default CreateCarts;
