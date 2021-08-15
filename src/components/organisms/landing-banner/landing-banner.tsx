import React from 'react';
import Bubbles from '../../atoms/bubbles';
import { compContainer } from './landingBanner.module.scss';

export default function LandingBanner() {

    return (
        <>
            <div className={compContainer}>
                <Bubbles />
                <p>Landing Banner</p>
            </div>
        </>
    )
}