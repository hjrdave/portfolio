import { withArtDirection } from 'gatsby-plugin-image';
import React from 'react';
import { Bar } from 'react-chartjs-2';

interface Props {
    bars: {
        label: string,
        level: number
    }[];
}
export default function BarChart({ bars }: Props) {

    const labels = bars.map((bar) => (bar.label));
    const levels = bars.map((bars) => (bars.level));
    const fill = bars.map(() => ('#4A3C52'));
    const border = bars.map(() => ('#57c09c'));

    const data = {
        labels: labels,
        datasets: [
            {
                label: false,
                color: '#000000',
                data: levels,
                backgroundColor: fill,
                borderColor: border,
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
        plugins: {
            legend: {
                display: false
            }
        }
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