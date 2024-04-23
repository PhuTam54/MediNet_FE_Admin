import images from '~/assets/images/';
function SidebarAdmin() {
    return (
        <>
            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <image src={images.logo} width={0} height={18}></image>
                        <a href="/"> RAdmin - Mall </a>
                    </div>
                    <div className="sidebar-brand sidebar-brand-sm">
                        <a href="index.html">St</a>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="menu-header">Dashboard</li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-fire"></i> <span>Dashboard</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/">
                                        Ecommerce Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/chart">
                                        Chart
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/barChart">
                                        Bar Chart
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-header">Pages</li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-video"></i> <span>Movie</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/genres">
                                        Genres
                                    </a>
                                </li>
                                {/* <li>
                                    <a className="nav-link" href="/seats">
                                        Seats
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/favorite">
                                        Favorite
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/galleryMovie">
                                        GalleryMovie
                                    </a>
                                </li> */}
                                <li>
                                    <a className="nav-link" href="/movies">
                                        Movie
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/rooms">
                                        Room
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/shows">
                                        Show
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-video"></i> <span>Seats</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/seats">
                                        Seats
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/seatPricings">
                                        SeatPricings
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/seatReservations">
                                        SeatReservations
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/SeatTypes">
                                        SeatTypes
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-cart-plus"></i> <span>Orders</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/foods">
                                        Foods
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/orders">
                                        Orders
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/orderFood">
                                        OrderFood
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/ticket">
                                        Ticket
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fab fa-shopify"></i> <span>Shop</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/category">
                                        Category
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/product">
                                        Product
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/floors">
                                        Floors
                                    </a>
                                </li>

                                <li>
                                    <a className="nav-link" href="/shops">
                                        Shops
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-tasks"></i> <span>Manager</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/movie">
                                        Card
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/booking">
                                        ContactInfo
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        Feedback
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        Map
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/feedback">
                                        Payments
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/invoice">
                                        Invoice
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="far fa-user"></i> <span>User</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/invoice">
                                        Tenant
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link" href="/users">
                                        Users
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#" className="nav-link has-dropdown">
                                <i className="fas fa-exclamation"></i> <span>Errors</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="nav-link" href="/error_404">
                                        404
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </aside>
            </div>
        </>
    );
}

export default SidebarAdmin;
