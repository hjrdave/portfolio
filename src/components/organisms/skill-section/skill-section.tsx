import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DonutChart from '../../atoms/donut-chart';
import BarChart from '../../atoms/bar-chart';
import RetroScreen from '../../atoms/retro-screen';
import SkewedSection from '../../molecules/skewed-section';

export default function SkillSection() {

    return (
        <>
            <SkewedSection left dark title={'My Skills'} className={'mt-4 pt-4'}>
                <Row>
                    <Col>
                        <RetroScreen>
                            <Col sm='12'>
                                <Row className={'pb-4 d-flex justify-content-center'}>
                                    <Col sm={'3'}>
                                        <DonutChart label={'Development'} />
                                    </Col>
                                    <Col sm={'3'}>
                                        <DonutChart label={'Graphic Design'} />
                                    </Col>
                                    <Col sm={'3'}>
                                        <DonutChart label={'Digital Marketing'} />
                                    </Col>
                                </Row>
                                <Row className={'pb-5 pl-4 justify-content-center'}>
                                    <Col sm={'10'}>
                                        <BarChart />
                                    </Col>
                                </Row>
                            </Col>
                        </RetroScreen>
                    </Col>
                </Row>
            </SkewedSection>
        </>
    )
}