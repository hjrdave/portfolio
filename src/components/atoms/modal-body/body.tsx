import React from 'react';
import { Modal } from 'react-bootstrap';
import { compContainer } from './modalBody.module.scss';

interface Props {
    children?: any;
    className?: string;
    [key: string]: any;
}

export default function ModalBody({ children, className, ...props }: Props) {

    return (
        <>
            <Modal.Body
                {...props}
                className={`${compContainer} ${className}`}
            >
                {children}
            </Modal.Body>
        </>
    )
}