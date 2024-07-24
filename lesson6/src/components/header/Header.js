import React from 'react';
import Title from '../title/Title';
import classes from './header.module.css';


const Header = ({text}) => {
    return (
        <>
       <Title name={'Header'}/>
        <div style={{backgroundColor: text}} >{text}</div>
        </>
    );
};

export default Header;