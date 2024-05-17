import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import { getFeedbacks, deleteFeedbacks } from '~/services/Orders/feedbackService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function Feedbacks() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteId, setDeleteId] = useState('');

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        const filteredData = data.filter((item) =>
            item.customerId.toString().toLowerCase().includes(search.toLowerCase()),
        );
        setSearchedData(filteredData);
    }, [search, data]);

    //Page
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 7;
    const lastindex = currentPage * recordsPerPage;
    const firstIndex = lastindex - recordsPerPage;
    const records = searchedData.slice(firstIndex, lastindex);
    const npage = Math.ceil(searchedData.length / recordsPerPage);
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
    const { productId } = useParams();

    // Call Api
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getFeedbacks(productId)
            .then((data) => {
                setData(data);
                setSearchedData(data);
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
        deleteFeedbacks(deleteId)
            .then(() => {
                toast.success('Feedbacks has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete Feedbacks', error);
            });
    };

    const handleClose = () => {
        setDeleteShow(false);
    };

    const handleDeleteShow = () => setDeleteShow(true);

    return (
        <section className="section">
            <div className="section-header">
                <h1>Feedbacks</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Feedbacks</Link>
                    </div>
                    <div className="breadcrumb-item">All Feedbacks</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4> Feedbacks</h4>
                            </div>
                            <div className="card-body">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <>
                                        <div className="float-left">
                                            <select className="form-control selectric">
                                                <option>Action For Selected</option>
                                            </select>
                                        </div>
                                        <Search setSearch={setSearch} />
                                        <div className="clearfix mb-3" />
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Customer Username</th>
                                                        <th>Customer Email</th>
                                                        <th>Img</th>
                                                        <th>Vote</th>
                                                        <th>Description</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.customer.username}</td>
                                                            <td>{item.customer.email}</td>
                                                            <td>
                                                                <img
                                                                    src={item.imagesSrc}
                                                                    style={{ width: '100px', height: 'auto' }}
                                                                    alt={item.image}
                                                                />
                                                            </td>
                                                            <td>{item.vote}</td>
                                                            <td>{item.description}</td>

                                                            <td colSpan={2}>
                                                                <Link
                                                                    to={`/products/feedbacks/detail/${item.id}`}
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
                <Modal.Body>Are you sure you want to delete this Feedbacks?</Modal.Body>
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

export default Feedbacks;
