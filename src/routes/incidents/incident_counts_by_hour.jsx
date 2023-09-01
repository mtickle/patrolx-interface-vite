import React from "react";
import { Line } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../components/data/chart_data_library'

export const IncidentsCountsByHourLineChart = () => {

    var chartActualData = ChartDataLibrary("getIncidentCountsByHour", 25);

    const chartData = {
        labels: chartActualData.map(item => item._id),
        datasets: [
            {
                label: 'Calls for Assistance', 
                data: chartActualData.map(item => item.IncidentCount), 
                borderColor: 'rgba(110, 110, 110, 0.8)',
                borderWidth: 1,
                backgroundColor: ['#2a9d8f', '#e9c46a', '#f4a261', '#e76f51','#ca6702','#bb3e03','#ae2012','#9b2226'],
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
            <h5>Incidents by Hour of Day</h5>
            <Line data={chartData} options={chartOptions} />
        </>
    );
};

