import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    label?: string;
}
export default function SkillChartDonut({ className, style, label }: Props) {

    const data = {
        datasets: [
            {
                data: [5, 2],
                backgroundColor: [
                    '#57c09c',
                    '#4A3C52'
                ],
                borderColor: [
                    '#57c09c',
                    '#57c09c'
                ],
                borderWidth: 6,
            },
        ],
    };

    return (
        <>
            <div className={className} style={style}>
                <Doughnut data={data} />
                <h5 className='text-white text-center mt-3'>{label}</h5>
            </div>
        </>
    )
}
