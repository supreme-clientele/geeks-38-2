import React from 'react';
import classes from './Modal.module.css';
import Button from "../button/Button";

const Modal = ({handleShow}) => {
    console.log(handleShow, 'handleShow');
    return (
        <>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button name={'Закрыть'} action={handleShow} color={'blue'}/>
                <h1>Modal</h1>
            </div>
        </>
    );
};

export default Modal;