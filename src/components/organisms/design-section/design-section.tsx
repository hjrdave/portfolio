import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SkewedSection from '../../molecules/skewed-section';
import eventTicket from '../../../images/EventTicket.png';
import generalBrochure from '../../../images/generalBrochure1.png';
import infocards1 from '../../../images/infocards1.png';
import prymziabookcover from '../../../images/prymziabookcover.png';
import { animatedThumbnail, thumbnail, thumbnailCentered } from './designSection.module.scss';

export default function DesignSection() {

    const [popout, setpopout] = React.useState(false);

    return (
        <>
            <SkewedSection dark left title={'Design'}>
                <Row>
                    <Col className={'p-0'}>
                        <div className={`${animatedThumbnail} ${thumbnailCentered} p-2`}>
                            <img src={infocards1} className={thumbnail} width={'100%'} style={{ animationDelay: '1.05s' }} />
                        </div>
                    </Col>
                    <Col className={'p-0'}>
                        <div className={`${animatedThumbnail} p-2`}>
                            <img src={generalBrochure} className={thumbnail} width={'100%'} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className={'p-0'}>
                        <div className={`${animatedThumbnail} p-2`}>
                            <img src={eventTicket} width={'100%'} className={thumbnail} />
                        </div>
                    </Col>
                    <Col className={'p-0'}>
                        <div className={`${animatedThumbnail} p-2`}>
                            <img src={generalBrochure} width={'100%'} className={thumbnail} style={{ animationDelay: '1.3s' }} />
                        </div>
                    </Col>
                </Row>
                <Row className={'pb-5'}>
                    <Col className={'p-0'}>
                        <div className={`${animatedThumbnail} p-2`}>
                            <img src={eventTicket} width={'100%'} className={thumbnail} style={{ animationDelay: '1.1s' }} />
                        </div>
                    </Col>
                    <Col className={'p-0'}>
                        <div className={`${animatedThumbnail} p-2`}>
                            <img src={infocards1} width={'100%'} className={thumbnail} style={{ animationDelay: '1.3s' }} />
                        </div>
                    </Col>
                </Row>
            </SkewedSection>
        </>
    )
}