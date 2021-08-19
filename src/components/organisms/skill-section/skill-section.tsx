import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DonutChart from '../../atoms/chart-donut';
import SkewedSection from '../../molecules/skewed-section';

export default function SkillSection() {

    return (
        <>
            <SkewedSection left dark title={'My Skills'} className={'mt-4 pt-4'}>
                <Row>
                    <Col sm={'4'}>
                        <DonutChart />
                    </Col>
                    <Col sm={'4'}>
                        <DonutChart />
                    </Col>
                    <Col sm={'4'}>
                        <DonutChart />
                    </Col>
                </Row>

            </SkewedSection>
        </>
    )
}