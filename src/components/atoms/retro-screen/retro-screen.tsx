import React from 'react';
import { compContainer, outer, inner, stripped } from './retroScreen.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
}
export default function RetroScreen({ children }: Props) {

    return (
        <>
            <div className={compContainer}>
                <div className={`${outer} d-flex justify-content-center align-items-center`}>
                    <div className={`${inner}`}>
                        <div className={`p-4 ${stripped}`}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}