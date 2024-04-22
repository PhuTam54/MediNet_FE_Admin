import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import {
    getSeatReservations,
    createSeatReservations,
    editSeatReservations,
    updateSeatReservations,
    deleteSeatReservations,
} from '~/services/Movie/Seats/seatReservationService';

function SeatReservations() {
    const [loading, setLoading] = useState(true);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [reservation_Expires_At, setReservation_Expires_At] = useState('');
    const [seat_Id, setSeat_Id] = useState('');
    const [editId, setEditId] = useState('');
    const [editReservation_Expires_At, setEditReservation_Expires_At] = useState('');
    const [editseat_Id, setEditseat_Id] = useState('');
    const [data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState('');

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        const filteredData = data.filter((item) => item.reservation_Expires_At.toString().toLowerCase().includes(search.toLowerCase()));
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
        getSeatReservations()
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
        createSeatReservations( reservation_Expires_At, seat_Id)
            .then(() => {
                getData();
                clear();
                handleClose();
                toast.success('SeatReservations has been created');
            })
            .catch((error) => {
                toast.error('Failed to create SeatReservations', error);
            });
    };

    const handleEdit = (id) => {
        handleEditShow();
        editSeatReservations(id)
            .then((data) => {
                setEditId(id);
                setEditReservation_Expires_At(data.Reservation_Expires_At);
                setEditseat_Id(data.seat_Id);
            })
            .catch((error) => console.error('Error fetching SeatReservations data:', error));
    };

    const handleUpdate = () => {
        updateSeatReservations(editId, editReservation_Expires_At, editseat_Id)
            .then(() => {
                handleClose();
                getData();
                clear();
                toast.success('SeatReservations has been updated');
            })
            .catch((error) => {
                toast.error('Failed to update SeatReservations', error);
            });
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteSeatReservations(deleteId)
            .then(() => {
                toast.success('SeatReservations has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete SeatReservations', error);
            });
    };

    const clear = () => {
        setReservation_Expires_At('');
        setSeat_Id('');
        setEditId('');
        setEditseat_Id('');
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
                <h1>SeatReservations</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">SeatReservations</a>
                    </div>
                    <div className="breadcrumb-item">All SeatReservations</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All SeatReservations</h4>
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
                                                        <th>Reservation_Expires_At</th>
                                                        <th>seat_Id</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.Reservation_Expires_At}</td>
                                                            <td>{item.seat_Id}</td>
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
                    <Modal.Title>Create SeatReservations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Reservation_Expires_At"
                                    value={reservation_Expires_At}
                                    onChange={(e) => setReservation_Expires_At(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter seat_Id"
                                    value={seat_Id}
                                    onChange={(e) => setSeat_Id(e.target.value)}
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
                    <Modal.Title>Edit SeatReservations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={editReservation_Expires_At}
                                    onChange={(e) => setEditReservation_Expires_At(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter seat_Id"
                                    value={editseat_Id}
                                    onChange={(e) => setEditseat_Id(e.target.value)}
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
                <Modal.Body>Are you sure you want to delete this SeatReservations?</Modal.Body>
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

export default SeatReservations;
