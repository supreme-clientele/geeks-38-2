import React from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';


const Todo = ({ todo, handleDelete, handleEdit, handleDone}) => {
    return (
        <li className={classes.li}>
            <div className={classes.info}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
            </div>
            <div className={classes.btns}>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={()=>handleDone(todo.id)}>Done</button>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </div>

        </li>
    );
};

export default Todo;