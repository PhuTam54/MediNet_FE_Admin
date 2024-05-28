import Order from './Order';
import Product from './Product';
import BarChart from './barChart';
import React, { useState, useEffect } from 'react';
import { getOrders } from '~/services/Orders/orderService';
import { getProduct } from '~/services/Products/productService';
import { getCustomers } from '~/services/Users/customerService';
import { getEmployees } from '~/services/Courses/employeeService';
import { getClinics } from '~/services/Clinics/clinicService';

import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { Link } from 'react-router-dom';

function HomeAdmin() {
    const [orders, setOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [clinics, setClinics] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        getOrderData();
        getProductData();
        getCustomerData();
        getEmployeeData();
        getClinicData();
    }, []);

    const getOrderData = () => {
        getOrders()
            .then((data) => {
                const firstTenData = data.slice(0, 5);
                setOrders(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const getProductData = () => {
        getProduct()
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const getCustomerData = () => {
        getCustomers()
            .then((data) => {
                setCustomers(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const getEmployeeData = () => {
        getEmployees()
            .then((data) => {
                setEmployees(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    const getClinicData = () => {
        getClinics()
            .then((data) => {
                setClinics(data);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    return (
        <section className="section">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                        <div className="card-stats">
                            <div className="card-stats-title">Order Statistics</div>
                            <div className="card-stats-items">
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">
                                        {orders.filter((order) => order.status === 0).length}
                                    </div>
                                    <div className="card-stats-item-label">Pending</div>
                                </div>
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">
                                        {orders.filter((order) => order.status === 1).length}
                                    </div>
                                    <div className="card-stats-item-label"> Confirmed</div>
                                </div>
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">
                                        {orders.filter((order) => order.status === 2).length}
                                    </div>
                                    <div className="card-stats-item-label">Shipping</div>
                                </div>
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">
                                        {orders.filter((order) => order.status === 4).length}
                                    </div>
                                    <div className="card-stats-item-label">Completed</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-icon shadow-primary bg-primary">
                            <i className="fas fa-archive" />
                        </div>
                        <div className="row">
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Total Orders</h4>
                                </div>
                                <div className="card-body">{orders.length}</div>
                            </div>
                            <div className="card-wrap">
                                <div
                                    className="card-header card-stats-items card-stats-item-count"
                                    style={{ fontWeight: 700, fontSize: 20, margin: '-2px solid red' }}
                                >
                                    {orders.filter((order) => order.status === 3).length}
                                </div>
                                <div className="card-stats-item-label">Shipped</div>
                            </div>
                            <div className="card-wrap">
                                <div
                                    className="card-header card-stats-items card-stats-item-count"
                                    style={{ fontWeight: 700, fontSize: 20}}
                                >
                                    {orders.filter((order) => order.status === 5).length}
                                </div>
                                <div className="card-stats-item-label">Canceled</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                        <div className="card-stats">
                            <div className="card-icon shadow-primary bg-primary">
                                <i className="fas fa-archive" />
                            </div>
                            <div className="card-wrap">
                                <div className="card-header">
                                    <h4>Total Clinics</h4>
                                </div>
                                <div className="card-body">{clinics.length}</div>
                            </div>
                        </div>
                        <div className="card-icon shadow-primary bg-primary">
                            <i className="fas fa-archive" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Total Product</h4>
                            </div>
                            <div className="card-body">{products.length}</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                        <div className="card-stats">
                            <div className="card-stats-title">Users Statistics</div>
                            <div className="card-stats-items">
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">
                                        {customers.filter((employee) => employee.role === 1).length}
                                    </div>
                                    <div className="card-stats-item-label">Customers</div>
                                </div>
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">
                                        {employees.filter((employee) => employee.role === 3).length}
                                    </div>
                                    <div className="card-stats-item-label">Employee</div>
                                </div>
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">
                                        {employees.filter((employee) => employee.role === 4).length}
                                    </div>
                                    <div className="card-stats-item-label">Doctor</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-icon shadow-primary bg-primary">
                            <i className="fas fa-archive" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Users</h4>
                            </div>
                            <div className="card-body">{customers.length + employees.length}</div>
                        </div>
                    </div>
                </div>
            </div>
            <BarChart />
            <Order />
            <Product />
        </section>
    );
}

export default HomeAdmin;
