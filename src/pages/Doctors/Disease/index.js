import React, { useState, useEffect } from 'react';
import { Table, Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import {
    getDiseases,
    createDiseases,
    editDiseases,
    updateDiseases,
    deleteDiseases,
} from '~/services/Doctors/diseaseService';
import { Link } from 'react-router-dom';

function Diseases() {
    const [loading, setLoading] = useState(true);
    const [editShow, setEditShow] = useState(false);
    const [deleteShow, setDeleteShow] = useState(false);
    const [createShow, setCreateShow] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [editId, setEditId] = useState('');
    const [editName, setEditName] = useState('');
    const [editDescription, setEditDescription] = useState('');
    const [data, setData] = useState([]);
    const [deleteId, setDeleteId] = useState('');

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    useEffect(() => {
        const filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
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
        getDiseases()
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
        createDiseases(name, description)
            .then(() => {
                getData();
                clear();
                handleClose();
                toast.success('Diseases has been created');
            })
            .catch((error) => {
                toast.error('Failed to create Diseases', error);
            });
    };

    const handleEdit = (id) => {
        handleEditShow();
        editDiseases(id)
            .then((data) => {
                setEditId(id);
                setEditName(data.name);
                setEditDescription(data.description);
            })
            .catch((error) => console.error('Error fetching Diseases data:', error));
    };

    const handleUpdate = () => {
        updateDiseases(editId, editName, editDescription)
            .then(() => {
                handleClose();
                getData();
                clear();
                toast.success('Diseases has been updated');
            })
            .catch((error) => {
                toast.error('Failed to update Diseases', error);
            });
    };

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteDiseases(deleteId)
            .then(() => {
                toast.success('Diseases has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete Diseases', error);
            });
    };

    const clear = () => {
        setName('');
        setDescription('');
        setEditId('');
        setEditName('');
        setEditDescription('');
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
                <h1>Diseases</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Diseases</Link>
                    </div>
                    <div className="breadcrumb-item">All Diseases</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Diseases</h4>
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
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.description}</td>
                                                            <td colSpan={2}>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    onClick={() => handleEdit(item.id)}
                                                                    title="Edit"
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
                    <Modal.Title>Create Diseases</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
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
                    <Modal.Title>Edit Diseases</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    value={editName}
                                    onChange={(e) => setEditName(e.target.value)}
                                />
                            </Col>
                            <Col>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Description"
                                    value={editDescription}
                                    onChange={(e) => setEditDescription(e.target.value)}
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
                <Modal.Body>Are you sure you want to delete this Diseases?</Modal.Body>
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

export default Diseases;
