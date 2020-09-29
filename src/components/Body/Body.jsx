import React from 'react';
import FormContainer from './FormContainer/FormContainer';
const Body = () => {
    return (
        <section className="sectionForms">
            <div className="container">
                <h1 className="title-section">
                    Your first project
                </h1>
                <FormContainer/>
            </div>
        </section>
    );
};

export { Body };