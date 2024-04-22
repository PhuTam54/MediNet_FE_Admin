function CreateFeedback() {
    return (
        <section className="section">
            <div className="section-header">
                <div className="section-header-back">
                    <a href="features-FeedBacks.html" className="btn btn-icon">
                        <i className="fas fa-arrow-left" />
                    </a>
                </div>
                <h1>Create New FeedBack</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">FeedBacks</a>
                    </div>
                    <div className="breadcrumb-item">Create New FeedBack</div>
                </div>
            </div>
            <div className="section-body">
                <h2 className="section-title">Create New FeedBack</h2>
                <p className="section-lead">On this page you can create a new FeedBack and fill in all fields.</p>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Write Your FeedBack</h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Title
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Category
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <select className="form-control selectric">
                                            <option>Tech</option>
                                            <option>News</option>
                                            <option>Political</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Content
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <textarea className="summernote-simple" defaultValue={''} />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Thumbnail
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <div id="image-preview" className="image-preview">
                                            <label htmlFor="image-upload" id="image-label">
                                                Choose File
                                            </label>
                                            <input type="file" name="image" id="image-upload" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Tags
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <input type="text" className="form-control inputtags" />
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                                        Status
                                    </label>
                                    <div className="col-sm-12 col-md-7">
                                        <select className="form-control selectric">
                                            <option>Publish</option>
                                            <option>Draft</option>
                                            <option>Pending</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group row mb-4">
                                    <label className="col-form-label text-md-right col-12 col-md-3 col-lg-3" />
                                    <div className="col-sm-12 col-md-7">
                                        <button className="btn btn-primary">Create FeedBack</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CreateFeedback;
