import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await fetch('https://medinetprj.azurewebsites.net/api/v1/Orders');
                if (!response.ok) {
                    throw new Error('Failed to fetch chart data');
                }
                const jsonData = await response.json();

                // Tính tổng doanh thu theo danh mục sản phẩm
                const revenueByCategory = {};
                jsonData.forEach((order) => {
                    order.orderProducts.forEach((orderProduct) => {
                        const category = orderProduct.product.categoryChild
                            ? orderProduct.product.categoryChild.name
                            : 'Unknown';
                        const subtotal = orderProduct.subtotal;

                        if (revenueByCategory[category]) {
                            revenueByCategory[category] += subtotal;
                        } else {
                            revenueByCategory[category] = subtotal;
                        }
                    });
                });

                const labels = Object.keys(revenueByCategory);
                const data = Object.values(revenueByCategory);

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
        plugins: {
            legend: {
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
                <h1>PieChart</h1>
                <div className="section-header-breadcrumb">
                    <div className="breadcrumb-item active">
                        <Link to="/">Dashboard</Link>
                    </div>
                    <div className="breadcrumb-item">
                        <Link to="#">PieChart</Link>
                    </div>
                    <div className="breadcrumb-item">All PieChart</div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="card">
                    <div className="card-header">
                        <h4>PieChart</h4>
                    </div>
                    <div className="card-body">
                        <div>
                            <Pie data={chartData} height={400} options={options} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PieChart;
