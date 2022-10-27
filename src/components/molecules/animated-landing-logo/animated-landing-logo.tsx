import React from 'react';
import Logo from '../../atoms/logo';
import { container, bubble1, bubble2, float, depth } from './animatedLandingLogo.module.scss';

interface Props {
    className?: string;
    noIntro?: boolean;
}
export default function AnimatedLandingLogo({ className, noIntro }: Props) {

    return (
        <>
            <div className={(noIntro) ? 'd-flex justify-content-center' : container} >
                <div className={float}>
                    <Logo
                        className={`${className}`}
                        classNameBody={depth}
                        classNameBubble1={bubble1}
                        classNameBubble2={bubble2}
                    />
                </div>
            </div>
        </>
    )
}