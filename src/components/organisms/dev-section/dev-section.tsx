import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SkewedSection from '../../molecules/skewed-section';
import TerminalList from '../../atoms/terminal-list';
import GlowBox from '../../atoms/glow-box';
import eventTicket from '../../../images/EventTicket.png';
import generalBrochure from '../../../images/generalBrochure1.png';
import infocards1 from '../../../images/infocards1.png';
import prymziabookcover from '../../../images/prymziabookcover.png';
import trebleGSMTile from '../../../images/port-tile-treblegsm.png';
import portTileTlsanders from '../../../images/port-tile-tlsanders.png';
import portTileGithub from '../../../images/port-tile-github.png';

export default function DevSection() {

    const devList = [
        {
            name: 'TrebleGSM',
            description: <>This is a hook based global state management system for React.js. It has a light footprint, is highly extendable, can be used in simple applications, in enterprise level applications, it is easily integrated into applications with other GSM solutions, and can be used to build widgets in standalone libraries. <a href={'https://treblegsm.org'} target={'_blank'}>Visit TrebleGSM.com</a>.</>
        },
        {
            name: 'TLSanders.com',
            description: <>This is an Author website I created for Author and Illustrator TL Sanders. I used Wordpress and a custom theme to create this site. I also connected the site blog to social media and added an email form to help with creating an email marketing list. <a href='https://tlsanders.com' target={'_blank'}>Visit TLSanders.com</a>. </>
        },
        {
            name: 'Github',
            description: <>You can see all of the projects I am working on <a href='https://github.com/hjrdave' target='_blank'>here</a>.</>
        }
    ]

    return (
        <>
            <SkewedSection title={'Development'}>
                <Row>
                    <Col>
                        <GlowBox>
                            <TerminalList items={devList} />
                        </GlowBox>
                    </Col>
                </Row>
                {/* <Row>
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
                    <Col className={'p-0'}>
                        <img src={infocards1} width={'100%'} />
                    </Col>
                </Row> */}
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