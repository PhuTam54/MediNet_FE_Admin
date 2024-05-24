// import React, { useState, useEffect } from 'react';
// import { getProduct } from '~/services/Products/productService';
// import { useNavigate } from 'react-router-dom';
// import moment from 'moment';
// import { Link } from 'react-router-dom';

// const Product = () => {
//     const [products, setProducts] = useState([]);
//     const navigate = useNavigate();

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         getProduct()
//             .then((data) => {
//                 const firstTenData = data.slice(0, 5);
//                 setProducts(firstTenData);
//             })
//             .catch((error) => {
//                 console.error('Error fetching data:', error);
//             });
//     };

//     const formatDate = (inputDate) => {
//         const parsedDate = moment(inputDate);
//         const formattedDate = parsedDate.format('HH:mm:ss DD/MM/YYYY');

//         return formattedDate;
//     };

//     const truncateProductCode = (ProductCode) => {
//         if (ProductCode && ProductCode.length > 7) {
//             return ProductCode.substring(0, 7) + '...';
//         } else {
//             return ProductCode;
//         }
//     };

//     return (
//         <div className="section-body">
//             <div className="row mt-4">
//                 <div className="col-12">
//                     <div className="card">
//                         <div className="card-header">
//                             <h4>Feature Products</h4>
//                             <div className="card-header-action">
//                                 <Link to="/Product" className="btn btn-danger">
//                                     View More <i className="fas fa-chevron-right" />
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="card-body p-0">
//                             <div className="table-responsive table-invoice">
//                                 <table className="table table-striped">
//                                     <tbody>
//                                         <tr>
//                                             <th>Id</th>
//                                             <th>Customers</th>
//                                             <th>Products</th>
//                                             <th>Actions</th>
//                                         </tr>
//                                         {products.map((item, index) => (
//                                             <tr key={item.id}>
//                                                 <td>{index + 1}</td>
//                                                 <td>{item.customer.name}</td>
//                                                 <td>{item.product.name}</td>
//                                                 <td colSpan={2}>
//                                                     <Link
//                                                         to={`/product/detail/${item.id}`}
//                                                         className="btn btn-primary"
//                                                         title="Details"
//                                                     >
//                                                         <i class="far fa-eye"></i>
//                                                     </Link>
//                                                     &nbsp;
//                                                     <Link
//                                                         to={`/product/feedbacks/${item.id}`}
//                                                         className="btn btn-primary"
//                                                         title="Feedbacks"
//                                                     >
//                                                         <i class="fa-solid fa-comment"></i>
//                                                     </Link>
//                                                     &nbsp;
//                                                     <Link
//                                                         to={`/product/edit/${item.id}`}
//                                                         className="btn btn-primary"
//                                                         title="Edit"
//                                                     >
//                                                         <i class="fas fa-pencil-alt"></i>
//                                                     </Link>
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Product;
