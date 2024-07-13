import React from 'react';
import Todo from '../todo/Todo';
import classes from './TodoList.module.css';


const TodoList = ({ todoList, handleDelete, handleEdit, handleDone }) => {
    return (
        <ul className={classes.ul}>
            {
                todoList.map(task => <Todo key={task.id} todo={task} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>)
            }
        </ul>
    );
};

export default TodoList;