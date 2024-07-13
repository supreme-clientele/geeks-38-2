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
    const [search, setSearch] = useState('');
    const handleShow = () => {
        setShow(prev => !prev);
    };

    const handleChange = (event) => {
        console.log(event.target.value);
        setInput(event.target.value);
    };


    const [ tasks, setTasks ] = useState([
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
    console.log(tasks,'tasks');

    const handleAdd = () => {
        setTasks(prev=> [...prev,
            {
                id: tasks.length +1,
                title: input
            }
        ]);
    };

    const handleDelete = (id) => {
        setTasks(prev => prev.filter(todo => todo.id !== id));
        console.log('handleDelete');
        console.log(id);
    }
    const handleEdit = (id) => {
        console.log('handleEdit');
    }

    const handleDone = (id) => {
        setTasks(prev => prev.map(task =>
            task.id === id ? { ...task, complete: !task.complete } : task
        ));
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <Header text={'red'} />
            <Input type="text" placeholder="Поиск задач" onChange={handleSearchChange} />
            <TodoList
                todoList={filteredTasks}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleDone={handleDone}
            />
            {show && <Modal handleShow={handleShow} handleChange={handleChange} handleAdd={handleAdd} />}
            <Button name={'Открыть'} color={'green'} action={handleShow} />
            <Footer />
        </div>
    );
};

export default MainPage;