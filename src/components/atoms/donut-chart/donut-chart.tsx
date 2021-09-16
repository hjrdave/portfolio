import React from 'react';
import { Doughnut } from 'react-chartjs-2';

interface Props {
    className?: string;
    style?: React.CSSProperties;
    label?: string;
    level?: number;
}
export default function SkillChartDonut({ className, style, label, level }: Props) {

    const data = {
        datasets: [
            {
                data: [level, 10],
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
                <h5 className='text-center mt-3' style={{ color: '#57c09c' }}>{label}</h5>
            </div>
        </>
    )
}
