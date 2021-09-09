import React from 'react';
import { Bar } from 'react-chartjs-2';

export default function BarChart() {

    const data = {
        labels: ['HTML/CSS', 'JavaScript', 'React', 'Typescript', 'Wordpress', 'Adobe Suite'],
        datasets: [
            {
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                //color: '#000000',
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
                ticks: {
                    color: "#57c09c",
                    font: {
                        size: 16,
                    }
                }
            },
            y: {
                ticks: {
                    color: "#57c09c",
                    font: {
                        size: 16,
                    }
                }
            }
        },
        responsive: true,
        //scaleFontColor: '#000000'
    };


    return (
        <>
            <Bar
                data={data}
                options={options}
            />
        </>
    )
}