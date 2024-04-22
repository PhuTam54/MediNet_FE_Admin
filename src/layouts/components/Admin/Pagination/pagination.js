import React from 'react';

function Pagination({ prePage, nextPage, changeCPage, currentPage, numbers }) {
    return (
        <div className="float-right">
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous" onClick={prePage}>
                            «
                        </a>
                    </li>

                    {numbers.map((n, i) => (
                        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <a className="page-link" href="#" onClick={() => changeCPage(n)}>
                                {n}
                            </a>
                        </li>
                    ))}
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next" onClick={nextPage}>
                            »
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Pagination;
