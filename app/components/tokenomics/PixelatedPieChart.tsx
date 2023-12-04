// MyPixelatedPieChart.tsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import './piechart.css'
import { ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required components
Chart.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true
    }
  },
  elements: {
    arc: {
      borderWidth: 3,
      borderColor: '#fff',
      hoverBorderColor: '#fff',
      shadowOffsetX: 3,
      shadowOffsetY: 3,
      shadowBlur: 10,
      shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
  },
};

const MyPixelatedPieChart = () => {
  const data = {
    labels: ['A', 'B', 'C'],
    datasets: [
      {
        label: 'My Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="pixelated-chart">
      <Pie data={data} options={options}/>
    </div>
  );
};

export default MyPixelatedPieChart;
