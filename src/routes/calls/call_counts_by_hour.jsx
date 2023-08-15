import React from "react";
import { Line } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../components/data/chart_data_library'

export const CallCountsByHourLineChart = () => {

    var chartActualData = ChartDataLibrary("getCallCountsByHour", 25);

    const chartData = {
        labels: chartActualData.map(item => item._id),
        datasets: [
            {
                label: 'Calls for Assistance', 
                data: chartActualData.map(item => item.HourCount), 
                borderColor: 'rgba(110, 110, 110, 0.8)',
                borderWidth: 1,
                //indexAxis: 'y',
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
            <h5>Calls by Hour of Day</h5>
            <Line data={chartData} options={chartOptions} />
        </>
    );
};

