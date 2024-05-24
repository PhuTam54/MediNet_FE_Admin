import images from '~/assets/img/';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { editFeedbacks } from '~/services/Orders/feedbackService';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './detail.css';

function FeedbackDetail() {
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);

    const [data, setData] = useState({
        id: '',
        description: '',
        customerId: '',
        productId: '',
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const feedbackData = await editFeedbacks(id);
                setData({
                    id: feedbackData.id,
                    description: feedbackData.description,
                    customerId: feedbackData.customerId,
                    productId: feedbackData.productId,
                });
                console.log(feedbackData);
                const productData = feedbackData.product;
                setProducts([productData]);

                const customerData = feedbackData.customer;
                setCustomers([customerData]);
            } catch (error) {
                console.error('Error fetching Feedback data:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/product" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Feedbacks Details</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Feedbacks</Link>
                    </div>
                    <div className="breadcrumb-item">Feedbacks Details</div>
                </div>
            </div>
            <div className="section-body">
                <div className="invoice">
                    <div className="invoice-print">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="invoice-title">
                                    <h2>Feedbacks #{data.id}</h2>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <address>
                                            <strong className="fontSize">Billed To:</strong>
                                            <p className="fontSize">
                                                User: {customers.map((customer) => customer.username)}
                                            </p>
                                            <p className="fontSize">
                                                Email: {customers.map((customer) => customer.email)}
                                            </p>
                                            <p className="fontSize"> Vote: {data.vote} </p>
                                            <p className="fontSize"> Description: {data.description} </p>
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
                                            {products.map((product, index) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img
                                                            src={`https://medinetprj.azurewebsites.net/${product.image}`}
                                                            style={{ width: '100px', height: 'auto' }}
                                                            alt={product.name}
                                                        />
                                                    </td>
                                                    <td>{product.name}</td>
                                                    <td>${product.price}</td>
                                                    <td>{data.quantity}</td>
                                                    {/* <td>${item.subtotal}</td> */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeedbackDetail;
