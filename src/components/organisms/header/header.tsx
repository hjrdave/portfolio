import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { compContainer, socialContainer } from './header.module.scss';

export default function Header() {

    return (
        <>
            <header className={`${compContainer} p-3`}>
                <div className='d-flex justify-content-center align-items-center'>
                    <div className={socialContainer}>
                        <a href='https://github.com/hjrdave' target='_blank'><i className="fab fa-github pe-3"></i></a>
                        <a href='https://www.linkedin.com/in/hjrdave/' target='_blank'><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </header>
        </>
    )
}