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
        if (orderCode.length > 7) {
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
                            <h4>Orders</h4>
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
                                            <th>Order_Code</th>
                                            <th>Final_Total</th>
                                            <th>Status</th>
                                            <th>User</th>
                                            <th>Show</th>
                                            <th>Actions</th>
                                        </tr>
                                        {orders.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>
                                                    <a href="#" title={item.order_Code}>
                                                        {truncateOrderCode(item.order_Code)}
                                                    </a>
                                                </td>
                                                <td className="font-weight-600">{item.final_Total}</td>
                                                <td className="font-weight-600">{item.status}</td>
                                                <td className="font-weight-600">{item.user_Id}</td>
                                                <td className="font-weight-600">{item.show_Id}</td>

                                                <td>
                                                    <a href="#" className="btn btn-primary">
                                                        Detail
                                                    </a>
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
