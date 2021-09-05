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
            description: 'This is a hook based global state management system for React.js. It has a light footprint, is highly extendable, can be used in simple applications, in enterprise level applications, it is easily integrated into applications with other GSM solutions, and can be used to build widgets in standalone libraries.'
        },
        {
            name: 'TLSanders.com',
            description: 'I’m a wife, a mother of boys, and I live in Centralia, Illinois. I’m an author and illustrator of children’s picture books and YA books. I love to write, illustrate, eat chocolate, and browse stores with office ...I’m a wife, a mother of boys, and I live in Centralia, Illinois. I’m an author and illustrator of children’s picture books and YA books. I love to write, illustrate, eat chocolate, and browse stores with office ...'
        },
        {
            name: 'Github',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget nulla eu libero bibendum bibendum. Aliquam eget enim sed felis lacinia pretium. Nam et metus sit amet felis tempus laoreet.'
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