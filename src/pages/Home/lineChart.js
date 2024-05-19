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
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await fetch('https://localhost:7121/api/v1/Orders');
                if (!response.ok) {
                    throw new Error('Failed to fetch chart data');
                }
                const jsonData = await response.json();

                // Tính tổng doanh thu theo tháng
                const revenueByMonth = {};
                jsonData.forEach((order) => {
                    const orderDate = new Date(order.orderDate);
                    const month = orderDate.toLocaleString('default', { date: 'short' }) + ' ' + orderDate.getDay();
                    const totalAmount = order.orderProducts.reduce((total, product) => total + product.subtotal, 0);

                    if (revenueByMonth[month]) {
                        revenueByMonth[month] += totalAmount;
                    } else {
                        revenueByMonth[month] = totalAmount;
                    }
                });

                const labels = Object.keys(revenueByMonth);
                const data = Object.values(revenueByMonth);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Doanh thu hàng tháng',
                            data,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchChartData();
    }, []);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    const options = {
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Tháng',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Doanh thu (VNĐ)',
                },
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    fontSize: 14,
                },
            },
            tooltip: {
                enabled: true,
            },
        },
    };

    return (
        <section className="section">
            <div className="section-header">
                <h1>LineChart</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">LineChart</Link>
                    </div>
                    <div className="breadcrumb-item">All LineChart</div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-header">
                        <h4>LineChart</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            <Line data={chartData} height={400} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LineChart;
