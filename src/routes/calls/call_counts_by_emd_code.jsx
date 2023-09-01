import React from "react";
import axios from "axios";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { ChartDataLibrary } from '../../components/data/chart_data_library'


export const CallCountsByEmdCodeBarChart = () => {

    var chartActualData = ChartDataLibrary("getCallCountsByEmdCode", 10);

    const chartData = {
    labels: chartActualData.map(item => item._id), 
    datasets: [
      {
        label: 'Calls for Assistance', 
        data: chartActualData.map(item => item.EmdCodeCount), 
        backgroundColor: ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51','#ca6702','#bb3e03','#ae2012','#9b2226'],
        borderColor: 'rgba(51, 0, 213, 1)',
        borderWidth: 1,
        indexAxis: 'y',
      },

    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
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

