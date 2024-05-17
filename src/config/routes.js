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
