import React, { useState } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import Modal from '../../components/modal/Modal';
import Button from '../../components/button/Button';


const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ input, setInput ] = useState('');
    const handleShow = () => {
        setShow(prev => !prev);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    };


    const [ todoList, setTodoList ] = useState([
            {
                id: 1,
                title: 'HTML',
                complete: false
            },
            {
                id: 2,
                title: 'CSS',
                complete: false
            },
            {
                id: 3,
                title: 'JS',
                complete: false
            }
        ]
    );
    console.log(todoList,'todoList');

    const handleAdd = () => {
        setTodoList(prev=>[...prev,
            {
                id: todoList.length+1,
                title: input,
                complete: false
            }
        ]);
    };

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo=>todo.id!==id))
    }
    const handleEdit = (text) => {
        todoList.map(todo => {
            if(text.id === todo.id) return todo.title = text.title
        })
        setTodoList([...todoList])
    }
    const handleDone = (id) => {
        console.log(id);
        todoList.map(todo=> {
            console.log(todo.id);
            if(todo.id===id) {
                return todo.complete=!todo.complete
            }
        })
        setTodoList([...todoList])
    }
    return (
        <>
            <TodoList todoList={todoList} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
            {
                show && <Modal handleShow={handleShow} handleChange={handleChange} handleAdd={handleAdd} />
            }
            <div>Show</div>
            <Button name={'Открыть'} color={'green'} action={handleShow}/>
        </>
    );
};

export default TodoPage;