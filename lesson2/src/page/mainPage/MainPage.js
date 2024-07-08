// rsc
import React, {useState} from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";
import School from "../../components/school/School";
import Example from "../../components/example/Example";
import Button, {Button2} from "../../components/button/Button";
import Count from "../../components/count/Count";
import Modal from "../../components/modal/Modal";

const MainPage = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(prev => !prev)
    }


    return (
        <div>
            <Header/>
            <Modal/>
            <Count/>
            <h1>MainPage</h1>
            <div>Show</div>
            <button onClick={handleShow}>Открыть</button>
            {
                show && <div style={{backgroundColor: 'red'}}>Modal window</div>
            }
            <User name={'Murat'} age={37} email={'murat.bukarbaev@gmail.com'}/>
            <School title={'KSTU'}/>
            <Example title={'Example'}>
                <p style={{color: 'red'}}>name: Baiaman</p>
                <p style={{color: 'blue'}}>name: Baiaman</p>
                <p style={{color: 'green'}}>name: Baiaman</p>
                <p>name: Bakyt</p>
                <Button name={'Save'}/>
                <Button name={'Edit'}/>
                <Button name={'Delete'}/>
            </Example>

            <Footer/>
        </div>
    );
};

export default MainPage;