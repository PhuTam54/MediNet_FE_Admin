import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { editOrders, updateOrders } from '~/services/Orders/orderService';
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

    const [tempStatus, setTempStatus] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orderData = await editOrders(id);
                setData(orderData);
                setProducts(orderData.orderProducts);
                setTempStatus(orderData.status);
            } catch (error) {
                console.error('Error fetching Shop data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();
        try {
            await updateOrders(data.id, tempStatus);
            toast.success('Order updated successfully');
            setData((prevData) => ({
                ...prevData,
                status: tempStatus,
            }));
            navigate('/orders');
        } catch (error) {
            toast.error('Failed to update order');
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
        });
    };
    const getSelectableOptions = () => {
        const options = [
            { value: 0, label: 'Pending' },
            { value: 1, label: 'Confirmed' },
            { value: 2, label: 'Shipping' },
            { value: 3, label: 'Shipped' },
            { value: 4, label: 'Complete' },
            { value: 5, label: 'Canceled' },
        ];

        switch (tempStatus) {
            case 0:
                return options.filter((option) => ![2, 3, 4].includes(option.value));
            case 1:
                return options.filter((option) => ![0, 3, 4].includes(option.value));
            case 2:
                return options.filter((option) => ![0, 1, 4, 5].includes(option.value));
            case 3:
                return options.filter((option) => ![0, 1, 2, 5].includes(option.value));
            case 4:
                return options.filter((option) => ![0, 1, 2, 3].includes(option.value));
            default:
                return options;
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
                <h1>Order Details</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Orders</Link>
                    </div>
                    <div className="breadcrumb-item">Order Details</div>
                </div>
            </div>
            <div className="section-body">
                <div className="invoice">
                    <div className="invoice-print">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="invoice-title">
                                    <h2>Order #{data.id}</h2>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <address>
                                            <strong>Billed To:</strong>
                                            <p>User: {data.name}</p>
                                            <p>Email: {data.email}</p>
                                            <p>Telephone: {data.tel}</p>
                                            <p>OrderCode: {data.orderCode}</p>
                                        </address>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <address>
                                            <strong>Shipped To:</strong>
                                            <p>Address: {data.address}</p>
                                        </address>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <address>
                                            <p>Payment Method: {data.payment_method}</p>
                                        </address>
                                    </div>
                                    <div className="col-md-6 text-md-right">
                                        <address>
                                            <strong>Order Date:</strong>
                                            <p>{formatDate(data.orderDate)}</p>
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
                                        value={tempStatus}
                                        onChange={(e) => setTempStatus(parseInt(e.target.value))}
                                        disabled={data.status !== tempStatus || data.status === 4 || data.status === 5}
                                    >
                                        {getSelectableOptions().map((option) => (
                                            <option key={option.value} value={option.value}>
                                                {option.label}
                                            </option>
                                        ))}
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
                                                <th>#</th>
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
                                                            src={item.product.imageSrc}
                                                            style={{ width: '100px', height: 'auto' }}
                                                            alt={item.image}
                                                        />
                                                    </td>
                                                    <td>{item.product.name}</td>
                                                    <td>${item.product.price}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>${data.totalAmount}</td>
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
                            <i className="fa-solid fa-download"></i> Invoice
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default OrderDetails;
