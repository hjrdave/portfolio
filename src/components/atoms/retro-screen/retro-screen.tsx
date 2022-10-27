import React from 'react';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import { compContainer, outer, inner, stripped, buttonContainer, btn, badgeContainer } from './retroScreen.module.scss';

interface Props {
    children?: JSX.Element | JSX.Element[];
}
export default function RetroScreen({ children }: Props) {

    return (
        <>
            <div className={compContainer}>
                <div className={`d-flex justify-content-center ${badgeContainer}`}>
                    <div className={` ms-4`}>
                        <p>Skill O` Vision</p>
                    </div>
                </div>
                <div className={`${outer} d-flex justify-content-center align-items-center`}>
                    <div className={`${inner}`}>
                        <GlitchClip onHover={true} duration={4000} >
                            <div className={`p-4 ${stripped}`}>
                                {children}
                            </div>
                        </GlitchClip>
                    </div>
                </div>
                <div className={`d-flex justify-content-between ${buttonContainer}`}>
                    <div className={`${btn} ms-4`}></div>
                    <div className={`${btn} me-4`}></div>
                </div>
            </div>
        </>
    )
}