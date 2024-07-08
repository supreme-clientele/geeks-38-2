import React from 'react';
import classes from './button.module.css';

export const Button2 = ({name}) => {
    return (
        <button className={classes.btn}>{name}</button>
    );
};

const Button = ({name}) => {
    return (
        <button className={classes.btn}>{name}</button>
    );
};

export default Button;