import React from 'react';
import Typed from 'react-typed';
import Choose from './choose';
import StartProgram from './start-program';
import LoadingData from './loading-data';
import OptionList from './option-list';
import OptionBio from './option-bio';
import { compContainer, active } from './terminalList.module.scss';

interface Props {
    items: {
        name: string,
        description: string | JSX.Element
    }[];
}
export default function TerminalList({ items }: Props) {

    //const endRef = React.useRef(null);
    const ref = React.useRef(null);
    const [terminalHistory, setTerminalHistory] = React.useState<any[]>([]);
    const [activeOption, setActiveOption] = React.useState<number>(-1);
    const [startProgram, setStartProgram] = React.useState(false);
    const [runProgram, setRunProgram] = React.useState(false);
    const [loadData, setLoadData] = React.useState(false);
    const [currentEvent, setCurrentEvent] = React.useState<React.KeyboardEvent>();
    const [focused, setFocused] = React.useState(false);

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
                setFocused(false)
                setTimeout(() => setRunProgram(true), 3000);
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
            }, 3000);
        }
    }, [loadData]);

    return (
        <>
            <div ref={ref} className={`${compContainer} p-4`} tabIndex={0} onKeyDown={(e) => onKeyDown(e)} onFocus={() => setFocused(true)}>
                <p><code>Press [Enter] to Start Program{(focused) ? <Typed loop strings={['']} typeSpeed={275} /> : null}</code></p>
                {
                    (startProgram) ? <StartProgram /> : null
                }
                {
                    terminalHistory.map((type, index) => (
                        <React.Fragment key={index}>
                            {
                                (type === 'loading') ?
                                    <code className={"text-info"}>Loading Data......</code> :
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