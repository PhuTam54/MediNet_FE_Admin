import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

const BarChart = () => {
    const [chartData, setChartData] = useState(null);
    const [timeRange, setTimeRange] = useState('Date');

    useEffect(() => {
        const fetchChartData = async () => {
            try {
                const response = await fetch('https://medinetaptech.azurewebsites.net/api/v1/Orders');
                if (!response.ok) {
                    throw new Error('Failed to fetch chart data');
                }
                const jsonData = await response.json();
                const filteredData = jsonData.filter((order) => order.status === 4);

                const processData = (data, format, unit, totalUnits, fixedLabels) => {
                    const latestOrderDate = data.reduce((latestDate, item) => {
                        const orderDate = dayjs(item.orderDate);
                        return orderDate.isAfter(latestDate) ? orderDate : latestDate;
                    }, dayjs('2000-01-01'));

                    const latestUnits =
                        fixedLabels ||
                        Array.from({ length: totalUnits }, (_, index) =>
                            latestOrderDate.subtract(index, unit).format(format),
                        ).reverse();

                    const revenueByTime = data.reduce((acc, item) => {
                        const time = dayjs(item.orderDate).format(format);
                        if (!acc[time]) {
                            acc[time] = { orderCount: 0, totalRevenue: 0 };
                        }
                        acc[time].orderCount += 1;
                        acc[time].totalRevenue += item.totalAmount;
                        return acc;
                    }, {});

                    const chartData = latestUnits.map((time) => {
                        const dailyData = revenueByTime[time];
                        return {
                            time,
                            orderCount: dailyData ? dailyData.orderCount : 0,
                            totalRevenue: dailyData ? dailyData.totalRevenue : 0,
                        };
                    });

                    return chartData;
                };

                let chartData;
                if (timeRange === 'Date') {
                    chartData = processData(filteredData, 'YYYY-MM-DD', 'day', 7);
                } else if (timeRange === 'Month') {
                    const currentYear = dayjs().year();
                    const months = Array.from({ length: 12 }, (_, index) =>
                        dayjs(new Date(currentYear, index)).format('YYYY-MM'),
                    );
                    chartData = processData(filteredData, 'YYYY-MM', 'month', 12, months);
                } else if (timeRange === 'Year') {
                    chartData = processData(filteredData, 'YYYY', 'year', 7);
                }

                setChartData(chartData);
            } catch (error) {
                console.error('Error fetching chart data:', error);
            }
        };

        fetchChartData();
    }, [timeRange]);

    if (!chartData) {
        return <div>Loading...</div>;
    }

    const labels = chartData.map((data) => data.time);
    const orderCount = chartData.map((data) => data.orderCount);
    const totalRevenue = chartData.map((data) => data.totalRevenue);

    const data = {
        labels,
        datasets: [
            {
                label: 'Order Count',
                data: orderCount,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
            },
            {
                label: 'Revenue',
                data: totalRevenue,
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
            tooltip: {
                callbacks: {
                    label: function (context) {
                        const label = context.dataset.label || '';
                        const value = context.raw;
                        return `${label}: ${value}`;
                    },
                    afterLabel: function (context) {
                        if (context.dataset.label === 'Revenue') {
                            return `$`;
                        }
                        return '';
                    },
                },
            },
            legend: {
                labels: {
                    fontSize: 25,
                },
            },
        },
    };

    return (
        <div className="section-body">
            <div className="row mt-4">
                <div className="col-12">
                    <div className="card">
                        <div className="card-header">
                            <h4>Order Count and Revenue</h4>
                        </div>
                        <div className="card-body">
                            <div>
                                <select value={timeRange} onChange={(e) => setTimeRange(e.target.value)}>
                                    <option value="Date">Date</option>
                                    <option value="Month">Month</option>
                                    <option value="Year">Year</option>
                                </select>
                            </div>
                            <div>
                                <Bar data={data} height={400} options={options} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarChart;
