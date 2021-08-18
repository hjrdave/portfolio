import React from 'react';
import { compContainer, dark } from './section.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element;
    dark?: boolean;
    className?: string;
}
export default function Section({ children, dark: darkBK, className }: Props) {

    return (
        <>
            <div className={`${compContainer} ${(darkBK) ? dark : ''} ${className}`}>
                {children}
            </div>
        </>
    )
}