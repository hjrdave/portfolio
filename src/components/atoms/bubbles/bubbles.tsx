import React from 'react';
import Particles from 'react-tsparticles';
import params from './params';
import { compContainer } from './bubbles.module.scss';

export default function Bubbles() {

    return (
        <>
            <Particles
                canvasClassName={compContainer}
                params={params as any}
            />
        </>
    )
}