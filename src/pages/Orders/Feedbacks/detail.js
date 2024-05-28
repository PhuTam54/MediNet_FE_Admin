import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { editFeedbacks } from '~/services/Orders/feedbackService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './detail.css';

function FeedbackDetail() {
    const [customer, setCustomer] = useState({});
    const [product, setProduct] = useState({});
    const [feedback, setFeedback] = useState({});

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const feedbackData = await editFeedbacks(id);
                setFeedback(feedbackData);
                setCustomer(feedbackData.customer);
                setProduct(feedbackData.product);
            } catch (error) {
                console.error('Error fetching Feedback data:', error);
            }
        };
        fetchData();
    }, [id]);

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < feedback.vote; i++) {
            stars.push(<i key={i} className="fas fa-star text-warning"></i>);
        }
        return stars;
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to={`/product`} className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Feedback Details</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Feedbacks</Link>
                    </div>
                    <div className="breadcrumb-item">Feedback Details</div>
                </div>
            </div>
            <div className="section-body">
                <div className="invoice">
                    <div className="invoice-print">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="invoice-title">
                                    <h2>Feedback #{feedback.id}</h2>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-md-6">
                                        <address>
                                            <strong>Feedback To:</strong>
                                            <p>User: {customer.username}</p>
                                            <p>Email: {customer.email}</p>
                                            <p>Vote: {renderStars()}</p>
                                            <img
                                                src={feedback.imagesSrc}
                                                alt={feedback.name}
                                                style={{ maxWidth: '150px' }}
                                            />
                                            <p>Description: {feedback.description}</p>
                                        </address>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="product-details">
                                            <h3>Product Details</h3>
                                            <p>Name: {product.name}</p>
                                            <img
                                                src={`https://medinetprj.azurewebsites.net/` + product.image}
                                                alt={product.name}
                                                style={{ maxWidth: '150px' }}
                                            />
                                            <p>Manufacturer: {product.manufacturer}</p>
                                            <p>Price: ${product.price}</p>
                                            <p>Description: {product.description}</p>
                                        </div>
                                    </div>
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
