// rsc
import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <h1>MainPage</h1>
            <User name={'Murat'} age={37} email={'murat.bukarbaev@gmail.com'}/>
            <Footer/>
        </div>
    );
};

export default MainPage;