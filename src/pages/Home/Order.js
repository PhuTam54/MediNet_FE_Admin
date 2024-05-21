import React, { useState, useEffect } from 'react';
import { getOrders } from '~/services/Orders/orderService';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getOrders()
            .then((data) => {
                const firstTenData = data.slice(0, 5);
                setOrders(firstTenData);
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

    const truncateOrderCode = (orderCode) => {
        if (orderCode && orderCode.length > 7) {
            return orderCode.substring(0, 7) + '...';
        } else {
            return orderCode;
        }
    };

    return (
        <div className="section-body">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>New Orders</h4>
                            <div className="card-header-action">
                                <Link to="/orders" className="btn btn-danger">
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
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>TelePhone</th>
                                            <th>OrderDate</th>
                                            <th>Status</th>
                                            <th>Actions</th>
                                        </tr>
                                        {orders.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.tel}</td>
                                                <td>{item.orderDate}</td>
                                                <td>
                                                    {item.status === 0 && (
                                                        <div className="badge badge-warning">Pending</div>
                                                    )}
                                                    {item.status === 1 && (
                                                        <div className="badge badge-secondary">Confirmed</div>
                                                    )}
                                                    {item.status === 2 && (
                                                        <div className="badge badge-primary">Shipping</div>
                                                    )}
                                                    {item.status === 3 && (
                                                        <div className="badge badge-info">Shipped</div>
                                                    )}
                                                    {item.status === 4 && (
                                                        <div className="badge badge-success">Complete</div>
                                                    )}
                                                    {item.status === 5 && (
                                                        <div className="badge badge-danger">Cancel</div>
                                                    )}
                                                </td>
                                                <td colSpan={2}>
                                                    <Link
                                                        to={`/Orders/detail/${item.id}`}
                                                        className="btn btn-primary"
                                                        title="Details"
                                                    >
                                                        <i class="far fa-eye"></i>
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

export default Order;
