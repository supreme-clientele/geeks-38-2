import React from 'react';
import Button from "../button/Button";
import classes from "./Pagination.module.css";

const Pagination = ({prev, next, page}) => {
    return (
        <div className={classes.pagination}>
            <Button name = {'Prev'} action={prev}/>
            <p>{page}</p>
            <Button name = {'Next'} action={next}/>
        </div>
    );
};

export default Pagination;