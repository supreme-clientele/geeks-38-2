// rsc
import React from 'react';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import User from "../../components/user/User";
import Schools from "../../components/schools/Schools";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <h1>MainPage</h1>
            <User name={'Murat'} age={37} email={'murat.bukarbaev@gmail.com'}/>

            <Schools schoolName={'Geeks'} description={'Международная IT-академия'} address={'БЦ Victory, улица Ибраимова, 103, Бишкек'}/>

            <Footer/>
        </div>
    );
};

export default MainPage;