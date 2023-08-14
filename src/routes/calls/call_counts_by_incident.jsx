import React from "react";

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Label,
    LabelList
} from "recharts";

import { ChartDataLibrary } from '../../components/data/chart_data_library'

export const CallCountsByIncidentBarChart = () => {

    var chartData = ChartDataLibrary("getCallCountsByIncident", 10);

    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{ backgroundColor: "#FFFFFF", margin: "20", borderColor: "#E0C0C0", borderWidth: "2px", boxSizing: "border-box" }} >
                    <p className="label">Incident Type</p>
                    <p className="label">{`${label}: ${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <>
            <h5>Calls by Incident</h5>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart
                    height={500}
                    data={chartData}
                    layout="vertical"
                    margin={{
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />

                    <XAxis
                        type="number"
                        dataKey="IncidentCount"
                        domain={[0, 12000]}
                        tick={{ fontSize: 12 }}
                        scale="linear"
                    />

                    <YAxis type="category" dataKey="_id" fontSize={12} width={175} />

                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} wrapperStyle={{ backgroundColor: "white", borderStyle: "solid", borderColor: "#E0E0E0", padding: "10px" }} />

                    <Bar dataKey="IncidentCount" fill="#4682B4">

                        <LabelList
                            dataKey="IncidentCount"
                            position="insideLeft"
                            angle={90}
                            offset={10}
                            fill="white"
                            fontSize={12}
                        />

                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
};

