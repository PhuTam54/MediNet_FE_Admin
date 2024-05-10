import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateCarts, editCarts } from '~/services/cartService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditCarts() {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    const [data, setData] = useState({
        id: '',
        qtyCart: '',
        productID: '',
        userID: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const cartsData = await editCarts(id);
                setData({
                    id: cartsData.id,
                    qtyCart: cartsData.qtyCart,
                    productID: cartsData.productID,
                    userID: cartsData.userID,
                });

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
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateCarts(data.id, data.productID, data.qtyCart);
            toast.success('Shop updated successfully');
            navigate('/product');
        } catch (error) {
            toast.error('Failed to update Shop');
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
                <h1>Edit Carts</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Carts</Link>
                    </div>
                    <div className="breadcrumb-item">Edit Carts</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit Carts</h2>
                <p className="section-lead">On this page you can edit Carts details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit Carts Details</h4>
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
                                                value={data.id}
                                                disabled
                                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            Qty Cart
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
                                                        {user.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <div className="col-sm-12 col-md-7 offset-md-3">
                                            <button className="btn btn-primary" type="submit">
                                                Update Carts
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

export default EditCarts;
