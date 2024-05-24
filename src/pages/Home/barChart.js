// import React, { useState, useEffect } from 'react';
// import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
// import { Link } from 'react-router-dom';
// import dayjs from 'dayjs';

// ChartJS.register(BarElement, CategoryScale, LinearScale);

// const BarChart = () => {
//     const [chartData, setChartData] = useState(null);
//     const [monthlyRevenue, setMonthlyRevenue] = useState(null);

//     useEffect(() => {
//         const fetchChartData = async () => {
//             try {
//                 const response = await fetch('https://medinetprj.azurewebsites.net/api/v1/Orders');
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch chart data');
//                 }
//                 const jsonData = await response.json();

//                 // Calculate monthly revenue
//                 const revenueByMonth = jsonData.reduce((acc, item) => {
//                     const month = dayjs(item.date).format('YYYY-MM');
//                     if (!acc[month]) {
//                         acc[month] = 0;
//                     }
//                     acc[month] += item.totalAmount;
//                     return acc;
//                 }, {});

//                 setChartData(jsonData);
//                 setMonthlyRevenue(revenueByMonth);
//             } catch (error) {
//                 console.error('Error fetching chart data:', error);
//             }
//         };

//         fetchChartData();
//     }, []);

//     if (!chartData || !monthlyRevenue) {
//         return <div>Loading...</div>;
//     }

//     const monthlyLabels = Object.keys(monthlyRevenue);
//     const monthlyData = Object.values(monthlyRevenue);

//     const data = {
//         labels: monthlyLabels,
//         datasets: [
//             {
//                 label: 'Monthly Revenue',
//                 data: monthlyData,
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1,
//             },
//         ],
//     };

//     const options = {
//         maintainAspectRatio: false,
//         scales: {
//             y: {
//                 beginAtZero: true,
//             },
//         },
//         plugins: {
//             legend: {
//                 labels: {
//                     fontSize: 25,
//                 },
//             },
//         },
//     };

//     return (
//         <section className="section">
//             <div className="section-header">
//                 <h1>BarChart</h1>
//                 <div className="section-header-breadcrumb">
//                     <div className="breadcrumb-item active">
//                         <Link to="/">Dashboard</Link>
//                     </div>
//                     <div className="breadcrumb-item">
//                         <Link to="#">BarChart</Link>
//                     </div>
//                     <div className="breadcrumb-item">All BarChart</div>
//                 </div>
//             </div>
//             <div className="col-lg-8">
//                 <div className="card">
//                     <div className="card-header">
//                         <h4>Monthly Revenue</h4>
//                     </div>
//                     <div className="card-body">
//                         <div>
//                             <Bar data={data} height={400} options={options} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default BarChart;
