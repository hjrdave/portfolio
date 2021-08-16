import React from 'react';
import { compContainer, downArrow } from './landingBanner.module.scss';

export default function LandingBanner() {

    return (
        <>
            <div className={`${compContainer} d-flex`}>
                <div className='align-self-end w-100'>
                    <p className={`${downArrow} text-center`}><i className="fas fa-chevron-down"></i></p>
                </div>
            </div>
        </>
    )
}