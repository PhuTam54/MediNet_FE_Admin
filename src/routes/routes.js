import config from '~/config';

// Layouts
import AdminLayout from '~/layouts/AdminLayouts/AdminLayout';

// Pages
import HomeAdmin from '~/pages/Home';
import BarChart from '~/pages/Home/barChart';
import DoughnutChart from '~/pages/Home/doughnutChart';
import LineChart from '~/pages/Home/lineChart';
import PieChart from '~/pages/Home/pieChart';


import Error_404 from '~/pages/Error';

//      Account
import Login from '~/pages/Account/login';
import Register from '~/pages/Account/register';
import ForgotPassword from '~/pages/Account/forgotpassword';
import ResetPassword from '~/pages/Account/resetpassword';

//      Order
import Foods from '~/pages/Orders/Food/index';
import CreateFoods from '~/pages/Orders/Food/create';
import EditFoods from '~/pages/Orders/Food/edit';

import Orders from '~/pages/Orders/Order/index';
import OrderFoods from '~/pages/Orders/OrderFood/index';
import Tickets from '~/pages/Orders/Ticket/index';

//      Shops
import Category from '~/pages/Shop/Category/index';
import Product from '~/pages/Shop/Product/index';
import CreateProduct from '~/pages/Shop/Product/create';
import EditProduct from '~/pages/Shop/Product/edit';
import Floors from '~/pages/Shop/Floors/index';
import Shops from '~/pages/Shop/Shop/index';
import CreateShops from '~/pages/Shop/Shop/create';
import EditShops from '~/pages/Shop/Shop/edit';

//      Manager
import Invoice from '~/pages/Magager/Invoice';
import Calendar from '~/pages/Calendar/index';
import Calendars from '~/pages/Calendars/index';

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


    //      Orders
    { path: config.routes.foods, component: Foods, layout: AdminLayout },
    { path: config.routes.createFoods, component: CreateFoods, layout: AdminLayout },
    { path: config.routes.editFoods, component: EditFoods, layout: AdminLayout },

    { path: config.routes.orders, component: Orders, layout: AdminLayout },
    { path: config.routes.orderFood, component: OrderFoods, layout: AdminLayout },
    { path: config.routes.ticket, component: Tickets, layout: AdminLayout },

    //      Shop
    { path: config.routes.category, component: Category, layout: AdminLayout },
    { path: config.routes.product, component: Product, layout: AdminLayout },
    { path: config.routes.createProduct, component: CreateProduct, layout: AdminLayout },
    { path: config.routes.editProduct, component: EditProduct, layout: AdminLayout },
    { path: config.routes.floors, component: Floors, layout: AdminLayout },
    { path: config.routes.shops, component: Shops, layout: AdminLayout },
    { path: config.routes.createShops, component: CreateShops, layout: AdminLayout },
    { path: config.routes.editShops, component: EditShops, layout: AdminLayout },

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
    { path: config.routes.invoice, component: Invoice, layout: AdminLayout },

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
