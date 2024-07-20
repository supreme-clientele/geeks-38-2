import React, { useState } from 'react';
import classes from './Todo.module.css';

const Todo = ({
                  todo,
                  handleDelete,
                  handleEdit,
                  handleDone,
                  handleCurrentEdit,
                  isEdit
              }) => {
    const [input, setInput] = useState(todo.title);

    return (
        <>
            <li className={`${classes.li} ${todo.complete && classes.done}`}>
                <div className={classes.info}>
                    <p>{todo.id}</p>
                    <p>{todo.title}</p>
                </div>
                <div className={classes.btns}>
                    <button onClick={() => handleCurrentEdit(todo.id)}>Edit</button>
                    <button onClick={() => handleDone(todo.id)}>Done</button>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            </li>
            {
                isEdit && <div className={classes.edit}>
                    <input
                        type="text"
                        value={input}
                        onChange={event => setInput(event.target.value)}
                    />
                    <button onClick={() => {
                        handleEdit({ ...todo, title: input });
                        handleCurrentEdit('');  // Закрывает блок редактирования при нажатии Save
                    }}>Save</button>
                    <button onClick={() => handleCurrentEdit('')}>Cancel</button> {/* Закрывает блок редактирования при нажатии Cancel */}
                </div>
            }
        </>
    );
};

export default Todo;
