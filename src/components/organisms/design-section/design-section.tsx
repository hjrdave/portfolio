import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SkewedSection from '../../molecules/skewed-section';
import eventTicket from '../../../images/EventTicket.png';
import generalBrochure from '../../../images/generalBrochure1.png';
import infocards1 from '../../../images/infocards1.png';
import prymziabookcover from '../../../images/prymziabookcover.png';

export default function DesignSection() {

    return (
        <>
            <SkewedSection dark left title={'Design'}>
                <Row>
                    <Col className={'p-0'}>
                        <img src={infocards1} width={'100%'} />

                    </Col>
                    <Col className={'p-0'}>
                        <img src={generalBrochure} width={'100%'} />
                    </Col>
                    <Col className={'p-0'}>
                        <img src={eventTicket} width={'100%'} />
                    </Col>
                </Row>
                <Row>
                    <Col className={'p-0'}>
                        <img src={eventTicket} width={'100%'} />
                    </Col>
                    <Col className={'p-0'}>
                        <img src={generalBrochure} width={'100%'} />
                    </Col>
                    <Col className={'p-0'}>
                        <img src={infocards1} width={'100%'} />
                    </Col>
                </Row>
                <Row className={'pb-5'}>
                    <Col className={'p-0'}>
                        <img src={eventTicket} width={'100%'} />
                    </Col>
                    <Col className={'p-0'}>
                        <img src={infocards1} width={'100%'} />

                    </Col>
                    <Col className={'p-0'}>
                        <img src={generalBrochure} width={'100%'} />
                    </Col>
                </Row>
            </SkewedSection>
        </>
    )
}