import React, { useState, useEffect } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await fetch('https://rmallbe20240413154509.azurewebsites.net/api/v1/Rooms');
                if (!response.ok) {
                    throw new Error('Failed to fetch chart data');
                }
                const jsonData = await response.json();
                setChartData(jsonData);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };
        fetchChartData();
    }, []);

    if (!chartData || chartData.length === 0) {
        return <div>Loading...</div>;
    }

    const data = {
        labels: chartData.map((room) => room.name),
        datasets: [
            {
                label: `${chartData.length} Rooms Available`,
                data: chartData.map((room) => room.columns),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {},
        legend: {
            labels: {
                fontSize: 25,
            },
        },
    };

    return (
        <section className="section">
            <div className="section-header">
                <h1>Line</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">Line</Link>
                    </div>
                    <div className="breadcrumb-item">All Line</div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-header">
                        <h4>LineChart</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            <Line data={data} height={400} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LineChart;
