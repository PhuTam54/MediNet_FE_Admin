import React from 'react';

function Search({ setSearch }) {
    return (
        <div className="float-right">
            <form>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary">
                            <i className="fas fa-search" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Search;
