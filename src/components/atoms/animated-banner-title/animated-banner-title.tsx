import React from 'react';
import Typed from 'react-typed';
import { compContainer, name, phrase, lede } from './animatedBannerTitle.module.scss';

export default function AnimatedBannerTitle() {

    const [hideTyped, setHideTyped] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => { setHideTyped(false) }, 6000)
    }, []);

    return (
        <>
            <div className={`${compContainer}`}>
                <p className={phrase}>My Name is</p>
                <h1 className={name}>David Sanders</h1>
                <h3>
                    {
                        (!hideTyped) ?
                            <Typed strings={["I am Coder", "a Designer", "and a lover of fish....🐟"]} typeSpeed={60} backSpeed={80} loop /> : null
                    }
                </h3>
            </div>
        </>
    )
}