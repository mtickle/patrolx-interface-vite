import React from "react";
import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../components/data/chart_data_library'


export const CallCountsByAgencyBarChart = () => {

  var chartActualData = ChartDataLibrary("getCallCountsByAgency", 10);

  const chartData = {
    //Oh this is so ugly. Bad man.
    labels: chartActualData.map(item => item._id.replace("Department","").replace("Dept","")),
    datasets: [
      {
        label: 'Calls for Assistance', // Replace with your dataset label
        data: chartActualData.map(item => item.AgencyCount), // Replace 'value' with your data property
        borderColor: 'rgba(110, 110, 110, 0.8)',
        borderWidth: 1,
        indexAxis: 'y',
        backgroundColor: [
          'rgba(64, 122, 255, 0.8)',
        ],
      },
    ]
  }
  const chartOptions = {
    plugins: {
      legend: {
        display: false,
        position: 'bottom',
      },
    },
  };

  return (
    <>
      <h5>Calls by Responding Agency</h5>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

