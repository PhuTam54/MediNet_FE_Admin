import React, { useState, useEffect } from 'react';
import { getProduct } from '~/services/Products/productService';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getProduct()
            .then((data) => {
                const sortedData = data.sort((a, b) => b.orders - a.orders);
                const topProducts = sortedData.slice(0, 7);
                setProducts(topProducts);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const formatDate = (inputDate) => {
        const parsedDate = moment(inputDate);
        const formattedDate = parsedDate.format('HH:mm:ss DD/MM/YYYY');

        return formattedDate;
    };

    const truncateProductCode = (ProductCode) => {
        if (ProductCode && ProductCode.length > 7) {
            return ProductCode.substring(0, 7) + '...';
        } else {
            return ProductCode;
        }
    };

    return (
        <div className="section-body">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Best-selling products</h4>
                            <div className="card-header-action">
                                <Link to="/Product" className="btn btn-danger">
                                    View More <i className="fas fa-chevron-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive table-invoice">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th>Id</th>
                                            <th>Img</th>
                                            <th>Name</th>
                                            <th>CategoryChild</th>
                                            <th>Quantity</th>
                                            <th>Price</th>
                                            <th>Actions</th>
                                        </tr>
                                        {products.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img
                                                        src={item.imageSrc}
                                                        style={{ width: '100px', height: 'auto' }}
                                                        alt={item.image}
                                                    />
                                                </td>
                                                <td>{item.name}</td>
                                                <td>{item.categoryChild.name}</td>
                                                <td>
                                                    {item.inStocks.length > 0 ? item.inStocks[0].stockQuantity : '0'}
                                                </td>
                                                <td>{item.price}$</td>
                                                <td colSpan={2}>
                                                    <Link
                                                        to={`/product/detail/${item.id}`}
                                                        className="btn btn-primary"
                                                        title="Details"
                                                    >
                                                        <i class="far fa-eye"></i>
                                                    </Link>
                                                    &nbsp;
                                                    <Link
                                                        to={`/product/feedbacks/${item.id}`}
                                                        className="btn btn-primary"
                                                        title="Feedbacks"
                                                    >
                                                        <i class="fa-solid fa-comment"></i>
                                                    </Link>
                                                    &nbsp;
                                                    <Link
                                                        to={`/product/edit/${item.id}`}
                                                        className="btn btn-primary"
                                                        title="Edit"
                                                    >
                                                        <i class="fas fa-pencil-alt"></i>
                                                    </Link>
                                                </td>
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
    );
};

export default Product;
