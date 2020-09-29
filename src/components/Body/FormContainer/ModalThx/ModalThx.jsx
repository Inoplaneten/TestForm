import React from 'react';
import classes from './ModalThx.module.scss';

const ModalThx = () => {
    return (
        <div className={classes.modalWrapper}>
            <div className={classes.modalThx}>
                <p>Спасибо!</p>
                <p>С вами свяжуться в ближайшее время</p>
            </div>
        </div>
    )
};

export { ModalThx }