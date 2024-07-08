// rsc
import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";
import Schools from "../../components/schools/Schools";
import Example from "../../components/example/Example";
import Button from "../../components/button/Button";

const MainPage = () => {

    const [show, setShow] = useState(false);

    console.log(show, 'в начале')

    const handleShow = () => {
        setShow(true)
    }


    return (
        <div>
            <Header/>
            <h1>MainPage</h1>
            <div>Show</div>
            <button></button>
            {
                show && <div>Modal window</div>
            }
            <User name={'Murat'} age={37} email={'murat.bukarbaev@gmail.com'}/>

            <Schools schoolName={'Geeks'} description={'Международная IT-академия'} address={'БЦ Victory, улица Ибраимова, 103, Бишкек'}/>
            <Example title={Example}>
                <p style={{color: 'red'}}>name: Bakyt</p>
                <p style={{color: 'blue'}}>name: Bakyt</p>
                <p style={{color: 'green'}}>name: Bakyt</p>
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