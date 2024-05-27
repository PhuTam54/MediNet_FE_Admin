import config from '~/config';

// Layouts
import AdminLayout from '~/layouts/AdminLayouts/AdminLayout';

// Pages
import HomeAdmin from '~/pages/Home';
import BarChart from '~/pages/Home/barChart';
import DoughnutChart from '~/pages/Home/doughnutChart';
import LineChart from '~/pages/Home/lineChart';
import PieChart from '~/pages/Home/pieChart';

//      Clinics
import Clinics from '~/pages/Clinics/Clinic/index';
import CreateClinics from '~/pages/Clinics/Clinic/create';
import EditClinics from '~/pages/Clinics/Clinic/edit';

import InStocks from '~/pages/Clinics/InStock/index';
import CreateInStocks from '~/pages/Clinics/InStock/create';
import EditInStocks from '~/pages/Clinics/InStock/edit';

import StockIns from '~/pages/Clinics/StockIn/index';
import CreateStockIns from '~/pages/Clinics/StockIn/create';
import EditStockIns from '~/pages/Clinics/StockIn/edit';

import StockOuts from '~/pages/Clinics/StockOut/index';
import CreateStockOuts from '~/pages/Clinics/StockOut/create';
import EditStockOuts from '~/pages/Clinics/StockOut/edit';

//      Courses
import Courses from '~/pages/Courses/Course/index';
import CreateCourses from '~/pages/Courses/Course/create';
import EditCourses from '~/pages/Courses/Course/edit';

import Employees from '~/pages/Courses/Employee/index';
import CreateEmployees from '~/pages/Courses/Employee/create';
import EditEmployees from '~/pages/Courses/Employee/edit';

import Enrollments from '~/pages/Courses/Enrollment/index';
import CreateEnrollments from '~/pages/Courses/Enrollment/create';
import EditEnrollments from '~/pages/Courses/Enrollment/edit';

//      Doctors
import Doctors from '~/pages/Doctors/Doctor/index';
import CreateDoctors from '~/pages/Doctors/Doctor/create';
import EditDoctors from '~/pages/Doctors/Doctor/edit';

import Blogs from '~/pages/Doctors/Blog/index';
import CreateBlogs from '~/pages/Doctors/Blog/create';
import EditBlogs from '~/pages/Doctors/Blog/edit';

import Disease from '~/pages/Doctors/Disease/index';

import Specialist from '~/pages/Doctors/Specialist/index';

//      Account
import Login from '~/pages/Account/login';
import Register from '~/pages/Account/register';
import ForgotPassword from '~/pages/Account/forgotpassword';
import ResetPassword from '~/pages/Account/resetpassword';

//      Order
import Orders from '~/pages/Orders/Order/index';
import DetailOrders from '~/pages/Orders/Order/detail';
import Invoice from '~/pages/Orders/Order/invoice';

import Service from '~/pages/Orders/Services/index';
import CreateService from '~/pages/Orders/Services/create';
import EditService from '~/pages/Orders/Services/edit';

import Feedbacks from '~/pages/Orders/Feedbacks/index';
import FeedbackDetail from '~/pages/Orders/Feedbacks/detail';

//      Products
import Product from '~/pages/Products/Product/index';
import CreateProduct from '~/pages/Products/Product/create';
import EditProduct from '~/pages/Products/Product/edit';

import FavoriteProducts from '~/pages/Products/FavoriteProducts/index';

import DetailProduct from '~/pages/Products/ProductDetails/index';
import CreateProductDetails from '~/pages/Products/ProductDetails/create';
import EditProductDetails from '~/pages/Products/ProductDetails/edit';

//      Categories
import CategoryParents from '~/pages/Categories/CategoryParents/index';

import Category from '~/pages/Categories/Category/index';
import CreateCategory from '~/pages/Categories/Category/create';
import EditCategory from '~/pages/Categories/Category/edit';

import CategoryChilds from '~/pages/Categories/CategoryChilds/index';
import CreateCategoryChilds from '~/pages/Categories/CategoryChilds/create';
import EditCategoryChilds from '~/pages/Categories/CategoryChilds/edit';

//      Manager

import Calendar from '~/pages/Calendar/index';
import Calendars from '~/pages/Calendars/index';
import Error_404 from '~/pages/Error';

//      Users
import Customers from '~/pages/Users/Customer/index';
import CreateCustomers from '~/pages/Users/Customer/create';
import EditCustomers from '~/pages/Users/Customer/edit';

import Admin from '~/pages/Users/Admin/index';
import CreateAdmin from '~/pages/Users/Admin/create';
import EditAdmin from '~/pages/Users/Admin/edit';

import Profile from '~/pages/Users/Profile/index';

// Public routes
export const publicRoutes = [
    //      Home
    { path: config.routes.admin, component: HomeAdmin, layout: AdminLayout },
    { path: config.routes.barChart, component: BarChart, layout: AdminLayout },
    { path: config.routes.doughnutChart, component: DoughnutChart, layout: AdminLayout },
    { path: config.routes.lineChart, component: LineChart, layout: AdminLayout },
    { path: config.routes.pieChart, component: PieChart, layout: AdminLayout },

    //      Clinics
    { path: config.routes.clinics, component: Clinics, layout: AdminLayout },
    { path: config.routes.createClinics, component: CreateClinics, layout: AdminLayout },
    { path: config.routes.editClinics, component: EditClinics, layout: AdminLayout },

    { path: config.routes.inStocks, component: InStocks, layout: AdminLayout },
    { path: config.routes.createInStocks, component: CreateInStocks, layout: AdminLayout },
    { path: config.routes.editInStocks, component: EditInStocks, layout: AdminLayout },

    { path: config.routes.stockIns, component: StockIns, layout: AdminLayout },
    { path: config.routes.createStockIns, component: CreateStockIns, layout: AdminLayout },
    { path: config.routes.editStockIns, component: EditStockIns, layout: AdminLayout },

    { path: config.routes.stockOuts, component: StockOuts, layout: AdminLayout },
    { path: config.routes.createStockOuts, component: CreateStockOuts, layout: AdminLayout },
    { path: config.routes.editStockOuts, component: EditStockOuts, layout: AdminLayout },

    //      Courses
    { path: config.routes.courses, component: Courses, layout: AdminLayout },
    { path: config.routes.createCourses, component: CreateCourses, layout: AdminLayout },
    { path: config.routes.editCourses, component: EditCourses, layout: AdminLayout },

    { path: config.routes.employees, component: Employees, layout: AdminLayout },
    { path: config.routes.createEmployees, component: CreateEmployees, layout: AdminLayout },
    { path: config.routes.editEmployees, component: EditEmployees, layout: AdminLayout },

    { path: config.routes.enrollments, component: Enrollments, layout: AdminLayout },
    { path: config.routes.createEnrollments, component: CreateEnrollments, layout: AdminLayout },
    { path: config.routes.editEnrollments, component: EditEnrollments, layout: AdminLayout },

    //      Doctors
    { path: config.routes.doctors, component: Doctors, layout: AdminLayout },
    { path: config.routes.createDoctors, component: CreateDoctors, layout: AdminLayout },
    { path: config.routes.editDoctors, component: EditDoctors, layout: AdminLayout },

    { path: config.routes.blogs, component: Blogs, layout: AdminLayout },
    { path: config.routes.createBlogs, component: CreateBlogs, layout: AdminLayout },
    { path: config.routes.editBlogs, component: EditBlogs, layout: AdminLayout },

    { path: config.routes.disease, component: Disease, layout: AdminLayout },

    { path: config.routes.specialist, component: Specialist, layout: AdminLayout },

    //      Orders
    { path: config.routes.orders, component: Orders, layout: AdminLayout },
    { path: config.routes.orderDetail, component: DetailOrders, layout: AdminLayout },
    { path: config.routes.invoice, component: Invoice, layout: null },

    { path: config.routes.services, component: Service, layout: AdminLayout },
    { path: config.routes.createServices, component: CreateService, layout: AdminLayout },
    { path: config.routes.editServices, component: EditService, layout: AdminLayout },

    { path: config.routes.feedbacks, component: Feedbacks, layout: AdminLayout },
    { path: config.routes.feedbackDetail, component: FeedbackDetail, layout: AdminLayout },

    //      Products
    { path: config.routes.product, component: Product, layout: AdminLayout },
    { path: config.routes.createProduct, component: CreateProduct, layout: AdminLayout },
    { path: config.routes.editProduct, component: EditProduct, layout: AdminLayout },

    { path: config.routes.favoriteProducts, component: FavoriteProducts, layout: AdminLayout },

    { path: config.routes.detailProduct, component: DetailProduct, layout: AdminLayout },
    { path: config.routes.createProductDetails, component: CreateProductDetails, layout: AdminLayout },
    { path: config.routes.editProductDetails, component: EditProductDetails, layout: AdminLayout }, 
    //      Category
    { path: config.routes.categoryParents, component: CategoryParents, layout: AdminLayout },

    { path: config.routes.category, component: Category, layout: AdminLayout },
    { path: config.routes.createCategory, component: CreateCategory, layout: AdminLayout },
    { path: config.routes.editCategory, component: EditCategory, layout: AdminLayout },

    { path: config.routes.categoryChilds, component: CategoryChilds, layout: AdminLayout },
    { path: config.routes.createCategoryChilds, component: CreateCategoryChilds, layout: AdminLayout },
    { path: config.routes.editCategoryChilds, component: EditCategoryChilds, layout: AdminLayout },

    //      Manager
    { path: config.routes.calendar, component: Calendar, layout: AdminLayout },
    // { path: config.routes.calendars, component: Calendars, layout: AdminLayout },

    //      Account
    { path: config.routes.login, component: Login, layout: null },
    { path: config.routes.register, component: Register, layout: null },
    { path: config.routes.forgotpassword, component: ForgotPassword, layout: null },
    { path: config.routes.resetpassword, component: ResetPassword, layout: null },

    //      Error
    { path: config.routes.error_404, component: Error_404, layout: null },
    { path: config.routes.profile, component: Profile, layout: AdminLayout },

    //      Users
    { path: config.routes.customers, component: Customers, layout: AdminLayout },
    { path: config.routes.createCustomers, component: CreateCustomers, layout: AdminLayout },
    { path: config.routes.editCustomers, component: EditCustomers, layout: AdminLayout },

    { path: config.routes.admins, component: Admin, layout: AdminLayout },
    { path: config.routes.createAdmins, component: CreateAdmin, layout: AdminLayout },
    { path: config.routes.editAdmins, component: EditAdmin, layout: AdminLayout },

    { path: config.routes.profile, component: Profile, layout: AdminLayout },
];

// Private routes
export const privateRoutes = [];
