import React from 'react';

interface Props {
    items: {
        name: string
    }[]
}
export default function OptionList({ items }: Props) {

    return (
        <>
            <p><code> ~ Choose a project from the list: (use keyboard)</code></p>
            {
                items.map((item, index) => (
                    <React.Fragment key={index}>
                        <p>
                            <code>
                                <span className={`px-1`}>
                                    - {item.name}
                                </span>
                            </code>
                        </p>
                    </React.Fragment>
                ))
            }
        </>
    )
}