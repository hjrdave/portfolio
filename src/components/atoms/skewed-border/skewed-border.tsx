import React from 'react';
import { skewedBorder, skewLeft, skewRight, white, dark } from './skewedBorder.module.scss';

interface Props {
    dark?: boolean;
    left?: boolean;
    style?: React.CSSProperties;
}
export default function SkewedBorder({ dark: darkBK, left, style }: Props) {

    return (
        <>
            <div style={style} className={`${skewedBorder} ${(left) ? skewLeft : skewRight} ${(darkBK) ? dark : white}`}></div>
        </>
    )
}