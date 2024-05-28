import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from '~/layouts/components/Admin/Search';
import Pagination from '~/layouts/components/Admin/Pagination';
import { getProduct, deleteProduct } from '~/services/Products/productService';
import { getCategoryChilds } from '~/services/Categories/categoryChildService';
import { Link } from 'react-router-dom';

function Product() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [deleteShow, setDeleteShow] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [stockQuantities, setStockQuantities] = useState([]);
    const [categoryChilds, setCategoryChilds] = useState([]);

    //search
    const [search, setSearch] = useState('');
    const [searchedData, setSearchedData] = useState([]);
    const [sortOrder, setSortOrder] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const getData = async () => {
        try {
            const productData = await getProduct();
            const categoryData = await getCategoryChilds();
            setData(productData);
            setSearchedData(productData);
            setCategoryChilds(categoryData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        let filteredData = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

        if (selectedCategory) {
            filteredData = filteredData.filter((item) => item.categoryChild.name === selectedCategory);
        }

        let sortedData = [...filteredData];
        if (sortOrder === 'lowToHigh') {
            sortedData.sort((a, b) => a.price - b.price);
        } else if (sortOrder === 'highToLow') {
            sortedData.sort((a, b) => b.price - a.price);
        }

        setSearchedData(sortedData);
    }, [search, data, sortOrder, selectedCategory]);

    // Pagination
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

    const handleDelete = (id) => {
        setDeleteId(id);
        handleDeleteShow();
    };

    const handleDeleteConfirm = async () => {
        deleteProduct(deleteId)
            .then(() => {
                toast.success('Product has been deleted');
                handleClose();
                getData();
            })
            .catch((error) => {
                toast.error('Failed to delete Product', error);
            });
    };

    const handleClose = () => {
        setDeleteShow(false);
    };

    const handleDeleteShow = () => setDeleteShow(true);

    return (
        <section className="section">
            <div className="section-header">
                <h1>Product</h1>
                <div className="section-header-button">
                    <Link to="/product/create" className="btn btn-primary">
                        Add New
                    </Link>
                </div>
                <div className="section-header-button">
                    <Link to="/product/detail/create" className="btn btn-primary">
                        Add New Product Detail
                    </Link>
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard </Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Product </Link>
                    </div>
                    <div className="breadcrumb-item">All Product</div>
                </div>
            </div>
            <div className="section-body">
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>All Product</h4>
                            </div>

                            <div className="card-body">
                                {loading ? (
                                    <div>Loading...</div>
                                ) : (
                                    <>
                                        <div className="float-left">
                                            <select
                                                className="form-control selectric"
                                                onChange={(e) => setSortOrder(e.target.value)}
                                            >
                                                <option value="">Sort by Price</option>
                                                <option value="lowToHigh">Low to High</option>
                                                <option value="highToLow">High to Low</option>
                                            </select>
                                        </div>
                                        <div className="float-left ml-2">
                                            <select
                                                className="form-control selectric"
                                                onChange={(e) => setSelectedCategory(e.target.value)}
                                            >
                                                <option value="">Filter by CategoryChilds</option>
                                                {categoryChilds.map((categoryChild) => (
                                                    <option key={categoryChild.id} value={categoryChild.name}>
                                                        {categoryChild.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                        <Search setSearch={setSearch} />
                                        <div className="clearfix mb-3" />
                                        <div className="table-responsive">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Id</th>
                                                        <th>Img</th>
                                                        <th>Name</th>
                                                        <th>CategoryChildId</th>
                                                        <th>Quantity</th>
                                                        <th>Price</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {records.map((item, index) => (
                                                        <tr key={item.id}>
                                                            <td>{index + firstIndex + 1}</td>
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
                                                                {item.inStocks.length > 0
                                                                    ? item.inStocks[0].stockQuantity
                                                                    : '0'}
                                                            </td>
                                                            <td>{item.price}$</td>
                                                            <td colSpan={2}>
                                                                <Link
                                                                    to={`/product/detail/${item.id}`}
                                                                    className="btn btn-info"
                                                                    title="Details"
                                                                >
                                                                    <i className="far fa-eye"></i>
                                                                </Link>
                                                                &nbsp;
                                                                <Link
                                                                    to={`/product/feedbacks/${item.id}`}
                                                                    className="btn btn-warning"
                                                                    title="Feedbacks"
                                                                >
                                                                    <i className="fa-solid fa-comment"></i>
                                                                </Link>
                                                                &nbsp;
                                                                <Link
                                                                    to={`/product/edit/${item.id}`}
                                                                    className="btn btn-primary"
                                                                    title="Edit"
                                                                >
                                                                    <i className="fas fa-pencil-alt"></i>
                                                                </Link>
                                                                &nbsp;
                                                                {/* <button
                                                                    className="btn btn-danger"
                                                                    onClick={() => handleDelete(item.id)}
                                                                    title="Delete"
                                                                >
                                                                    <i className="fas fa-trash"></i>
                                                                </button> */}
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
                <Modal.Body>Are you sure you want to delete this Product?</Modal.Body>
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

export default Product;
