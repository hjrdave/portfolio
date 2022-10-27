import React from 'react';
import Typed from 'react-typed';

export default function StartProgram() {

    return (
        <>
            <p>
                <code className={'text-info'}>
                    Starting Program<Typed strings={["......"]} typeSpeed={150} loop loopCount={2} cursorChar={''} />
                </code>
            </p>
        </>
    )
}