// import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { createFavoriteProducts } from '~/services/Products/favoriteProductservice';
// import { useNavigate, Link } from 'react-router-dom';

// function CreateFavoriteProducts() {
//     const [customers, setCategories] = useState([]);
//     const [products, setProductId] = useState([]);

//     const [data, setData] = useState({
//         customerId: '',
//         productId: '',
//     });

//     const navigate = useNavigate();

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const categoryData = await fetch('https://medinetaptech.azurewebsites.net/api/v1/Categories');
//                 const categoryJson = await categoryData.json();
//                 setCategories(categoryJson);

//                 const categoryData = await fetch('https://medinetaptech.azurewebsites.net/api/v1/Categories');
//                 const categoryJson = await categoryData.json();
//                 setCategories(categoryJson);
//             } catch (error) {
//                 console.error('Error fetching Shop data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const handleCreate = async (event) => {
//         event.preventDefault();
//         try {
//             await createFavoriteProducts(data.name, data.categoryId);
//             toast.success('Shop created successfully');
//             navigate('/FavoriteProducts');
//         } catch (error) {
//             toast.error('Failed to create Shop');
//         }
//     };

//     return (
//         <section className="section">
//             <div className="section-header">
//                 <div className="section-header-back">
//                     <Link to="/FavoriteProducts" className="btn btn-icon">
//                         <i className="fas fa-arrow-left" />
//                     </Link>
//                 </div>
//                 <h1>Create FavoriteProducts</h1>
//                 <div className="section-header-breadcrumb">
//                     <div className="breadcrumb-item active">
//                         <Link to="#">Dashboard</Link>
//                     </div>
//                     <div className="breadcrumb-item">
//                         <Link to="#">FavoriteProductss</Link>
//                     </div>
//                     <div className="breadcrumb-item">Create FavoriteProducts</div>
//                 </div>
//             </div>
//             <div className="section-body">
//                 <h2 className="section-title">Create FavoriteProducts</h2>
//                 <p className="section-lead">
//                     On this page you can create a new FavoriteProducts and fill in all fields.
//                 </p>
//                 <div className="row">
//                     <div className="col-12">
//                         <div className="card">
//                             <div className="card-header">
//                                 <h4>Write Your FavoriteProducts</h4>
//                             </div>
//                             <div className="card-body">
//                                 <form onSubmit={handleCreate}>
//                                     <div className="form-group row mb-4">
//                                         <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
//                                             Name
//                                         </label>
//                                         <div className="col-sm-12 col-md-7">
//                                             <input
//                                                 type="text"
//                                                 className="form-control"
//                                                 value={data.name}
//                                                 onChange={(e) => setData({ ...data, name: e.target.value })}
//                                             />
//                                         </div>
//                                     </div>
//                                     <div className="form-group row mb-4">
//                                         <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
//                                             Category Id
//                                         </label>
//                                         <div className="col-sm-12 col-md-7">
//                                             <select
//                                                 className="form-control selectric"
//                                                 value={data.categoryId}
//                                                 onChange={(e) => setData({ ...data, categoryId: e.target.value })}
//                                             >
//                                                 <option>Select categories</option>
//                                                 {categories.map((category) => (
//                                                     <option key={category.id} value={category.id}>
//                                                         {category.name}
//                                                     </option>
//                                                 ))}
//                                             </select>
//                                         </div>
//                                     </div>
//                                     <div className="form-group row mb-4">
//                                         <div className="col-sm-12 col-md-7 offset-md-3">
//                                             <button className="btn btn-primary" type="submit">
//                                                 Create FavoriteProducts
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <ToastContainer />
//         </section>
//     );
// }

// export default CreateFavoriteProducts;
