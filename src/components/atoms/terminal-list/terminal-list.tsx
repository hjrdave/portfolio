import React from 'react';
import Typed from 'react-typed'; s
import useKeyPress from '../../../hooks/use-key-press';
import { compContainer, active } from './terminalList.module.scss';

interface Props {
    items: string[];
}
export default function TerminalList({ items }: Props) {

    const [activeOption, setActiveOption] = React.useState('');
    //useKeyPress();

    return (
        <>
            <div className={`${compContainer}`} on={() => alert('foo')}>
                <p> ~ Choose a project from the list:<Typed strings={[""]} typeSpeed={60} loop /></p>
                {
                    items.map((item, index) => (
                        <React.Fragment key={index}>
                            <p><span className={`${(activeOption === item) ? active : ''} px-2`}>&gt;&gt; {item}</span></p>
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}