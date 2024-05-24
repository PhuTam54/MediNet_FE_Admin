import images from '~/assets/img/';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { editOrders, updateOrders } from '~/services/Orders/orderService';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './detail.css';

function OrderDetails() {
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
                console.log(orderData.status);
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

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateOrders(data.id, data.status);
            toast.success('orders updated successfully');
            navigate('/orders');
        } catch (error) {
            toast.error('Failed to update orders');
        }
    };

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
                                            <strong className="fontSize">Billed To:</strong>
                                            <p className="fontSize"> User: {data.name} </p>
                                            <p className="fontSize"> Email: {data.email} </p>
                                            <p className="fontSize"> TelePhone: {data.tel} </p>
                                            <p className="fontSize">Status: {data.status}</p>
                                        </address>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <address>
                                            <strong className="fontSize">Shipped To:</strong>
                                            <p className="fontSize"> Address: {data.address} </p>
                                        </address>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <address>
                                            <p className="fontSize"> Payment Method: {data.payment_method} </p>
                                        </address>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <address>
                                            <strong className="fontSize">Order Date:</strong>
                                            <p className="fontSize"> {data.orderDate}</p>
                                        </address>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleUpdate}>
                            <div className="row mb-4">
                                <div className="col-md-2">
                                    <select
                                        className="form-control"
                                        id="status"
                                        value={data.status}
                                        disabled={data.status === 4 || data.status === 5}
                                        onChange={(e) => {
                                            console.log(e.target.value);
                                            setData({ ...data, status: e.target.value });
                                        }}
                                    >
                                        <option value={0}>Pending</option>
                                        <option value={1}>Confirmed</option>
                                        <option value={2}>Shipping</option>
                                        <option value={3}>Shipped</option>
                                        <option value={4}>Complete</option>
                                        {/* <option value={5}>Cancel</option> */}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-primary" type="submit">
                                        Update Status
                                    </button>
                                </div>
                            </div>
                        </form>

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
                                                            src={`https://medinetprj.azurewebsites.net/${item.product.image}`}
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
                        <Link to={`/orders/invoice/${id}`} className="btn btn-primary me-1">
                            <i class="fa-solid fa-download"></i> Invoice
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OrderDetails;
