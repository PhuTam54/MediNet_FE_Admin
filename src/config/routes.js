const routes = {
    admin: '/',
    barChart: '/barChart',
    doughnutChart: '/doughnutChart',
    lineChart: '/lineChart',
    pieChart: '/pieChart',


    //      Account
    login: '/login',
    register: '/register',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',

    //      Shop
    category: '/category',
    product: '/product',
    createProduct: '/product/create',
    editProduct: '/product/edit/:id',
    floors: '/floors',
    shops: '/shops',
    createShops: '/shops/create',
    editShops: `shops/edit/:id`,

    //      Orders
    foods: '/foods',
    createFoods: '/foods/create',
    editFoods: '/foods/edit/:id',

    orders: '/orders',
    orderCreate: '/orders/create',
    orderEdit: '/orders/edit/:id',

    orderFood: '/orderFood',
    orderFoodCreate: '/orderFood/create',
    orderFoodEdit: '/orderFood/edit/:id',

    ticket: '/ticket',
    ticketCreate: '/ticket/create',
    ticketEdit: '/ticket/edit/:id',

    //      Manager
    invoice: '/invoice',
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
