import React, { useState, useEffect } from 'react';
import {
    Day,
    Week,
    WorkWeek,
    Month,
    Agenda,
    ScheduleComponent,
    Inject,
    Resize,
    DragAndDrop,
} from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
// import { CheckBoxComponent } from '@syncfusion/ej2-react-buttons';
// import * as dataSource from './datasource.json';
// import { Query, Predicate } from '@syncfusion/ej2-data';
// import { PropertyPane } from './property-pane';
// import { extend } from '@syncfusion/ej2-base';

function Calendars() {
    const [localData, setLocalData] = useState({
        dataSource: [
            {
                EndTime: new Date(2024, 4, 11, 6, 36),
                StartTime: new Date(2024, 4, 11, 4, 0),
            },
        ],
    });

    const [remoteData, setRemoteData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData');
                const data = await response.json();
                setRemoteData(
                    new DataManager({
                        json: data,
                        adaptor: new WebApiAdaptor(),
                        crossDomain: true,
                    }),
                );
            } catch (error) {
                console.error('Error fetching remote data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="section">
            <div className="section-header">
                <h1>Movies</h1>
                <div className="section-header-button">
                    <a href="/movies/create" className="btn btn-primary">
                        Add New
                    </a>
                </div>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <a href="#">Dashboard</a>
                    </div>
                    <div className="breadcrumb-item">
                        <a href="#">Movies</a>
                    </div>
                    <div className="breadcrumb-item">All Movies</div>
                </div>
            </div>
            <div className="row">
                <div className="flex justify-center items-center">
                    <ScheduleComponent
                        currentView="Month"
                        selectedDate={new Date(2024, 4, 11)}
                        width={800}
                        height={500}
                        eventSettings={{ dataSource: remoteData }}
                    >
                        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
                    </ScheduleComponent>
                </div>
            </div>
        </section>
    );
}

export default Calendars;
