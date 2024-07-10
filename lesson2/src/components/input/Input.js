import React from 'react';
import input from "./Input";

const Input = ({type = 'text', placeholder, onChange}) => {
    return (
        <input type={type} placeholder={placeholder} onChange={onChange}/>
    );
};

export default Input;