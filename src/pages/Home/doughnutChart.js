import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await fetch('https://medinetprj.azurewebsites.net/api/v1/Products');
                if (!response.ok) {
                    throw new Error('Failed to fetch chart data');
                }
                const jsonData = await response.json();

                const categoryRevenue = {};

                jsonData.forEach((product) => {
                    const category = product.categoryChild.name;
                    const revenue = product.orderProducts.reduce((total, order) => total + order.subtotal, 0);

                    if (categoryRevenue[category]) {
                        categoryRevenue[category] += revenue;
                    } else {
                        categoryRevenue[category] = revenue;
                    }
                });

                const labels = Object.keys(categoryRevenue);
                const data = Object.values(categoryRevenue);

                setChartData({
                    labels,
                    datasets: [
                        {
                            label: 'Doanh thu theo danh mục sản phẩm',
                            data,
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
                <h1>DoughnutChart</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">DoughnutChart</Link>
                    </div>
                    <div className="breadcrumb-item">All DoughnutChart</div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-header">
                        <h4>DoughnutChart</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            <Doughnut data={chartData} height={400} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoughnutChart;
