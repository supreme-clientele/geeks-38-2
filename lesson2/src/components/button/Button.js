import React from 'react';
import classes from './button_module.css';

const Button = ({name}) => {
    return (
        <button className={'btn'}>{name}</button>
    );
};

export default Button;