import React from "react";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { ChartDataLibrary } from '../../components/data/chart_data_library'


export const CallCountsByEmdCodeBarChart = () => {

    var chartActualData = ChartDataLibrary("getCallCountsByEmdCode", 10);

    const chartData = {
    labels: chartActualData.map(item => item._id), // Replace 'label' with your data property
    datasets: [
      {
        label: 'Calls for Assistance', // Replace with your dataset label
        data: chartActualData.map(item => item.EmdCodeCount), // Replace 'value' with your data property
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: 'rgba(51, 0, 213, 1)',
        borderWidth: 1,
        indexAxis: 'y',
      },

    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },
    },
  };

  return (
    <>
      <h5>Calls by EMD Code</h5>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

