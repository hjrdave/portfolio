import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart() {

    const DATA_COUNT = 7;
    const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

    //const labels = Utils.months({ count: 7 });
    const data = {
        // labels: labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: NUMBER_CFG,
                borderColor: 'red',
                backgroundColor: 'red',
            },
            {
                label: 'Dataset 2',
                data: NUMBER_CFG,
                borderColor: 'blue',
                backgroundColor: 'blue',
            }
        ]
    };

    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 2,
            }
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Chart.js Horizontal Bar Chart'
            }
        }
    }

    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}