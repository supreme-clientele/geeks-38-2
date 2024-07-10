import React from 'react';
import classes from './button.module.css';

const Button = ({ handleShow, handleSave, handleDelete, handleEdit  }) => {
    return (
        <div className={classes.buttonContainer}>
            <button onClick={() => handleShow('open')}>Открыть</button>
            <button onClick={() => handleShow('close')}>Закрыть</button>

            <button className={classes.saveButton} onClick={handleSave}>Save</button>
            <button className={classes.deleteButton} onClick={handleDelete}>Delete</button>
            <button className={classes.editButton} onClick={handleEdit}>Edit</button>

        </div>
    );
};

export default Button;