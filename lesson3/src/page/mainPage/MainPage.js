import React, { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import User from '../../components/user/User';
import School from '../../components/school/School';
import Example from '../../components/example/Example';
import Button, { Button2 } from '../../components/button/Button';
import Count from '../../components/count/Count';
import Modal from '../../components/modal/Modal';
import Input from '../../components/input/Input';
import TodoList from '../../components/TodoList/TodoList';


const MainPage = () => {
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
        setTodoList(prev=> [...prev,
            {
                id: todoList.length +1,
                title: input
            }
        ]);
    };

    const handleDelete = (id) => {
        console.log('handleDelete');
        console.log(id);
    }
    const handleEdit = () => {
        console.log('handleEdit');
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
        <div>
            <Header text={'red'}/>
            <TodoList todoList={todoList} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
            {
                show && <Modal handleShow={handleShow} handleChange={handleChange} handleAdd={handleAdd} />
            }
            <div>Show</div>
            <Button name={'Открыть'} color={'green'} action={handleShow}/>

            <Footer/>
        </div>
    );
};

export default MainPage;