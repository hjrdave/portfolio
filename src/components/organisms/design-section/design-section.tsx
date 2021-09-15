import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SkewedSection from '../../molecules/skewed-section';
import ImageBioPiece from '../../atoms/image-bio-piece';
import eventTicket from '../../../images/EventTicket.png';
import generalBrochure from '../../../images/generalBrochure1.png';
import infocards1 from '../../../images/infocards1.png';
import ModalBasic from '../../molecules/modal-basic';
import { modalBody } from './designSection.module.scss';

export default function DesignSection() {

    const [show, setShow] = React.useState(false);
    const [modalUrl, setModalUrl] = React.useState('');
    const [modalInfo, setModalInfo] = React.useState({ company: 'Loading...', type: 'Loading...' });
    const onClick = (url: string, info: any) => {
        setModalUrl(url);
        setModalInfo(info);
    }

    return (
        <>
            <ModalBasic show={show} onHide={() => setShow(false)} className={modalBody}>
                <ModalBasic.Body className={`${modalBody} p-0`} >
                    <Col sm={12}>
                        <img src={modalUrl} width={'100%'} />
                    </Col>
                    <Col sm={12} className={'p-4'}>
                        <p>{modalInfo.company}</p>
                        <p>{modalInfo.type}</p>
                    </Col>
                </ModalBasic.Body>
            </ModalBasic>
            <SkewedSection dark left title={'Design'}>
                <Row>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={infocards1} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={generalBrochure} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={eventTicket} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={generalBrochure} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={eventTicket} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={infocards1} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                </Row>
            </SkewedSection>
        </>
    )
}