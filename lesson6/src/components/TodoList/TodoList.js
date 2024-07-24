import React, { useState } from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.css';


const TodoList = ({ todoList, handleDelete, handleEdit, handleDone }) => {
    const [currenEdit, setCurrentEdit] = useState('')
    console.log(currenEdit,'currenEdit');
    return (
        <ul className={classes.ul}>
            {
                todoList.map(todo => <Todo
                    key={todo.id}
                    todo={todo}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handleDone={handleDone}
                    handleCurrentEdit={setCurrentEdit}
                    isEdit={currenEdit===todo.id}
                />)
            }
        </ul>
    );
};

export default TodoList;