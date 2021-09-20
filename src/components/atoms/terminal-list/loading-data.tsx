import React from 'react';
import Typed from 'react-typed';

export default function LoadingData() {

    return (
        <>
            <p>
                <code className={'text-info'}>Loading Data<Typed strings={["......"]} typeSpeed={150} loop loopCount={2} cursorChar={''} /></code>
            </p>
        </>
    )
}