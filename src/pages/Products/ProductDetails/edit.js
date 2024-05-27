import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProductDetails, editProductDetails } from '~/services/Products/productDetailService';
import { useNavigate, useParams, Link } from 'react-router-dom';

function EditProductDetails() {
    const [products, setProducts] = useState([]);
    const defaultImage = '/anh-thuoc.jpg';

    const [data, setData] = useState({
        id: '',
        ingredient: '',
        usage: '',
        usageInstructions: '',
        description: '',
        sideEffects: '',
        precautions: '',
        storage: '',
        productId: '',
        imageSrc: defaultImage,
        imagesProductDetailFile: null,
    });

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productDetailData = await editProductDetails(id);
                setData({
                    id: productDetailData.id,
                    ingredient: productDetailData.ingredient,
                    usage: productDetailData.usage,
                    usageInstructions: productDetailData.usageInstructions,
                    description: productDetailData.description,
                    sideEffects: productDetailData.sideEffects,
                    precautions: productDetailData.precautions,
                    storage: productDetailData.storage,
                    productId: productDetailData.productId,
                    imageSrc: productDetailData.image || defaultImage,
                    imagesProductDetailFile: null,
                });

                const productData = await fetch('https://medinetprj.azurewebsites.net/api/v1/products');
                const productJson = await productData.json();
                setProducts(productJson);
            } catch (error) {
                console.error('Error fetching ProductDetails data:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleUpdate = async (event) => {
        event.preventDefault();

        try {
            await updateProductDetails(
                data.id,
                data.categoryChildId,
                data.name,
                data.description,
                data.price,
                data.manufacturer,
                data.imagesProductDetailFile,
            );
            toast.success('ProductDetails updated successfully');
            navigate('/ProductDetails');
        } catch (error) {
            toast.error('Failed to update ProductDetails');
            console.error('Update error:', error);
        }
    };

    const handleImagesChange = (event) => {
        const files = event.target.files;
        setData({
            ...data,
            imagesProductDetailFile: files,
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let imagesProductDetailFile = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (x) => {
                setData({
                    ...data,
                    imagesProductDetailFile,
                    imageSrc: x.target.result,
                });
            };
            reader.readAsDataURL(imagesProductDetailFile);
        } else {
            setData({
                ...data,
                imagesProductDetailFile: null,
                imageSrc: defaultImage,
            });
        }
    };
    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <Link to="/ProductDetails" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </Link>
                </div>
                <h1>Edit ProductDetails</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="#">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">ProductDetailss</Link>
                    </div>
                    <div className="breadcrumb-item">Edit ProductDetails</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Edit ProductDetails</h2>
                <p className="section-lead">On this page you can edit ProductDetails details.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Edit ProductDetails Details</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={handleUpdate}>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Id</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                disabled
                                                value={data.id}
                                                onChange={(e) => setData({ ...data, id: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Ingredient</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.ingredient}
                                                onChange={(e) => setData({ ...data, ingredient: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Product</label>
                                            <select
                                                className="form-control selectric"
                                                value={data.productId}
                                                onChange={(e) => setData({ ...data, productId: e.target.value })}
                                            >
                                                <option>Select productId</option>
                                                {products.map((product) => (
                                                    <option key={product.id} value={product.id}>
                                                        {product.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Usage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.usage}
                                                onChange={(e) => setData({ ...data, usage: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">UsageInstructions</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.usageInstructions}
                                                onChange={(e) =>
                                                    setData({ ...data, usageInstructions: e.target.value })
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Description</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.description}
                                                onChange={(e) => setData({ ...data, description: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">SideEffects</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.sideEffects}
                                                onChange={(e) => setData({ ...data, sideEffects: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Precautions</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.precautions}
                                                onChange={(e) => setData({ ...data, precautions: e.target.value })}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="col-form-label text-md-right">Storage</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.storage}
                                                onChange={(e) => setData({ ...data, storage: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row mb-4">
                                        <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                            imagesProductDetailFile
                                        </label>
                                        <div>
                                            <img
                                                src={data.imageSrc}
                                                alt="Product"
                                                style={{ maxWidth: 200, maxHeight: 150, marginBottom: 10 }}
                                            />
                                        </div>
                                        <div className="col-sm-12 col-md-7">
                                            <input
                                                type="file"
                                                multiple
                                                accept="image/*"
                                                className="form-control"
                                                onChange={handleImageChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-md-6 offset-md-3">
                                            <button className="btn btn-primary btn-block" type="submit">
                                                Create ProductDetails
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    );
}

export default EditProductDetails;
