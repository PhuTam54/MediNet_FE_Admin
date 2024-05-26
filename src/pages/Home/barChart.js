import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = () => {
    const [chartData, setChartData] = useState(null);
    const [dailyRevenue, setDailyRevenue] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await fetch('https://medinetprj.azurewebsites.net/api/v1/Orders');
                if (!response.ok) {
                    throw new Error('Failed to fetch chart data');
                }
                const jsonData = await response.json();

                // Calculate daily revenue
                const revenueByDay = jsonData.reduce((acc, item) => {
                    const day = dayjs(item.date).format('YYYY-MM-DD');
                    if (!acc[day]) {
                        acc[day] = 0;
                    }
                    acc[day] += item.totalAmount;
                    return acc;
                }, {});

                setChartData(jsonData);
                setDailyRevenue(revenueByDay);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchChartData();
    }, []);

    if (!chartData || !dailyRevenue) {
        return <div>Loading...</div>;
    }

    const dailyLabels = Object.keys(dailyRevenue);
    const dailyData = Object.values(dailyRevenue);

    const data = {
        labels: dailyLabels,
        datasets: [
            {
                label: 'Daily Revenue',
                data: dailyData,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
        },
        plugins: {
            legend: {
                labels: {
                    fontSize: 25,
                },
            },
        },
    };

    return (
        <section className="section">
            <div className="section-header">
                <h1>BarChart</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">BarChart</Link>
                    </div>
                    <div className="breadcrumb-item">All BarChart</div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-header">
                        <h4>Daily Revenue</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            <Bar data={data} height={400} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BarChart;
