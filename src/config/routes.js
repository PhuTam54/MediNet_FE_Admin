const routes = {
    admin: '/',
    barChart: '/barChart',
    doughnutChart: '/doughnutChart',
    lineChart: '/lineChart',
    pieChart: '/pieChart',

    cart: '/carts',
    createCart: '/carts/create',
    editCart: '/carts/edit/:id',
    
    clinics: '/clinics',
    createClinics: '/clinics/create',
    editClinics: '/clinics/edit/:id',
    
    services: '/services',
    createServices: '/services/create',
    editServices: '/services/edit/:id',

    //      Account
    login: '/login',
    register: '/register',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',

    //      Shop
    category: '/category',

    categoryChilds: '/categoryChilds',
    createCategoryChilds: '/CategoryChilds/create',
    editCategoryChilds: '/CategoryChilds/edit/:id',
            
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
    orderDetail: '/orders/detail/:id',

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
