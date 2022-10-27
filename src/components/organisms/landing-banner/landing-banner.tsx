import React from 'react';
import { Col, Row } from 'react-bootstrap';
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
                <div className=''></div>
                <div className='align-self-center w-100'>
                    <Col className='d-sm-none d-md-block'>
                        <Row>
                            <Col>
                                <AnimatedLandingLogo className={logo} />
                            </Col>
                            <Col>
                                <AnimatedBannerTitle />
                            </Col>
                        </Row>
                    </Col>
                    <Col className='d-sm-block d-md-none'>
                        <Row className='d-flex justify-content-center'>
                            <AnimatedLandingLogo className={logo} noIntro />
                        </Row>
                        <Row>
                            <Col className='pt-4'>
                                <AnimatedBannerTitle className={'d-flex justify-content-center'} />
                            </Col>
                        </Row>
                    </Col>
                </div>
                <div className='align-self-end w-100'>
                    <p className={`text-center`}><i className={`fas fa-chevron-down ${downArrow}`} onClick={onArrowClick}></i></p>
                </div>
            </div>
        </>
    )
}