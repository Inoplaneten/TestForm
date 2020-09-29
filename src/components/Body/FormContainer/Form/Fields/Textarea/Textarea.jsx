import React from 'react';
import classes from './Textarea.module.scss';

const Textarea = props => (
    <textarea
        name={props.name}
        value={props.value} 
        placeholder={props.placeholder} 
        onChange={props.onUpdateValueText}
        onBlur={props.onTouchedEmpty}
        className={`${classes.fieldTextarea} ${props.error ? classes.error : ''}`}
    />
);

export {Textarea};