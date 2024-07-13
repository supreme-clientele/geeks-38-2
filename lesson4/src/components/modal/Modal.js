import React from 'react';
import classes from './Modal.module.css';
import Button from '../button/Button';
import Input from '../input/Input';


const Modal = ({handleShow, handleChange, handleAdd}) => {
    return (
        <>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <Button name={"Закрыть"} action={handleShow} color={'blue'}/>
                <Input onChange={handleChange} placeholder={'Напишите текст '} />
                <Button name={'ADD'} action={handleAdd} color={'green'}/>
                <h1>Modal</h1>

            </div>
        </>
    );
};

export default Modal;