import React from 'react';
import { Modal } from 'react-bootstrap';
import { compContainer } from './modalFooter.module.scss';
interface Props {
    children?: any;
    className?: string;
    [key: string]: any;
}

function ModalFooter({ children, className, ...props }: Props) {

    return (
        <>
            <Modal.Footer
                {...props}
                className={`${compContainer} ${className}`}
            >
                {children}
            </Modal.Footer>
        </>
    )
}

ModalFooter.displayName = 'ModalFooter';
export default ModalFooter;