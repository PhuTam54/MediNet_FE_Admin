import avatar from '~/assets/img/avatar/avatar-1.png';

function Profile() {
    return (
        <section className="section">
            <div className="section-header">
                <h1>Profile</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">Profile</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Hi, Ujang!</h2>
                <p className="section-lead">Change information about yourself on this page.</p>
                <div className="row mt-sm-4">
                    <div className="col-12 col-md-12 col-lg-5">
                        <div className="card profile-widget">
                            <div className="profile-widget-header">
                                <img alt="image" src={avatar} className="rounded-circle profile-widget-picture" />
                                <div className="profile-widget-items">
                                    <div className="profile-widget-item">
                                        <div className="profile-widget-item-label">Posts</div>
                                        <div className="profile-widget-item-value">187</div>
                                    </div>
                                    <div className="profile-widget-item">
                                        <div className="profile-widget-item-label">Followers</div>
                                        <div className="profile-widget-item-value">6,8K</div>
                                    </div>
                                    <div className="profile-widget-item">
                                        <div className="profile-widget-item-label">Following</div>
                                        <div className="profile-widget-item-value">2,1K</div>
                                    </div>
                                </div>
                            </div>
                            <div className="profile-widget-description">
                                <div className="profile-widget-name">
                                    Ujang Maman{' '}
                                    <div className="text-muted d-inline font-weight-normal">
                                        <div className="slash" /> Web Developer
                                    </div>
                                </div>
                                Ujang maman is a superhero name in <b>Indonesia</b>
                            </div>
                            <div className="card-footer text-center">
                                <div className="font-weight-bold mb-2">Follow Ujang On</div>
                                <a href="#" className="btn btn-social-icon btn-facebook mr-1">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="#" className="btn btn-social-icon btn-twitter mr-1">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="#" className="btn btn-social-icon btn-github mr-1">
                                    <i className="fab fa-github" />
                                </a>
                                <a href="#" className="btn btn-social-icon btn-instagram">
                                    <i className="fab fa-instagram" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-12 col-lg-7">
                        <div className="card">
                            <form method="post" className="needs-validation" noValidate="">
                                <div className="card-header">
                                    <h4>Edit Profile</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="form-group col-md-6 col-12">
                                            <label>First Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Ujang"
                                                required=""
                                            />
                                            <div className="invalid-feedback">Please fill in the first name</div>
                                        </div>
                                        <div className="form-group col-md-6 col-12">
                                            <label>Last Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                defaultValue="Maman"
                                                required=""
                                            />
                                            <div className="invalid-feedback">Please fill in the last name</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-md-7 col-12">
                                            <label>Email</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                defaultValue="ujang@maman.com"
                                                required=""
                                            />
                                            <div className="invalid-feedback">Please fill in the email</div>
                                        </div>
                                        <div className="form-group col-md-5 col-12">
                                            <label>Phone</label>
                                            <input type="tel" className="form-control" defaultValue="" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group col-12">
                                            <label>Bio</label>
                                            <textarea
                                                className="form-control summernote-simple"
                                                defaultValue={
                                                    "Ujang maman is a superhero name in <b>Indonesia</b>, especially in my family. He is not a fictional character but an original hero in my family, a hero for his children and for his wife. So, I use the name as a user in this template. Not a tribute, I'm just bored with <b>'John Doe'</b>."
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="form-group mb-0 col-12">
                                            <div className="custom-control custom-checkbox">
                                                <input
                                                    type="checkbox"
                                                    name="remember"
                                                    className="custom-control-input"
                                                    id="newsletter"
                                                />
                                                <label className="custom-control-label" htmlFor="newsletter">
                                                    Subscribe to newsletter
                                                </label>
                                                <div className="text-muted form-text">
                                                    You will get new information about products, offers and promotions
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button className="btn btn-primary">Save Changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Profile;
