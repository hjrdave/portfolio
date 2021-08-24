import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DonutChart from '../../atoms/donut-chart';
import BarChart from '../../atoms/bar-chart';
import SkewedSection from '../../molecules/skewed-section';

export default function SkillSection() {

    return (
        <>
            <SkewedSection left dark title={'My Skills'} className={'mt-4 pt-4'}>
                <Row className={'pb-4'}>
                    <Col sm={'3'}>
                        <DonutChart label={'Skill 1'} />
                    </Col>
                    <Col sm={'3'}>
                        <DonutChart label={'Skill 2'} />
                    </Col>
                    <Col sm={'3'}>
                        <DonutChart label={'Skill 3'} />
                    </Col>
                </Row>
                <Row className={'pb-5'}>
                    <Col>
                        <BarChart />
                    </Col>
                </Row>
            </SkewedSection>
        </>
    )
}