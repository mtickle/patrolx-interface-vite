import React from "react";
import { Bar } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../components/data/chart_data_library'

export const CallCountsByIncidentBarChart = () => {

    var chartActualData = ChartDataLibrary("getCallCountsByIncident", 10);

    const chartData = {
        labels: chartActualData.map(item => item._id),
        datasets: [
            {
                label: 'Calls for Assistance', // Replace with your dataset label
                data: chartActualData.map(item => item.IncidentCount), // Replace 'value' with your data property
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
            <h5>Calls by Incident Type</h5>
            <Bar data={chartData} options={chartOptions} />
        </>
    );
};

