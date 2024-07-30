import React from 'react';
import classes from './Example.module.css';


const Example = ({title, children}) => {
    return (
        <div>
            <p>title: {title}</p>
            <button className={classes.btn}>Save</button>
            {children}
        </div>
    );
};

export default Example;