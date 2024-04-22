import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import {
    getSeatPricings,
    createSeatPricings,
    editSeatPricings,
    updateSeatPricings,
    deleteSeatPricings,
} from '~/services/Movie/Seats/seatPricingService';

function SeatPricings() {
    const [loading, setLoading] = useState(true);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [price, setPrice] = useState('');
    const [show_Id, setshow_Id] = useState('');
    const [seatType_Id, setseatType_Id] = useState('');
    const [editId, setEditId] = useState('');
    const [editPrice, setEditPrice] = useState('');
    const [editShow_Id, setEditShow_Id] = useState('');
    const [editSeatType_Id, setEditSeatType_Id] = useState('');
    const [data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState('');

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        const filteredData = data.filter((item) => item.price.toString().toLowerCase().includes(search.toLowerCase()));
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

    // Call Api
    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        getSeatPricings()
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

    const handleSave = () => {
        handleCreateShow();
    };

    const handleSaveConfirm = () => {
        createSeatPricings(price, show_Id, seatType_Id)
            .then(() => {
                getData();
                clear();
                handleClose();
                toast.success('SeatPricings has been created');
            })
            .catch((error) => {
                toast.error('Failed to create SeatPricings', error);
            });
    };

    const handleEdit = (id) => {
        handleEditShow();
        editSeatPricings(id)
            .then((data) => {
                setEditId(id);
                setEditPrice(data.price);
                setEditShow_Id(data.show_Id);
                setEditSeatType_Id(data.seatType_Id);
            })
            .catch((error) => console.error('Error fetching SeatPricings data:', error));
    };

    const handleUpdate = () => {
        updateSeatPricings(editId, editPrice, editShow_Id, editSeatType_Id)
            .then(() => {
                handleClose();
                getData();
                clear();
                toast.success('SeatPricings has been updated');
            })
            .catch((error) => {
                toast.error('Failed to update SeatPricings', error);
            });
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteSeatPricings(deleteId)
            .then(() => {
                toast.success('SeatPricings has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete SeatPricings', error);
            });
    };

    const clear = () => {
        setPrice('');
        setshow_Id('');
        setseatType_Id('');
        setEditId('');
        setEditPrice('');
        setEditShow_Id('');
        setEditSeatType_Id('');
    };

    const handleClose = () => {
        setDeleteShow(false);
        setCreateShow(false);
        setEditShow(false);
    };

    const handleEditShow = () => setEditShow(true);
    const handleDeleteShow = () => setDeleteShow(true);
    const handleCreateShow = () => setCreateShow(true);

    return (
        <section className="section">
            <div className="section-header">
                <h1>SeatPricings</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">SeatPricings</a>
                    </div>
                    <div className="breadcrumb-item">All SeatPricings</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All SeatPricings</h4>
                                <div className="section-header-button">
                                    <button className="btn btn-primary" onClick={() => handleSave()}>
                                        Create
                                    </button>
                                </div>
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
                                                        <th>Price</th>
                                                        <th>ShowId</th>
                                                        <th>SeateatTypeId</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.price}</td>
                                                            <td>{item.show_Id}</td>
                                                            <td>{item.seatType_Id}</td>
                                                            <td colSpan={2}>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => handleEdit(item.id)}
                                                                >
                                                                    <i class="fas fa-pencil-alt"></i>
                                                                </button>
                                                                &nbsp;
                                                                <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => handleDelete(item.id)}
                                                                    title="Delete"
                                                                >
                                                                    <i class="fas fa-trash"></i>
                                                                </button>
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
            <Modal show={createShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create SeatPricings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={show_Id}
                                    onChange={(e) => setshow_Id(e.target.value)}
                                />
                                {/* <select
                                    className="form-control selectric"
                                    value={data.shop_Id}
                                    onChange={(e) => setshow_Id(e.target.value )}
                                >
                                    <option>Select Shops</option>
                                    {shops.map((shop) => (
                                        <option key={shop.id} value={shop.id}>
                                            {shop.name}
                                        </option>
                                    ))}
                                </select> */}
                            </Col>
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter seatType_Id"
                                    value={seatType_Id}
                                    onChange={(e) => setseatType_Id(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSaveConfirm}>
                        Create
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={editShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit SeatPricings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={editPrice}
                                    onChange={(e) => setEditPrice(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={editShow_Id}
                                    onChange={(e) => setEditShow_Id(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter seatType_Id"
                                    value={editSeatType_Id}
                                    onChange={(e) => setEditSeatType_Id(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={deleteShow} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this SeatPricings?</Modal.Body>
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

export default SeatPricings;
