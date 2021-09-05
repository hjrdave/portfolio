import React from 'react';
import Typed from 'react-typed';
//import useKeyPress from '../../../hooks/use-key-press';
import Choose from './choose';
import StartProgram from './start-program';
import LoadingData from './loading-data';
import OptionList from './option-list';
import OptionBio from './option-bio';
import { compContainer, active } from './terminalList.module.scss';

interface Props {
    items: {
        name: string,
        description: string
    }[];
}
export default function TerminalList({ items }: Props) {

    //const endRef = React.useRef(null);
    const ref = React.useRef(null);
    const [terminalHistory, setTerminalHistory] = React.useState<any[]>([]);
    const [activeOption, setActiveOption] = React.useState<number>(-1);
    const [activeIndex, setActiveIndex] = React.useState(-1);
    const [startProgram, setStartProgram] = React.useState(false);
    const [runProgram, setRunProgram] = React.useState(false);
    const [loadData, setLoadData] = React.useState(false);
    const [currentEvent, setCurrentEvent] = React.useState<React.KeyboardEvent>();

    const itemCount = items.length;

    const scrollToBottom = (e: React.KeyboardEvent) => {
        if (ref.current) {
            (ref.current as any).scroll({ top: (ref.current as any).scrollHeight, behavior: 'smooth' });
        }
    }

    const onKeyDown = (e: React.KeyboardEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!startProgram) {
            if (e.key === 'Enter') {
                setStartProgram(true);
                setTimeout(() => setRunProgram(true), 4000);
            }
        }
        else if (runProgram) {
            if (e.key === 'ArrowUp') {
                if (activeOption !== -1) {
                    setActiveOption(activeOption - 1);
                }
            }
            else if (e.key === 'ArrowDown') {
                if ((activeOption - 1) !== itemCount) {
                    setActiveOption(activeOption + 1);
                }
            }
            else if (e.key === 'Enter') {

                setTimeout(() => {
                    setCurrentEvent(e);
                    setTerminalHistory([...terminalHistory, 'list']);
                    setLoadData(true);
                    scrollToBottom(e);
                }, 0);

            }
        }

    }

    React.useEffect(() => {
        console.log(activeOption)
        if (loadData) {
            setTimeout(() => {
                setLoadData(false);
                setTerminalHistory([...terminalHistory, 'loading', (activeOption)]);
                if (currentEvent) {
                    scrollToBottom(currentEvent);
                }
            }, 4000);
        }
    }, [loadData]);

    return (
        <>
            <div ref={ref} className={`${compContainer}`} tabIndex={0} onKeyDown={(e) => onKeyDown(e)}>
                <p>Press [Enter] to Start Program</p>
                {
                    (startProgram) ? <StartProgram /> : null
                }
                {
                    terminalHistory.map((type, index) => (
                        <React.Fragment key={index}>
                            {
                                (type === 'loading') ?
                                    <p>Loading Data......</p> :
                                    (type === 'list') ?
                                        <OptionList
                                            items={items}
                                        /> :
                                        <OptionBio
                                            items={items}
                                            activeIndex={type}
                                        />
                            }
                        </React.Fragment>
                    ))
                }
                {
                    (runProgram && !loadData) ?
                        <Choose
                            items={items}
                            activeOption={activeOption}
                            active={active}
                        />
                        : null
                }
                {
                    (loadData) ? <LoadingData /> : null
                }
            </div>
        </>
    )
}