import React from 'react';
import { compContainer } from './glowBox.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
}
export default function GlowBox({ children }: Props) {

    return (
        <>
            <div className={`${compContainer}`}>
                {children}
            </div>
        </>
    )
}