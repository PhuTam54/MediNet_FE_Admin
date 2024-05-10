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

import Supplies from '~/pages/Clinics/Supply/index';
import CreateSupplies from '~/pages/Clinics/Supply/create';
import EditSupplies from '~/pages/Clinics/Supply/edit';

//      Account
import Login from '~/pages/Account/login';
import Register from '~/pages/Account/register';
import ForgotPassword from '~/pages/Account/forgotpassword';
import ResetPassword from '~/pages/Account/resetpassword';

//      Order
import Cart from '~/pages/Orders/Cart/index';
import CreateCart from '~/pages/Orders/Cart/create';
import EditCart from '~/pages/Orders/Cart/edit';

import Orders from '~/pages/Orders/Order/index';
import DetailOrders from '~/pages/Orders/Order/detail';

import Product from '~/pages/Orders/Product/index';
import CreateProduct from '~/pages/Orders/Product/create';
import EditProduct from '~/pages/Orders/Product/edit';

import Service from '~/pages/Orders/Services/index';
import CreateService from '~/pages/Orders/Services/create';
import EditService from '~/pages/Orders/Services/edit';

import Invoice from '~/pages/Orders/Order/invoice';

import Tickets from '~/pages/Orders/Ticket/index';

//      Categories
import Category from '~/pages/Categories/Category/index';

import CategoryChilds from '~/pages/Categories/CategoryChilds/index';
import CreateCategoryChilds from '~/pages/Categories/CategoryChilds/create';
import EditCategoryChilds from '~/pages/Categories/CategoryChilds/edit';

//      Manager
// import Invoice from '~/pages/Magager/Invoice';

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

    //      Cart
    { path: config.routes.cart, component: Cart, layout: AdminLayout },
    { path: config.routes.createCart, component: CreateCart, layout: AdminLayout },
    { path: config.routes.editCart, component: EditCart, layout: AdminLayout },

    //      Clinics
    { path: config.routes.clinics, component: Clinics, layout: AdminLayout },
    { path: config.routes.createClinics, component: CreateClinics, layout: AdminLayout },
    { path: config.routes.editClinics, component: EditClinics, layout: AdminLayout },

    { path: config.routes.supplies, component: Supplies, layout: AdminLayout },
    { path: config.routes.createSupplies, component: CreateSupplies, layout: AdminLayout },
    { path: config.routes.editSupplies, component: EditSupplies, layout: AdminLayout },

    //      Orders
    { path: config.routes.orders, component: Orders, layout: AdminLayout },
    { path: config.routes.orderDetail, component: DetailOrders, layout: AdminLayout },
    { path: config.routes.invoice, component: Invoice, layout: null },

    { path: config.routes.product, component: Product, layout: AdminLayout },
    { path: config.routes.createProduct, component: CreateProduct, layout: AdminLayout },
    { path: config.routes.editProduct, component: EditProduct, layout: AdminLayout },

    { path: config.routes.services, component: Service, layout: AdminLayout },
    { path: config.routes.createServices, component: CreateService, layout: AdminLayout },
    { path: config.routes.editServices, component: EditService, layout: AdminLayout },

    { path: config.routes.ticket, component: Tickets, layout: AdminLayout },

    //      Category
    { path: config.routes.category, component: Category, layout: AdminLayout },

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
