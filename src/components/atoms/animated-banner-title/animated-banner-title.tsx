import React from 'react';
import Typed from 'react-typed';
import { Col } from 'react-bootstrap';
import { compContainer, name, phrase, lede } from './animatedBannerTitle.module.scss';

interface Props {
    className?: string;
}
export default function AnimatedBannerTitle({ className }: Props) {

    const [hideTyped, setHideTyped] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => { setHideTyped(false) }, 6000)
    }, []);

    return (
        <>
            <Col className={`${compContainer} ${className}`}>
                <div>
                    <p className={phrase}>My Name is</p>
                    <h1 className={name}>David Sanders</h1>
                    <h3>
                        {
                            (!hideTyped) ?
                                <Typed strings={["I am Coder", "a Designer", "and a lover of coffee..☕"]} typeSpeed={60} backSpeed={80} loop /> : null
                        }
                    </h3>
                </div>
            </Col>
        </>
    )
}