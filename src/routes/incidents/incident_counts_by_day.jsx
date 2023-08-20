import React from "react";
import { Line } from 'react-chartjs-2';
import { ChartDataLibrary } from '../../components/data/chart_data_library'

export const IncidentsCountsByDayLineChart = () => {

    var chartActualData = ChartDataLibrary("getIncidentCountsByDayOfWeek", 25);

    const chartData = {
        labels: chartActualData.map(item => item._id),
        datasets: [
            {
                label: 'Incidents', 
                data: chartActualData.map(item => item.IncidentCount), 
                borderColor: 'rgba(110, 110, 110, 0.8)',
                borderWidth: 1,
                backgroundColor: [
                    'rgba(64, 122, 255, 0.8)',
                  ],
            },
        ]
    }
    const chartOptions = {
        options: {
            scales: {
                y: {
                    type: 'timeseries',
                    time: {
                        unit: 'week',
                        isoWeekday: true,
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false,
                position: 'bottom',
            },
        },
    };

    return (
        <>
            <h5>Incidents by Day of Week</h5>
            <Line data={chartData} options={chartOptions} />
        </>
    );
};

