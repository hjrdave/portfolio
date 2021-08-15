import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

interface Props {
    children?: JSX.Element | JSX.Element[];
    fullWidth?: boolean
}
export default function Content({ children, fullWidth }: Props) {

    return (
        <>
            <Container fluid={fullWidth}>
                <Row>
                    <Col>
                        {children}
                    </Col>
                </Row>
            </Container>
        </>
    )
}