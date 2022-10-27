import React from 'react';
import { Modal } from 'react-bootstrap';
import { compContainer } from './modalHeader.module.scss';

interface Props {
    children?: any;
    className?: string;
    title?: string | JSX.Element | JSX.Element[];
    titleIcon?: any;
    [key: string]: any;
}

function ModalHeader({ children, className, title, titleIcon, ...props }: Props) {

    return (
        <>
            <Modal.Header
                {...props}
                className={`${compContainer} ${className}`}
            >
                {
                    (title || titleIcon) ?
                        <Modal.Title className={'h5'}>
                            {titleIcon} {title}
                        </Modal.Title> : children
                }

            </Modal.Header>
        </>
    )
}

ModalHeader.displayName = 'ModalHeader';
export default ModalHeader;
