import React from 'react';
import { default as ModalBasicComp } from "./modal";
import ModalBody from '../../atoms/modal-body';
import ModalFooter from '../../atoms/modal-footer';
import ModalHeader from '../../atoms/modal-header';
import { IModalBasicComp, IModalBasic } from './interfaces';

const ModalBasic: IModalBasicComp<IModalBasic> = (props) => <ModalBasicComp {...props} />;
ModalBasic.Header = ModalHeader;
ModalBasic.Body = ModalBody;
ModalBasic.Footer = ModalFooter;

export default ModalBasic;
