import React from 'react';
import { animatedThumbnail, thumbnail } from './imageBioPiece.module.scss';

interface Props {
    image: string;
    noAnimation?: boolean;
    noPadding?: boolean;
    info: { [key: string]: any };
    onClick?: (url: string, info: { [key: string]: any }) => void;
}
export default function ImageBioPiece({ image, noAnimation, noPadding, onClick, info }: Props) {

    return (
        <>
            <div className={`${animatedThumbnail} ${(noPadding) ? '' : 'p-2'}`}>
                <img
                    src={image}
                    className={(noAnimation) ? '' : thumbnail}
                    width={'100%'}
                    style={{ animationDelay: '1.05s' }}
                    onClick={() => (onClick) ? onClick(image, info) : null}
                />
            </div>
        </>
    )
}