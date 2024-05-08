const routes = {
    admin: '/',
    barChart: '/barChart',
    doughnutChart: '/doughnutChart',
    lineChart: '/lineChart',
    pieChart: '/pieChart',

    cart: '/carts',
    createCart: '/carts/create',
    editCart: '/carts/edit/:id',

    //      clinics
    clinics: '/clinics',
    createClinics: '/clinics/create',
    editClinics: '/clinics/edit/:id',

    supplies: '/supplies',
    createSupplies: '/supplies/create',
    editSupplies: '/supplies/edit/:id',

    //      Account
    login: '/login',
    register: '/register',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',

    //      categories
    category: '/category',

    categoryChilds: '/categoryChilds',
    createCategoryChilds: '/CategoryChilds/create',
    editCategoryChilds: '/CategoryChilds/edit/:id',

    //      Orders
    orders: '/orders',
    orderDetail: '/orders/detail/:id',
    invoice: '/orders/invoice/:id',

    product: '/product',
    createProduct: '/product/create',
    editProduct: '/product/edit/:id',

    services: '/services',
    createServices: '/services/create',
    editServices: '/services/edit/:id',

    ticket: '/ticket',
    ticketCreate: '/ticket/create',
    ticketEdit: '/ticket/edit/:id',

    //      Manager
    calendar: '/calendar',
    calendars: '/calendars',
    error_404: '/error_404',

    //      Users
    customers: '/customers',
    createCustomers: '/customers/create',
    editCustomers: '/customers/edit/:id',

    admins: '/admins',
    createAdmins: '/admins/create',
    editAdmins: '/admins/edit/:id',

    profile: '/profile',
};

export default routes;
