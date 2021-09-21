import React from 'react';
import { Row, Col, Badge } from 'react-bootstrap';
import SkewedSection from '../../molecules/skewed-section';
import data from './data';
import ImageBioPiece from '../../atoms/image-bio-piece';
import eventTicket from '../../../images/EventTicket.png';
import generalBrochure from '../../../images/generalBrochure1.png';
import infocards1 from '../../../images/infocards1.png';
import bookCover from '../../../images/prymziabookcover.png';
import rollupBanner from '../../../images/rollupbanner.png';
import businessCard from '../../../images/somethingstitched.png';
import prymziaMap from '../../../images/prymziamapv1.png';
import ModalBasic from '../../molecules/modal-basic';
import { modalBody } from './designSection.module.scss';

export default function DesignSection() {

    const [show, setShow] = React.useState(false);
    const [modalUrl, setModalUrl] = React.useState('');
    const [modalInfo, setModalInfo] = React.useState({ company: 'Loading...', type: 'Loading...', bio: 'Loading...', tags: [] });
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
                        <div className='d-flex justify-content-between'>
                            <p>Type: {modalInfo.type}</p>
                            <div className='d-flex'>
                                {
                                    modalInfo.tags?.map((tag) => (<Badge>{tag}</Badge>))
                                }
                            </div>
                        </div>
                        <p>Company: {modalInfo.company}</p>
                        <p>{modalInfo.bio}</p>

                    </Col>
                </ModalBasic.Body>
            </ModalBasic>
            <SkewedSection dark left title={'Design'}>
                <Row>
                    {
                        data.map((piece) => (
                            <>
                                <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                                    <ImageBioPiece image={piece.imageURL} info={piece} onClick={onClick} />
                                </Col>
                            </>
                        ))
                    }
                    {/* <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={infocards1} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={generalBrochure} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={eventTicket} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={bookCover} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={rollupBanner} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={businessCard} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col>
                    <Col sm={4} className={'p-0'} onClick={() => setShow(true)}>
                        <ImageBioPiece image={prymziaMap} info={{ company: 'foo', type: 'foo' }} onClick={onClick} />
                    </Col> */}
                </Row>
            </SkewedSection>
        </>
    )
}