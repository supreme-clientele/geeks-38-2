import React, { useEffect, useState } from 'react';
import TodoList from '../../components/TodoList/TodoList';
import Modal from '../../components/modal/Modal';
import Button from '../../components/button/Button';
import Pagination from '../../components/pagination/Pagination';


const TodoPage = () => {
    const [ show, setShow ] = useState(false);
    const [ input, setInput ] = useState('');
    const handleShow = () => {
        setShow(prev => !prev);
    };

    const handleChange = (event) => {

        setInput(event.target.value);
    };


    const [ todoList, setTodoList ] = useState([]);
    console.log(todoList,'todoList');

    const setLocalstorage =()=> localStorage.setItem('name', JSON.stringify({
        id: 1,
        title: 'HTML',
        complete: false
    }))
    setLocalstorage()
    const getLocalStorage = () => {
        return JSON.parse(localStorage.getItem('name'))
    }

    console.log(getLocalStorage());

    const handleAdd = () => {
        setTodoList(prev=>[...prev,
            {
                id: todoList.length+1,
                title: input,
                complete: false
            }
        ]);
    };

    // useEffect(()=> {
    //     const myLocalStorage = JSON.parse(localStorage.getItem('tasks'))
    //     if (myLocalStorage === null ) {
    //         return localStorage.setItem('tasks', JSON.stringify(todoList))
    //     }
    //     if (myLocalStorage !==0) {
    //         setTodoList(myLocalStorage)
    //     }
    // }, [])
    //
    // useEffect(()=> {
    //     localStorage.setItem('tasks', JSON.stringify(todoList))
    // },[todoList])
    const limit =10;

    const [offset, setOffset] = useState(0)

    const page = Math.floor(offset/limit)+1



    const handlePrev =()=> {
        if (page>1) return setOffset(prev=> prev-limit)

    }
    const handleNext =()=> {
        return setOffset(prev=> prev+limit)
    }

    const getApi =async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_start=${offset}`)
        const data= await response.json()
        console.log(data, 'getAPI');
        return data
    }

    useEffect(()=> {
        getApi().then((data)=> setTodoList(data))
    },[offset])

    const handleDelete = (id) => {
        setTodoList(todoList.filter(todo=>todo.id!==id))
    }
    const handleEdit = (text) => {
        todoList.map(todo => {
            if(text.id === todo.id) return todo.title= text.title
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
    useEffect(()=>{
        console.log('1 useEffect')
    },[show])



    return (
        <>
            <div>Show</div>
            <Button name={'Открыть'} color={'green'} action={handleShow}/>

            <TodoList todoList={todoList} handleDelete={handleDelete} handleEdit={handleEdit} handleDone={handleDone}/>
            {
                show && <Modal handleShow={handleShow} handleChange={handleChange} handleAdd={handleAdd} />
            }
            <Pagination page={page} prev={handlePrev} next={handleNext}/>
             </>
    );
};

export default TodoPage;