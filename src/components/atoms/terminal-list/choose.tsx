import React from 'react';

interface Props {
    items: {
        name: string;
    }[];
    activeOption: number;
    active: string;
}
export default function Choose({ items, activeOption, active }: Props) {

    return (
        <>
            {
                <>
                    <p><code> ~ Choose a project from the list: (use keyboard)</code></p>
                    {
                        items.map((item, index) => (
                            <React.Fragment key={index}>
                                <p>
                                    <code>
                                        <span className={`${(activeOption === index) ? active : ''} px-1`}>
                                            {(activeOption === index) ? <>&gt;&gt;</> : '-'} {item.name}  {(activeOption === index) ? '[Enter]' : null}
                                        </span>
                                    </code>
                                </p>
                            </React.Fragment>
                        ))
                    } </>
            }
        </>
    )
}