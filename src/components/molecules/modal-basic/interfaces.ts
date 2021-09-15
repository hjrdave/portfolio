/*
    Content Container Interfaces
*/


import ModalHeader from '../../atoms/modal-header';
import ModalFooter from '../../atoms/modal-footer';
import ModalBody from '../../atoms/modal-body';

export interface IModalBasic {
    show: boolean;
    onHide: () => void;
    title?: string | JSX.Element | JSX.Element[];
    size?: 'sm' | 'lg' | 'md' | 'xl';
    children?: any;
    dialogClassName?: string,
    centered?: boolean;
    [key: string]: any;
}

export interface IModalBasicComp<P> {
    (props: IModalBasic): JSX.Element;
    Header: typeof ModalHeader;
    Body: typeof ModalBody;
    Footer: typeof ModalFooter;
}