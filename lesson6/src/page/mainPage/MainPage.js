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



    return (
        <div>
            <Header text={'red'}/>


            <Footer/>
        </div>
    );
};

export default MainPage;