import React from 'react';
import Button from '../button/Button';
import classes from './Pagination.module.css';


const Pagination = ({prev, next, page}) => {
    return (
        <div className={classes.pagination}>
            <Button name={'Prev'} action={prev} color={'green'}/>
            <p>{page}</p>
            <Button name={'Next'} action={next} color={'green'}/>
        </div>
    );
};

export default Pagination;