import React from 'react';
import './Form.scss';

const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit} className="form" id={props.id}>
            {props.children}
        </form>
    );
};

export { Form };