import React, { useState, useEffect } from 'react';
import { getShowings } from '~/services/Movie/showService';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

const Showing = () => {
    const [showing, setShowing] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        getShowings()
            .then((data) => {
                const firstTenData = data.slice(0, 5);
            setShowing(firstTenData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    };

    const handleGetShows = () => {
        navigate('/shows');
    }

    const formatDate = (inputDate) => {
        const parsedDate = moment(inputDate);
        const formattedDate = parsedDate.format("HH:mm:ss-DD/MM/YYYY");
    
        return formattedDate;
    };
    return (
<div className="row">
    <div className="col-md-8">
        <div className="card">
            <div className="card-header">
                <h4>Showings</h4>
                <div className="card-header-action">
                    <a href='#' onClick={() => handleGetShows()} className="btn btn-danger">
                        View More <i className="fas fa-chevron-right" />
                    </a>
                </div>
            </div>
            <div className="card-body p-0">
                <div className="table-responsive table-invoice">
                    <table className="table table-striped">
                        <tbody>
                            <tr>
                                <th>Show Code</th>
                                <th>Movie</th>
                                <th>Room</th>
                                <th>Start Date</th>
                                <th>Action</th>
                            </tr>
                            {showing.map((item, index) => (
                            <tr key={item.id}>
                                <td>
                                    <a href="#">{item.show_Code}</a>
                                </td>
                                <td className="font-weight-600">{item.movie.title}</td>
                                <td className="font-weight-600">{item.room.name}</td>
                                {/* <td className="font-weight-600">{item.movie_Id}</td>
                                <td className="font-weight-600">{item.room_Id}</td> */}

                                <td>{formatDate(item.start_Date)}</td>
                                
                                <td>
                                    <a href="#" className="btn btn-primary">
                                        Detail
                                    </a>
                                </td>

                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
    );
    
}

export default Showing;