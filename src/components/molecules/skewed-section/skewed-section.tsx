import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Section from './../../atoms/section';
import SkewedBorder from '../../atoms/skewed-border';
import { compContainer } from './skewedSection.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
    left?: boolean;
    dark?: boolean;
    title?: string;
    style?: React.CSSProperties;
    className?: string;
}
export default function SkewedSection({ children, left, dark, title, style, className }: Props) {

    return (
        <>
            <div style={style} className={`pt-5 pb-5 ${className} `}>
                <SkewedBorder left={left} dark={dark} />
                <Section dark={dark} className={compContainer} style={{ marginTop: '-100px', position: 'relative', zIndex: 1 }}>
                    <Row className={'d-flex justify-content-center'}>
                        <Col sm={'8'}>
                            <h1 className={`mb-5 ${(dark) ? 'text-white' : 'text-dark'}`}>{title}</h1>
                            {children}
                        </Col>
                    </Row>
                </Section>
                <SkewedBorder left={(left) ? false : true} dark={dark} style={{ marginTop: '-100px', zIndex: 0 }} />
            </div>
        </>
    )
}