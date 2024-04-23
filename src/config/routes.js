const routes = {
    admin: '/',
    barChart: '/barChart',

    profile: '/profile/:id',
    error_404: '/error_404',

    //      Account
    login: '/login',
    register: '/register',
    forgotpassword: '/forgotpassword',
    resetpassword: '/resetpassword',

    invoice: '/invoice',

    //      Shop
    category: '/category',
    product: '/product',
    createProduct: '/product/create',
    editProduct: '/product/edit/:id',
    floors: '/floors',
    shops: '/shops',
    createShops: '/shops/create',
    editShops: `shops/edit/:id`,

    //      Booking
    booking: '/booking',
    createBooking: '/booking/create',

    //      Movie
    movies: '/movies',
    createMovies: '/movies/create',
    editMovies: '/movies/edit/:id',

    genres: '/genres',
    shows: '/shows',
    createShows: 'shows/create',
    editShows: 'shows/edit/:id',
    rooms: '/rooms',

    //      Seats
    seats: '/seats',
    createSeats: '/seats/create',
    editSeats: '/seats/edit/:id',

    seatPricings: '/seatPricings',
    seatReservations: '/seatReservations',
    seatTypes: '/seatTypes',

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

    //      Users
    users: '/users',
    createUsers: '/users/create',
};

export default routes;
