import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from './../../atoms/section';
import SkewedBorder from '../../atoms/skewed-border';
import { compContainer } from './skewedSection.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
    id?: string;
    left?: boolean;
    dark?: boolean;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
    compRef?: any;
}
export default function SkewedSection({ children, left, dark, title, style, className, id, compRef }: Props) {

    return (
        <>
            <Row className={`pt-5 pb-5 ${className}`}>
                <Col>
                    <SkewedBorder left={left} dark={dark} />
                    <Section dark={dark} className={compContainer} style={{ marginTop: '-100px', position: 'relative', zIndex: 1 }}>
                        <Col sm={'12'}>
                            <div className={'d-flex justify-content-center'}>
                                <Col md={'12'} lg={'8'}>
                                    <h1 ref={compRef} className={`mb-5 ${(dark) ? 'text-white' : 'text-dark'}`}>{title}</h1>
                                    {children}
                                </Col>
                            </div>
                        </Col>
                    </Section>
                    <SkewedBorder left={(left) ? false : true} dark={dark} style={{ marginTop: '-100px', zIndex: 0 }} />
                </Col>
            </Row>
        </>
    )
}