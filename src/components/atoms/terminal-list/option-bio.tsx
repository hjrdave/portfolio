import React from 'react';

interface Props {
    items: {
        name: string,
        description: string | JSX.Element
    }[];
    activeIndex: number;
}
export default function OptionBio({ items, activeIndex }: Props) {

    return (
        <>
            <p><code className={'text-warning'}>...........................</code></p>
            <p><code className={'text-info'}>~ {items[activeIndex]?.name}</code></p>
            <p><code className={'text-info'}>~ {items[activeIndex]?.description}</code></p>
            <p><code className={'text-warning'}>...........................</code></p>
        </>
    )
}