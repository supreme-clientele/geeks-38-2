import React from 'react';
import classes from './button.module.css';


export const Button2 = ({name}) => {
    return (
     <button className={classes.btn}>{name}</button>
    );
};
const Button = ({name, action, color}) => {
    return (
     <button className={`${classes.btn} ${classes[color]}`} onClick={action} >{name}</button>
    );
};

export default Button;