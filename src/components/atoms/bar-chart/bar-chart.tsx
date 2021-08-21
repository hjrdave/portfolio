import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart() {

    const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                //label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#4A3C52',
                    '#4A3C52',
                    '#4A3C52',
                    '#4A3C52',
                    '#4A3C52',
                    '#4A3C52'
                ],
                borderColor: [
                    '#57c09c',
                    '#57c09c',
                    '#57c09c',
                    '#57c09c',
                    '#57c09c',
                    '#57c09c'
                ],
                borderWidth: 6,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
            }
        },
        responsive: true,
        plugins: {
            // legend: {
            //     position: 'right',
            // },
            // title: {
            //     display: true,
            //     text: 'Chart.js Horizontal Bar Chart',
            // },
        },
    };


    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}