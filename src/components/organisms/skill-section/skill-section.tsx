import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DonutChart from '../../atoms/donut-chart';
import BarChart from '../../atoms/bar-chart';
import RetroScreen from '../../atoms/retro-screen';
import SkewedSection from '../../molecules/skewed-section';

interface Props {
    compRef?: any;
}
export default function SkillSection({ compRef }: Props) {

    return (
        <>
            <SkewedSection compRef={compRef} left dark title={'My Skills'} className={'mt-4 pt-4'}>
                <Row>
                    <Col>
                        <RetroScreen>
                            <Col sm='12'>
                                <Row className={'pb-4 d-flex justify-content-center'}>
                                    <Col sm={'3'}>
                                        <DonutChart label={'Development'} level={40} />
                                    </Col>
                                    <Col sm={'3'}>
                                        <DonutChart label={'Graphic Design'} level={30} />
                                    </Col>
                                    <Col sm={'3'}>
                                        <DonutChart label={'Digital Marketing'} level={20} />
                                    </Col>
                                </Row>
                                <Row className={'pb-5 pl-4 justify-content-center'}>
                                    <Col sm={'10'}>
                                        <BarChart
                                            bars={[
                                                {
                                                    label: 'HTML/CSS',
                                                    level: 7
                                                },
                                                {
                                                    label: 'JavaScript',
                                                    level: 8
                                                },
                                                {
                                                    label: 'React',
                                                    level: 9
                                                },
                                                {
                                                    label: 'Typescript',
                                                    level: 6
                                                },
                                                {
                                                    label: 'Wordpress',
                                                    level: 8
                                                },
                                                {
                                                    label: 'Adobe Suite',
                                                    level: 7
                                                },
                                            ]}
                                        />
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