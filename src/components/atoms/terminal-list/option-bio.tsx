import React from 'react';

interface Props {
    items: {
        name: string,
        description: string
    }[];
    activeIndex: number;
}
export default function OptionBio({ items, activeIndex }: Props) {

    return (
        <>
            <p>...........................</p>
            <p>~ {items[activeIndex]?.name}</p>
            <p>~ {items[activeIndex]?.description}</p>
            <p>...........................</p>
        </>
    )
}