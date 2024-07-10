import React from 'react';
import classes from './Modal.module.css';

const Modal = ({handleShow}) => {
    console.log(handleShow, 'handleShow');
    return (
        <>
            <div className={classes.modalWrapper} onClick={handleShow} />
            <div className={classes.modalContent}>
                <button onClick={handleShow}>Закрыть</button>
                <h1>Modal</h1>
            </div>
        </>
    );
};

export default Modal;