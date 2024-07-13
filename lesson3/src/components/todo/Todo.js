import React from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';

const Todo = ({ todo, handleDelete, handleEdit, handleDone }) => {
    const { id, title, complete } = todo;

    const handleDoneClick = () => {
        handleDone(id);
    };

    return (
        <li className={`${classes.li} ${complete ? classes.done : ''}`}>
            <div className={classes.info}>
                <p>{id}</p>
                <p>{title}</p>
            </div>
            <div className={classes.btns}>
                <Button name="Edit" action={() => handleEdit(id)} className={complete ? 'done' : ''} />
                <Button name="Done" action={handleDoneClick} className={complete ? 'done' : ''} />
                <Button name="Delete" action={() => handleDelete(id)} className={complete ? 'done' : ''} />
            </div>
        </li>
    );
};

export default Todo;
