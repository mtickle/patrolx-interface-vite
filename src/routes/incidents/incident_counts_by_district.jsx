import React from "react";
import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../components/data/chart_data_library'

export const IncidentCountsByDistrictBarChart = () => {

  var chartActualData = ChartDataLibrary("getIncidentCountsByDistrict", 10);

  const chartData = {
    labels: chartActualData.map(item => item._id),
    datasets: [
      {
        label: 'Incidents', 
        data: chartActualData.map(item => item.IncidentCount), 
        borderColor: 'rgba(110, 110, 110, 0.8)',
        borderWidth: 1,
        indexAxis: 'y',
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
      <h5>Incidents By District</h5>
      <Bar data={chartData} options={chartOptions} />
    </>
  );
};

