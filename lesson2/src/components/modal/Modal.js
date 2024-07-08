import React from 'react';
import classes from './Modal.module.css';

const Modal = () => {
    return (
        <>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <h1>Modal</h1>
            </div>
        </>
    );
};

export default Modal;