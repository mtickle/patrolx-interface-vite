import React from "react";
import { Bar } from 'react-chartjs-2';
import { Colors } from "chart.js";
import { ChartDataLibrary } from '../../components/data/chart_data_library'


export const CallCountsByAgencyBarChart = () => {

    var chartActualData = ChartDataLibrary("getCallCountsByAgency", 10);

    const chartData = { 
        labels: chartActualData.map(item => item._id),
        datasets: [
            {
              label: 'Calls for Assistance', // Replace with your dataset label
              data: chartActualData.map(item => item.AgencyCount), // Replace 'value' with your data property
              borderColor: 'rgba(110, 110, 110, 0.8)',
              borderWidth: 1,
              indexAxis: 'y',
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
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

