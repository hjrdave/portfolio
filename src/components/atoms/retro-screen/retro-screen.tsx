import React from 'react';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import { compContainer, outer, inner, stripped } from './retroScreen.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
}
export default function RetroScreen({ children }: Props) {

    return (
        <>
            <div className={compContainer}>
                <div className={`${outer} d-flex justify-content-center align-items-center`}>
                    <div className={`${inner}`}>
                        <GlitchClip onHover={true} duration={4000} >
                            <div className={`p-4 ${stripped}`}>
                                {children}
                            </div>
                        </GlitchClip>
                    </div>
                </div>
            </div>
        </>
    )
}