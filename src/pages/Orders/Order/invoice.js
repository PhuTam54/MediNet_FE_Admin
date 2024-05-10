import images from '~/assets/img/';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { editOrders, updateOrders } from '~/services/Orders/orderService';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Invoice() {
    const [products, setProducts] = useState([]);

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
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };
        fetchData();
    }, [id]);
    return (
        <section className="section">
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
                                            <br />
                                            <p>Status: {data.status}</p>
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
                        <Link to="javascript:window.print()" class="btn btn-success">
                            <i class="ri-printer-line align-bottom me-1"></i> Invoice
                        </Link>
                        &nbsp; &nbsp;
                        <Link to="javascript:window.print()" class="btn btn-success">
                            <i class="ri-printer-line align-bottom me-1"></i> Download
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Invoice;
