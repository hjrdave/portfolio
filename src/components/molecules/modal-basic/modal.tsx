import React from "react";
import { Modal } from 'react-bootstrap';
import ModalFooter from '../../atoms/modal-footer';
import { useNonInitialEffect } from '../../../hooks/use-non-initial-mount-effect';
import { IModalBasic } from './interfaces';
import { modal, animation, open, backdrop, close } from './modalBasic.module.scss';

function ModalBasic({ show, onHide, size, title, titleIcon, dialogClassName, backdropClassName, centered, children, ...props }: IModalBasic) {

  const [openAnimation, setOpenAnimation] = React.useState(false);

  useNonInitialEffect(() => {
    if (show === true) {
      setOpenAnimation(true);
    }
    else if (show === false) {
      setOpenAnimation(false);
    }
  }, [show]);

  return (
    <>
      <Modal
        centered={(centered !== undefined) ? centered : true}
        //size={(size) ? size : 'xl' as any}//For some reason 'md' causes build to fail so had to make type generic
        size={'lg'}
        animation={false}
        show={show}
        dialogClassName={`${modal} ${animation} ${(openAnimation) ? open : ''} ${dialogClassName}`}
        backdropClassName={`${backdrop} ${(openAnimation) ? '' : close} ${backdropClassName}`}
        onHide={() => {
          setTimeout(() => {
            setOpenAnimation(false);
          }, 0)
          setTimeout(() => {
            onHide();
          }, 300)
        }}
        {...props}
      >

        {
          React.Children.map(children, (child) => {
            return (child.type?.displayName === 'ModalHeader') ? child : null
          })
        }
        <div className={'d-flex'}>
          {
            React.Children.map(children, (child) => {
              return (child.type?.displayName !== 'ModalFooter' && child.type?.displayName !== 'ModalHeader') ? child : null
            })
          }
        </div>
        {
          React.Children.map(children, (child) => {
            return (child.type?.displayName === 'ModalFooter') ? child : null
          })
        }
      </Modal>
    </>
  )
}

export default ModalBasic;
