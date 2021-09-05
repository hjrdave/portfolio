import React from 'react';

interface Props {
    items: {
        name: string
    }[]
}
export default function OptionList({ items }: Props) {

    return (
        <>
            <p> ~ Choose a project from the list: (use keyboard)</p>
            {
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        <p>
                            <span className={`px-1`}>
                                - {item.name}
                            </span>
                        </p>
                    </React.Fragment>
                ))
            }
        </>
    )
}