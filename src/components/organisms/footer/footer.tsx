import React from 'react';
import { socialContainer } from './footer.module.scss';

export default function Footer() {

    const year = new Date().getFullYear()

    return (
        <>
            <footer className={`d-flex-column pt-5`}>
                <h1 className='text-center'>Find Me On</h1>
                <div className={`d-flex justify-content-center pb-5`}>
                    <div className={socialContainer}>
                        <a href='https://github.com/hjrdave' target='_blank'><i className="fab fa-github px-4"></i></a>
                        <a href='https://www.linkedin.com/in/hjrdave/' target='_blank'><i className="fab fa-linkedin px-4"></i></a>
                    </div>
                </div>
                <p className={'mb-1 align-self-end text-center'}><small>&copy;Copyright {year} David Sanders</small></p>
            </footer>
        </>
    )
}