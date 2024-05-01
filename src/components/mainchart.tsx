"use client"

import { useState, useEffect } from 'react';  
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend, 
} from 'chart.js';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement, 
    Title, 
    Tooltip, 
    Legend,
)

// Interface for the dataset
interface ChartDataSets {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
}

// Interface for the overall chart data
interface ChartData {
    labels: string[];
    datasets: ChartDataSets[];
}

export default function MainChart() {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [], 
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
            datasets: [
                {
                    label: 'Sales $',
                    data: [15000, 16000, 17000, 18000, 1800, 1900, 2000],
                    backgroundColor: "primary",
                    borderColor: 'secondary',
                },
            ]
        })
        setChartOptions({
            plugins: {
                legend: {
                    position: 'top', 
                }, 
                title: {
                    display: true, 
                    text: 'Chart.js Bar Chart'
                }
            }, 
            maintainAspectRatio: false, 
            responsive: true, 
        })
    }, []); 

    return (
        <>
        <div className="w-full md:col-span-2 relative lg:h-[70vh]h-[50vh] m-auto p-4 border rounded-lg bg-secondary">
                <Bar data={chartData} options={chartOptions} />
            </div>
            </>
  )
}