import p50 from '~/assets/img/p-50.png';
import product from '~/assets/img/products/product-3-50.png';

function Invoice() {
    return (
        <section className="section">
        <div className="section-header">
          <h1>Invoice</h1>
          <div className="section-header-breadcrumb">
            <div className="breadcrumb-item active">
              <a href="#">Dashboard</a>
            </div>
            <div className="breadcrumb-item">Invoice</div>
          </div>
        </div>
        <div className="section-body">
          <div className="invoice">
            <div className="invoice-print">
              <div className="row">
                <div className="col-lg-12">
                  <div className="invoice-title">
                    <h2>Invoice</h2>
                    <div className="invoice-number">Order #12345</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <address>
                        <strong>Billed To:</strong>
                        <br />
                        Ujang Maman
                        <br />
                        1234 Main
                        <br />
                        Apt. 4B
                        <br />
                        Bogor Barat, Indonesia
                      </address>
                    </div>
                    <div className="col-md-6 text-md-right">
                      <address>
                        <strong>Shipped To:</strong>
                        <br />
                        Muhamad Nauval Azhar
                        <br />
                        1234 Main
                        <br />
                        Apt. 4B
                        <br />
                        Bogor Barat, Indonesia
                      </address>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <address>
                        <strong>Payment Method:</strong>
                        <br />
                        Visa ending **** 4242
                        <br />
                        ujang@maman.com
                      </address>
                    </div>
                    <div className="col-md-6 text-md-right">
                      <address>
                        <strong>Order Date:</strong>
                        <br />
                        September 19, 2018
                        <br />
                        <br />
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-12">
                  <div className="section-title">Order Summary</div>
                  <p className="section-lead">All items here cannot be deleted.</p>
                  <div className="table-responsive">
                    <table className="table table-striped table-hover table-md">
                      <tbody>
                        <tr>
                          <th data-width={40}>#</th>
                          <th>Item</th>
                          <th className="text-center">Price</th>
                          <th className="text-center">Quantity</th>
                          <th className="text-right">Totals</th>
                        </tr>
                        <tr>
                          <td>1</td>
                          <td>Mouse Wireless</td>
                          <td className="text-center">$10.99</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$10.99</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Keyboard Wireless</td>
                          <td className="text-center">$20.00</td>
                          <td className="text-center">3</td>
                          <td className="text-right">$60.00</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>Headphone Blitz TDR-3000</td>
                          <td className="text-center">$600.00</td>
                          <td className="text-center">1</td>
                          <td className="text-right">$600.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row mt-4">
                    <div className="col-lg-8">
                      <div className="section-title">Payment Method</div>
                      <p className="section-lead">
                        The payment method that we provide is to make it easier for
                        you to pay invoices.
                      </p>
                      <div className="images">
                        <img src="assets/img/visa.png" alt="visa" />
                        <img src="assets/img/jcb.png" alt="jcb" />
                        <img src="assets/img/mastercard.png" alt="mastercard" />
                        <img src="assets/img/paypal.png" alt="paypal" />
                      </div>
                    </div>
                    <div className="col-lg-4 text-right">
                      <div className="invoice-detail-item">
                        <div className="invoice-detail-name">Subtotal</div>
                        <div className="invoice-detail-value">$670.99</div>
                      </div>
                      <div className="invoice-detail-item">
                        <div className="invoice-detail-name">Shipping</div>
                        <div className="invoice-detail-value">$15</div>
                      </div>
                      <hr className="mt-2 mb-2" />
                      <div className="invoice-detail-item">
                        <div className="invoice-detail-name">Total</div>
                        <div className="invoice-detail-value invoice-detail-value-lg">
                          $685.99
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="text-md-right">
              <div className="float-lg-left mb-lg-0 mb-3">
                <button className="btn btn-primary btn-icon icon-left">
                  <i className="fas fa-credit-card" /> Process Payment
                </button>
                <button className="btn btn-danger btn-icon icon-left">
                  <i className="fas fa-times" /> Cancel
                </button>
              </div>
              <button className="btn btn-warning btn-icon icon-left">
                <i className="fas fa-print" /> Print
              </button>
            </div>
          </div>
        </div>
      </section>
      
    );
}

export default Invoice;
