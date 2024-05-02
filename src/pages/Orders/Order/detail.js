import images from '~/assets/img/';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { editOrders, updateOrders } from '~/services/Orders/orderService';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function OrderDetails() {
    const [categoryChilds, setCategoryChild] = useState([]);
    const [clinics, setClinics] = useState([]);

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
                const productData = await editOrders(id);
                setData({
                    id: productData.id,
                    name: productData.name,
                    email: productData.email,
                    tel: productData.tel,
                    address: productData.address,
                    totalAmount: productData.totalAmount,
                    shipping_method: productData.shipping_method,
                    payment_method: productData.payment_method,
                    is_paid: productData.is_paid,
                    orderDate: productData.orderDate,
                    status: productData.status,
                    userId: productData.userId,
                    cartIds: productData.cartIds,
                });

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

    // const handleUpdate = async (event) => {
    //     event.preventDefault();
    //     try {
    //         await updateOrders(
    //             data.id,
    //             data.name,
    //             data.email,
    //             data.tel,
    //             data.address,
    //             data.shipping_method,
    //             data.payment_method,
    //             data.is_paid,
    //             data.orderDate,
    //             data.status,
    //             data.userId,
    //             data.cartIds,
    //             data.totalAmount,
    //         );
    //         toast.success('Shop updated successfully');
    //         navigate('/product');
    //     } catch (error) {
    //         toast.error('Failed to update Shop');
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
                                                <th>Totals</th>

                                                {/* <th className="text-center">payment_method</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-right">Totals</th> */}
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>Img</td>
                                                <td>Name</td>
                                                <td>$10.99</td>
                                                <td>1</td>
                                                <td>$10.99</td>
                                                {/* <td className="text-center">$10.99</td>
                                                <td className="text-center">1</td>
                                                <td className="text-right">$10.99</td> */}
                                            </tr>
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
                                            <div className="invoice-detail-value">$670.99</div>
                                        </div>
                                        <div className="invoice-detail-item">
                                            <div className="invoice-detail-name">Shipping</div>
                                            <div className="invoice-detail-value">$15</div>
                                        </div>
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
