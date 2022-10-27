import React from 'react';
import Row from 'react-bootstrap/Row';
import { compContainer, dark } from './section.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
    dark?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export default function Section({ children, dark: darkBK, className, style }: Props) {

    return (
        <>
            <Row className={`${compContainer} ${(darkBK) ? dark : ''} ${className}`} style={style}>
                {children}
            </Row>
        </>
    )
}