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
    console.log(input,'input');
    return (
        <>
            <li className={`${classes.li} ${todo.complete && classes.done}`}>
                <div className={classes.info}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </div>
                <div className={classes.btns}>
                    <button onClick={()=>handleCurrentEdit(todo.id)}>Edit</button>
                    <button onClick={()=>handleDone(todo.id)}>Done</button>
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
                    }}>save</button>
                    <button>cancel</button>
                </div>
            }
        </>
    );
};

export default Todo;