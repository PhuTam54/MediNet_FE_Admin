import images from '~/assets/img/';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { editOrders, updateOrders } from '~/services/Orders/orderService';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderDetails() {
    const [categoryChilds, setCategoryChild] = useState([]);
    const [clinics, setClinics] = useState([]);
    const [products, setProducts] = useState([]);
    const [newStatus, setNewStatus] = useState('');

    const [data, setData] = useState({
        id: '',
        name: '',
        email: '',
        tel: '',
        address: '',
        totalAmount: '',
        shipping_method: '',
        payment_method: '',
        is_paid: '',
        orderDate: '',
        status: '',
        userId: '',
        cartIds: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderData = await editOrders(id);
                setData({
                    id: orderData.id,
                    name: orderData.name,
                    email: orderData.email,
                    tel: orderData.tel,
                    address: orderData.address,
                    totalAmount: orderData.totalAmount,
                    shipping_method: orderData.shipping_method,
                    payment_method: orderData.payment_method,
                    is_paid: orderData.is_paid,
                    orderDate: orderData.orderDate,
                    status: orderData.status,
                    userId: orderData.userId,
                    cartIds: orderData.cartIds,
                });

                console.log(orderData);

                const productData = orderData.orderProducts;
                setProducts(productData);

                const clinicData = await fetch('https://localhost:7121/api/v1/Clinics');
                const clinicJson = await clinicData.json();
                setClinics(clinicJson);

                const categoryChildData = await fetch('https://localhost:7121/api/v1/categoryChilds');
                const categoryChildJson = await categoryChildData.json();
                setCategoryChild(categoryChildJson);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleStatusChange = (event) => {
        setNewStatus(event.target.value);
    };

    const handleUpdateStatus = async () => {
        try {
            await updateOrders(data.id, { status: newStatus });
            setData({ ...data, status: newStatus });
            toast.success('Status updated successfully');
        } catch (error) {
            toast.error('Failed to update status');
        }
    };

    // const handleUpdate = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await updateOrders(
    //             // data.id,
    //             // data.name,
    //             // data.email,
    //             // data.tel,
    //             // data.address,
    //             // data.shipping_method,
    //             // data.payment_method,
    //             // data.is_paid,
    //             // data.orderDate,
    //             data.status,
    //             // data.userId,
    //             // data.cartIds,
    //             // data.totalAmount,
    //         );
    //         toast.success('orders updated successfully');
    //         navigate('/orders');
    //     } catch (error) {
    //         toast.error('Failed to update orders');
    //     }
    // };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/Orders" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Orders Details</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Orders</Link>
                    </div>
                    <div className="breadcrumb-item">Orders Details</div>
                </div>
            </div>
            <div className="section-body">
                <div className="invoice">
                    <div className="invoice-print">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="invoice-title">
                                    <h2>Orders #{data.id}</h2>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <address>
                                            <strong>Billed To:</strong>
                                            <br />
                                            User: {data.name}
                                            <br />
                                            Email: {data.email}
                                            <br />
                                            TelePhone: {data.tel}
                                        </address>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <address>
                                            <strong>Shipped To:</strong>
                                            <br />
                                            Address: {data.address}
                                        </address>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <address>
                                            <strong>Payment Method:</strong>
                                            <br />
                                            Payment Method: {data.payment_method}
                                        </address>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <address>
                                            <strong>Order Date:</strong>
                                            <br />
                                            {data.orderDate}
                                            <br />
                                            <br />
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label htmlFor="status">Status:</label>
                                <select
                                    className="form-control"
                                    id="status"
                                    value={newStatus}
                                    onChange={handleStatusChange}
                                >
                                    <option value={0}>Pending</option>
                                    <option value={1}>Confirmed</option>
                                    <option value={2}>Shipping</option>
                                    <option value={3}>Shipped</option>
                                    <option value={4}>Complete</option>
                                    <option value={5}>Cancel</option>
                                </select>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-12">
                                <div className="section-title">Order Summary</div>
                                <p className="section-lead">All items here cannot be deleted.</p>
                                <div className="table-responsive">
                                    <table className="table table-striped table-hover table-md">
                                        <tbody>
                                            <tr>
                                                <th data-width={40}>#</th>
                                                <th>Products</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                            </tr>
                                            {products.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img
                                                            src={`https://localhost:7121/${item.product.image}`}
                                                            style={{ width: '100px', height: 'auto' }}
                                                            alt={item.image}
                                                        />
                                                    </td>
                                                    <td>{item.product.name}</td>
                                                    <td>${item.product.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>${item.subtotal}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-lg-8">
                                        <div className="section-title">Payment Method</div>
                                        <p className="section-lead">
                                            The payment method that we provide is to make it easier for you to pay
                                            invoices.
                                        </p>
                                        {/* <div className="images">
                                            <img src={images} alt="visa" />
                                            <img src={images} alt="jcb" />
                                            <img src={images} alt="mastercard" />
                                            <img src={images} alt="paypal" />
                                        </div> */}
                                    </div>
                                    <div className="col-lg-4 text-right">
                                        <div className="invoice-detail-item">
                                            <div className="invoice-detail-name">Subtotal</div>
                                            <div className="invoice-detail-value">${data.totalAmount}</div>
                                        </div>
                                        {/* <div className="invoice-detail-item">
                                            <div className="invoice-detail-name">Shipping</div>
                                            <div className="invoice-detail-value">${data.totalAmount + data.shipping_method}</div>
                                        </div> */}
                                        <hr className="mt-2 mb-2" />
                                        <div className="invoice-detail-item">
                                            <div className="invoice-detail-name">Total</div>
                                            <div className="invoice-detail-value invoice-detail-value-lg">
                                                ${data.totalAmount}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="text-md-right">
                        <div className="float-lg-left mb-lg-0 mb-3">
                            <button className="btn btn-primary btn-icon icon-left">
                                <i className="fas fa-credit-card" /> Process Payment
                            </button>
                            &nbsp; &nbsp;
                            <button className="btn btn-danger btn-icon icon-left">
                                <i className="fas fa-times" /> Cancel
                            </button>
                        </div>
                        <button className="btn btn-primary" onClick={handleUpdateStatus} disabled={!newStatus}>
                            Update Status
                        </button>
                        &nbsp; &nbsp;
                        <button className="btn btn-warning btn-icon icon-left">
                            <i className="fas fa-print" /> Print
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrderDetails;
