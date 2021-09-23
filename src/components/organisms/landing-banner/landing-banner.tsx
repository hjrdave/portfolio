import React from 'react';
import { Link } from 'gatsby';
import AnimatedLandingLogo from '../../molecules/animated-landing-logo';
import AnimatedBannerTitle from '../../atoms/animated-banner-title';
import { compContainer, downArrow, logo } from './landingBanner.module.scss';

interface Props {
    onArrowClick?: () => void;
}
export default function LandingBanner({ onArrowClick }: Props) {



    return (
        <>

            <div className={`${compContainer} d-flex flex-column justify-content-between`}>
                <div></div>
                <div className='align-self-center w-100'>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <AnimatedLandingLogo className={logo} />
                        </div>
                        <div className={'d-flex align-items-center'}>
                            <AnimatedBannerTitle />
                        </div>
                    </div>
                </div>
                <div className='align-self-end w-100'>
                    <p className={`${downArrow} text-center`} ><i className="fas fa-chevron-down" onClick={onArrowClick}></i></p>
                </div>
            </div>
        </>
    )
}