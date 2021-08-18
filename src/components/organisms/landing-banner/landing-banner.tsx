import React from 'react';
import Logo from '../../atoms/logo';
import { compContainer, downArrow, logo, titleContainer } from './landingBanner.module.scss';

export default function LandingBanner() {

    return (
        <>
            <div className={`${compContainer} d-flex flex-column justify-content-between`}>
                <div></div>
                <div className='align-self-center w-100'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <Logo className={logo} />
                        </div>
                        <div className={'d-flex align-items-center'}>
                            <div className={`${titleContainer}`}>
                                <h1>My Name is David Sanders</h1>
                                <h3>I like to Design and Code</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='align-self-end w-100'>
                    <p className={`${downArrow} text-center`}><i className="fas fa-chevron-down"></i></p>
                </div>
            </div>
        </>
    )
}