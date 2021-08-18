import React from 'react';
import Section from './../../atoms/section';
import SkewedBorder from '../../atoms/skewed-border';
import { compContainer } from './skillSection.module.scss';

export default function SkillSection() {

    return (
        <>
            <div>
                <SkewedBorder left dark style={{ marginTop: '100px' } as any} />
                <div style={{ marginTop: '-100px' }}>
                    <Section dark className={compContainer}>
                        <p>This is the Skill Section</p>
                    </Section>
                </div>
                <div style={{ marginTop: '-100px' }}>
                    <SkewedBorder dark />
                </div>

            </div>
        </>
    )
}