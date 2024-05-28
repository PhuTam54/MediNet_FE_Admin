import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getProductDetails } from '~/services/Products/productDetailService';
import { Link, useParams } from 'react-router-dom';

function ProductDetails() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const { productId } = useParams();

    // Call Api
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getProductDetails(productId)
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to={`/product`} className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Product Details</h1>
                <div className="section-header-button">
                    <Link to="/product/detail/create" className="btn btn-primary">
                        Add New
                    </Link>
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Product Details</Link>
                    </div>
                    <div className="breadcrumb-item">All Product Details</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            data.map((item, index) => (
                                <Card className="mb-4" key={item.id}>
                                    <Card.Header as="h5">Product Detail {item.id}</Card.Header>
                                    <Card.Body>
                                        <Row>
                                            <Col md={4}>
                                                <img
                                                    src={item.imagesSrc[0]}
                                                    style={{ width: '100%', height: 'auto' }}
                                                    alt={`Product Detail ${index + 1} Image 1`}
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <img
                                                    src={item.imagesSrc[1]}
                                                    style={{ width: '100%', height: 'auto' }}
                                                    alt={`Product Detail ${index + 1} Image 2`}
                                                />
                                            </Col>
                                            <Col md={4}>
                                                <img
                                                    src={item.imagesSrc[2]}
                                                    style={{ width: '100%', height: 'auto' }}
                                                    alt={`Product Detail ${index + 1} Image 3`}
                                                />
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col md={12}>
                                                <h6>Ingredient:</h6>
                                                <p>{item.ingredient}</p>
                                            </Col>
                                            <Col md={12}>
                                                <h6>Usage:</h6>
                                                <p>{item.usage}</p>
                                            </Col>
                                            <Col md={12}>
                                                <h6>Usage Instructions:</h6>
                                                <p>{item.usageInstructions}</p>
                                            </Col>
                                            <Col md={12}>
                                                <h6>Description:</h6>
                                                <p>{item.description}</p>
                                            </Col>
                                            <Col md={12}>
                                                <h6>SideEffects:</h6>
                                                <p>{item.sideEffects}</p>
                                            </Col>
                                            <Col md={12}>
                                                <h6>Precautions:</h6>
                                                <p>{item.precautions}</p>
                                            </Col>
                                            <Col md={12}>
                                                <h6>Storage:</h6>
                                                <p>{item.storage}</p>
                                            </Col>
                                        </Row>
                                        <Row className="row mb-4">
                                            <Col>
                                                <div className="col-md-6 offset-md-3">
                                                    <Link
                                                        to={`/product/detail/edit/${item.id}`}
                                                        className="btn btn-primary btn-block"
                                                        title="Edit"
                                                    >
                                                        Edit
                                                    </Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            ))
                        )}
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default ProductDetails;
