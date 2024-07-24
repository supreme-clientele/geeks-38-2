import React, { useState } from 'react';
import classes from './Todo.module.css';
import Button from '../button/Button';


const Todo = ({
    todo,
    handleDelete,
    handleEdit,
    handleDone,
    handleCurrentEdit,
    isEdit
}) => {
    const [input, setInput] = useState(todo.title)
    return (
        <>
        <li className={`${classes.li} ${todo.complete && classes.done}`}>
            <div className={classes.info}>
                <p>{todo.id}</p>
                <p>{todo.title}</p>
            </div>
            <div className={classes.btns}>
                <button onClick={()=>handleCurrentEdit(todo.id)}>Edit</button>
                <button onClick={()=>handleDone(todo.id)}>DOne</button>
                <button onClick={()=>handleDelete(todo.id)}>Delete</button>
            </div>

        </li>
            {
                isEdit && <div className={classes.edit}>
                    <input type="text"
                           value={input}
                    onChange={event => setInput(event.target.value)}
                    />
                    <button onClick={()=> {
                        handleEdit(
                            {
                                ...todo, title:input
                            }
                        )
                        handleCurrentEdit('')
                    }}>save</button>
                    <button onClick={()=>handleCurrentEdit('')}>cancel</button>
                </div>
            }
        </>
    );
};

export default Todo;