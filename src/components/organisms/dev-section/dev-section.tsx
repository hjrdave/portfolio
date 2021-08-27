import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SkewedSection from '../../molecules/skewed-section';
import eventTicket from '../../../images/EventTicket.png';
import generalBrochure from '../../../images/generalBrochure1.png';
import infocards1 from '../../../images/infocards1.png';
import prymziabookcover from '../../../images/prymziabookcover.png';
import trebleGSMTile from '../../../images/port-tile-treblegsm.png';
import portTileTlsanders from '../../../images/port-tile-tlsanders.png';
import portTileGithub from '../../../images/port-tile-github.png';

export default function DevSection() {

    return (
        <>
            <SkewedSection title={'Development'}>
                <Row>
                    <Col className={'p-0'}>
                        <img src={trebleGSMTile} width={'100%'} />

                    </Col>
                    <Col className={'p-0'}>
                        <img src={portTileTlsanders} width={'100%'} />
                    </Col>
                </Row>
                <Row>
                    <Col className={'p-0'}>
                        <img src={portTileGithub} width={'100%'} />
                    </Col>
                    <Col className={'p-0'}>
                        <img src={generalBrochure} width={'100%'} />
                    </Col>
                    {/* <Col className={'p-0'}>
                        <img src={infocards1} width={'100%'} />
                    </Col> */}
                </Row>
                {/*  <Row>
                    <Col className={'p-0'}>
                        <img src={eventTicket} width={'100%'} />
                    </Col>
                    <Col className={'p-0'}>
                        <img src={infocards1} width={'100%'} />

                    </Col>
                    <Col className={'p-0'}>
                        <img src={generalBrochure} width={'100%'} />
                    </Col>
                </Row> */}
            </SkewedSection>
        </>
    )
}