import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import { getOrders, deleteOrders } from '~/services/Orders/orderService';
import { Link } from 'react-router-dom';

function Orders() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    //search and status filter
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        let filteredData = data;
        if (search) {
            filteredData = filteredData.filter(
                (item) =>
                    item.email.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.name.toString().toLowerCase().includes(search.toLowerCase()) ||
                    item.orderCode.toString().toLowerCase().includes(search.toLowerCase()),
            );
        }
        if (status !== '') {
            filteredData = filteredData.filter((item) => item.status.toString() === status);
        }
        if (name !== '') {
            filteredData = filteredData.filter((item) => item.name.toString() === status);
        }
        setFilteredData(filteredData);
    }, [search, status, data, name]);

    //Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 7;
    const lastindex = currentPage * recordsPerPage;
    const firstIndex = lastindex - recordsPerPage;
    const records = filteredData.slice(firstIndex, lastindex);
    const npage = Math.ceil(filteredData.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    }
    function changeCPage(id) {
        setCurrentPage(id);
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    }

    // Call Api
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getOrders()
            .then((data) => {
                console.log(data);
                setData(data);
                setFilteredData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteOrders(deleteId)
            .then(() => {
                toast.success('Orders has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete Orders', error);
            });
    };

    const handleClose = () => {
        setDeleteShow(false);
    };

    const handleDeleteShow = () => setDeleteShow(true);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    return (
        <section className="section">
            <div className="section-header">
                <h1>Orders</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Orders</Link>
                    </div>
                    <div className="breadcrumb-item">All Orders</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Orders</h4>
                            </div>
                            <div className="card-body">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <>
                                        <div className="float-left">
                                            <select
                                                className="form-control selectric"
                                                value={data.status}
                                                onChange={handleStatusChange}
                                            >
                                                <option value="">All</option>
                                                <option value={0}>Pending</option>
                                                <option value={1}>Confirmed</option>
                                                <option value={2}>Shipping</option>
                                                <option value={3}>Shipped</option>
                                                <option value={4}>Complete</option>
                                                <option value={5}>Canceled</option>
                                            </select>
                                        </div>
                                        <Search setSearch={setSearch} />
                                        <div className="clearfix mb-3" />
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>OrderCode</th>
                                                        <th>Name</th>
                                                        <th>Email</th>
                                                        <th>TelePhone</th>
                                                        <th>OrderDate</th>
                                                        <th>Payment</th>
                                                        <th>Status</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.orderCode}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.tel}</td>
                                                            <td>{item.orderDate}</td>
                                                            <td>{item.payment_method}</td>
                                                            <td>
                                                                {item.status === 0 && (
                                                                    <div className="badge badge-warning">Pending</div>
                                                                )}
                                                                {item.status === 1 && (
                                                                    <div className="badge badge-secondary">
                                                                        Confirmed
                                                                    </div>
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
                                                            {/* <td>{item.userId}</td>
                                                            <td>{item.cartIds}</td> */}

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
                                        <Pagination
                                            prePage={prePage}
                                            nextPage={nextPage}
                                            changeCPage={changeCPage}
                                            currentPage={currentPage}
                                            numbers={numbers}
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={deleteShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Orders?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeleteConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />
        </section>
    );
}

export default Orders;
