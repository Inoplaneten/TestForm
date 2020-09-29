import React from 'react';
import classes from './ButtonForm.module.scss';

const ButtonForm = props => {
    return (
        <button type={props.type} onClick={props.onClick} className={classes.btnForm}>{props.name}</button>
    )
}

export {ButtonForm};