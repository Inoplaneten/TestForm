import React from 'react';
import classes from './InputText.module.scss';

const InputText = props => {
    return    (
        <input
            type="text"  
            name={props.name}
            value={props.value}
            placeholder={props.placeholder} 
            onChange={props.onUpdateValueText}
            onBlur={props.onTouchedEmpty}
            className={`${classes.fieldText} ${props.error ? classes.error : ''}`}
        />
    )
};

export {InputText};