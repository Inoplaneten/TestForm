import React from 'react';
import classes from './NumberingForms.module.scss'

const NumberingForms = ({quantityForms}) => {
    return (
        <ul className={classes.numberingForms}>
            {quantityForms.map( form => (
                <li key={form.step} className={classes.numberingForms__item}>
                    <span className={`${classes.numberingForms__count} ${form.isActive ? classes.active : ''}`}>
                        {form.step}
                    </span>
                </li>
            ))}
        </ul>
    )
}

export {NumberingForms};