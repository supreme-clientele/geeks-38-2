// rsc
import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";
import School from "../../components/school/School";
import Example from "../../components/example/Example";
import Button from "../../components/button/Button";
import Count from "../../components/count/Count";
import Modal from "../../components/modal/Modal";
import Input from "../../components/input/Input";

const MainPage = () => {
    const [show, setShow] = useState(false);
    const [input, setInput] = useState('');

    const handleShow = (action) => {
        setShow(action === 'open');
    }

    const handleSave = () => {
        console.log('Save нажат');
    };

    const handleDelete = () => {
        console.log('Delete нажат');
    };

    const handleEdit = () => {
        console.log('Edit нажат');
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    }

    return (
        <div>
            <Header text={'red'}/>
            {/*<Header text={'blue'}/>*/}
            {
                show && <Modal handleShow={handleShow}/>
            }
            <h1>{input}</h1>
            <input type="text" onChange={handleChange}/>
            <Input onChange={handleChange} placeholder={'Введите текст'}/>
            <div>Show</div>
            <Button name={'Открыть'} color={'green'} action={handleShow}/>
            {/*<div>*/}
            {/*    <Button*/}
            {/*        handleShow={handleShow}*/}
            {/*        handleSave={handleSave}*/}
            {/*        handleDelete={handleDelete}*/}
            {/*        handleEdit={handleEdit}*/}
            {/*    />*/}
            {/*</div>*/}

            <Footer/>
        </div>
    );
};

export default MainPage;