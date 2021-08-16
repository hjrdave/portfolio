import React from 'react';
import { compContainer } from './section.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element;
}
export default function Section({ children }: Props) {

    return (
        <>
            <div className={compContainer}>
                {children}
            </div>
        </>
    )
}