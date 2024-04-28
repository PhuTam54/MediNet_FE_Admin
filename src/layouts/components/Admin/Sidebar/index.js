import images from '~/assets/images/';
import { Link } from 'react-router-dom';

function SidebarAdmin() {
    return (
        <>
            <div className="main-sidebar sidebar-style-2">
                <aside id="sidebar-wrapper">
                    <div className="sidebar-brand">
                        <image src={images.logo} width={0} height={18}></image>
                        <Link to="/"> RAdmin - Mall </Link>
                    </div>
                    <div className="sidebar-brand sidebar-brand-sm">
                        <Link to="index.html">St</Link>
                    </div>
                    <ul className="sidebar-menu">
                        <li className="menu-header">Dashboard</li>
                        <li className="dropdown">
                            <Link to="#" className="nav-link has-dropdown">
                                <i className="fas fa-fire"></i> <span>Dashboard</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="nav-link" to="/">
                                        Ecommerce Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/barChart">
                                        BarChart
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/doughnutChart">
                                        DoughnutChart
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/lineChart">
                                        LineChart
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/pieChart">
                                        PieChart
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="menu-header">Pages</li>
                        <li className="dropdown">
                            <Link to="#" className="nav-link has-dropdown">
                                <i className="fas fa-cart-plus"></i> <span>Orders</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="nav-link" to="/carts">
                                        Carts
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/clinics">
                                        Clinics
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/services">
                                        Services
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="#" className="nav-link has-dropdown">
                                <i className="fas fa-cart-plus"></i> <span>Orders</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="nav-link" to="/foods">
                                        Foods
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/orders">
                                        Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/orderFood">
                                        OrderFood
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/ticket">
                                        Ticket
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="nav-link has-dropdown">
                                <i className="fab fa-shopify"></i> <span>Shop</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="nav-link" to="/category">
                                        Category
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/CategoryChilds">
                                        CategoryChilds
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/product">
                                        Product
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/floors">
                                        Floors
                                    </Link>
                                </li>

                                <li>
                                    <Link className="nav-link" to="/shops">
                                        Shops
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="nav-link has-dropdown">
                                <i className="fas fa-tasks"></i> <span>Manager</span>
                            </Link>
                            <ul className="dropdown-menu">
                                {/* <li>
                                    <Link className="nav-link" to="/feedback">
                                        Feedback
                                    </Link>
                                </li> */}
                                <li>
                                    <Link className="nav-link" to="/calendar">
                                        Calendar
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/invoice">
                                        Invoice
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/error_404">
                                        404
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link to="#" className="nav-link has-dropdown">
                                <i className="far fa-user"></i> <span>User</span>
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                    <Link className="nav-link" to="/customers">
                                        Customers
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/admins">
                                        Admins
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/profile">
                                        Profile
                                    </Link>
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
