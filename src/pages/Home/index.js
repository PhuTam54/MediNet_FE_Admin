import BarChart from './barChart';
import LineChart from './lineChart';
import PieChart from './pieChart';
import DoughnutChart from './doughnutChart';
import Showing from './Showing';
import Order from './Order';

function HomeAdmin() {
    return (
        <section className="section">
            <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                        <div className="card-stats">
                            <div className="card-stats-title">
                                Order Statistics -
                                <div className="dropdown d-inline">
                                    <a
                                        className="font-weight-600 dropdown-toggle"
                                        data-toggle="dropdown"
                                        href="#"
                                        id="orders-month"
                                    >
                                        August
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-sm">
                                        <li className="dropdown-title">Select Month</li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                January
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="dropdown-item">
                                                February
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-stats-items">
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">24</div>
                                    <div className="card-stats-item-label">Pending</div>
                                </div>
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">12</div>
                                    <div className="card-stats-item-label">Shipping</div>
                                </div>
                                <div className="card-stats-item">
                                    <div className="card-stats-item-count">23</div>
                                    <div className="card-stats-item-label">Completed</div>
                                </div>
                            </div>
                        </div>
                        <div className="card-icon shadow-primary bg-primary">
                            <i className="fas fa-archive" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Total Orders</h4>
                            </div>
                            <div className="card-body">59</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                        <div className="card-chart">
                            <canvas id="balance-chart" height={80} />
                        </div>
                        <div className="card-icon shadow-primary bg-primary">
                            <i className="fas fa-dollar-sign" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Balance</h4>
                            </div>
                            <div className="card-body">$187,13</div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="card card-statistic-2">
                        <div className="card-chart">
                            <canvas id="sales-chart" height={80} />
                        </div>
                        <div className="card-icon shadow-primary bg-primary">
                            <i className="fas fa-shopping-bag" />
                        </div>
                        <div className="card-wrap">
                            <div className="card-header">
                                <h4>Sales</h4>
                            </div>
                            <div className="card-body">4,732</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>BarChart</h4>
                        </div>
                        <div className="card-body">
                            <BarChart />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>LineChart</h4>
                        </div>
                        <div className="card-body">
                            <LineChart />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>PieChart</h4>
                        </div>
                        <div className="card-body">
                            <PieChart />
                        </div>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>DoughnutChart</h4>
                        </div>
                        <div className="card-body">
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="owl-carousel owl-theme" id="products-carousel">
                            <div>
                                <div className="product-item pb-3">
                                    <div className="product-image">
                                        <img
                                            alt="image"
                                            src="assets/img/products/product-4-50.png"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="product-details">
                                        <div className="product-name">iBook Pro 2018</div>
                                        <div className="product-review">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                        </div>
                                        <div className="text-muted text-small">67 Sales</div>
                                        <div className="product-cta">
                                            <a href="#" className="btn btn-primary">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-item">
                                    <div className="product-image">
                                        <img
                                            alt="image"
                                            src="assets/img/products/product-3-50.png"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="product-details">
                                        <div className="product-name">oPhone S9 Limited</div>
                                        <div className="product-review">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star-half" />
                                        </div>
                                        <div className="text-muted text-small">86 Sales</div>
                                        <div className="product-cta">
                                            <a href="#" className="btn btn-primary">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="product-item">
                                    <div className="product-image">
                                        <img
                                            alt="image"
                                            src="assets/img/products/product-1-50.png"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="product-details">
                                        <div className="product-name">Headphone Blitz</div>
                                        <div className="product-review">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="far fa-star" />
                                        </div>
                                        <div className="text-muted text-small">63 Sales</div>
                                        <div className="product-cta">
                                            <a href="#" className="btn btn-primary">
                                                Detail
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Showing />
            <Order />
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h4>Invoices</h4>
                            <div className="card-header-action">
                                <a href="#" className="btn btn-danger">
                                    View More <i className="fas fa-chevron-right" />
                                </a>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div className="table-responsive table-invoice">
                                <table className="table table-striped">
                                    <tbody>
                                        <tr>
                                            <th>Invoice ID</th>
                                            <th>Customer</th>
                                            <th>Status</th>
                                            <th>Due Date</th>
                                            <th>Action</th>
                                        </tr>
                                        <tr>
                                            <td>
                                                <a href="#">INV-87239</a>
                                            </td>
                                            <td className="font-weight-600">Kusnadi</td>
                                            <td>
                                                <div className="badge badge-warning">Unpaid</div>
                                            </td>
                                            <td>July 19, 2018</td>
                                            <td>
                                                <a href="#" className="btn btn-primary">
                                                    Detail
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeAdmin;
