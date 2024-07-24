import React from 'react';


const Input = ({ type='text', placeholder, onChange }) => {
    return (
        <input type={type} onChange={onChange} placeholder={placeholder}/>
    );
};

export default Input;