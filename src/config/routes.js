const routes = {
    admin: '/',
    barChart: '/barChart',

    //      clinics
    clinics: '/clinics',
    createClinics: '/clinics/create',
    editClinics: '/clinics/edit/:id',

    inStocks: '/inStocks',
    createInStocks: '/inStocks/create',
    editInStocks: '/inStocks/edit/:id',

    stockIns: '/stockIns',
    createStockIns: '/stockIns/create',
    editStockIns: '/stockIns/edit/:id',

    stockOuts: '/stockOuts',
    createStockOuts: '/stockOuts/create',
    editStockOuts: '/stockOuts/edit/:id',

    //      courses
    courses: '/courses',
    createCourses: '/courses/create',
    editCourses: '/courses/edit/:id',

    employees: '/employees',
    createEmployees: '/employees/create',
    editEmployees: '/employees/edit/:id',

    enrollments: '/enrollments',
    createEnrollments: '/enrollments/create',
    editEnrollments: '/enrollments/edit/:id',

    //      Doctors
    doctors: '/doctors',
    createDoctors: '/doctors/create',
    editDoctors: '/doctors/edit/:id',

    blogs: '/blogs',
    createBlogs: '/blogs/create',
    editBlogs: '/blogs/edit/:id',

    disease: '/diseases',

    specialist: '/specialists',

    //      Account
    login: '/login',
    register: '/register',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',

    //      categories
    categoryParents: '/categoryParents',

    category: '/category',
    createCategory: '/Category/create',
    editCategory: '/Category/edit/:id',

    categoryChilds: '/categoryChilds',
    createCategoryChilds: '/CategoryChilds/create',
    editCategoryChilds: '/CategoryChilds/edit/:id',

    //      products
    product: '/product',
    createProduct: '/product/create',
    editProduct: '/product/edit/:id',

    favoriteProducts: '/favorite',

    detailProduct: '/product/detail/:productId',
    createProductDetails: '/product/detail/create',
    editProductDetails: '/product/detail/edit/:id',
    //      Orders
    orders: '/orders',
    orderDetail: '/orders/detail/:id',
    invoice: '/orders/invoice/:id',

    services: '/services',
    createServices: '/services/create',
    editServices: '/services/edit/:id',

    ticket: '/ticket',
    ticketCreate: '/ticket/create',
    ticketEdit: '/ticket/edit/:id',

    // feedbacks: '/feedbacks',
    feedbacks: '/product/feedbacks/:productId',
    feedbackDetail: '/products/feedbacks/detail/:id',

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
