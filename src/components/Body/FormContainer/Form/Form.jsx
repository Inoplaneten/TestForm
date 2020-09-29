import React from 'react';
import { NumberingForms } from '../NumberingForms/NumberingForms';
import { Fields } from '../Form/Fields/Fields';
import { ButtonForm } from '../Form/ButtonForm/ButtonForm';
import { ModalThx } from '../ModalThx/ModalThx';
import { getErrorsForm } from '../../../../modules/validators';
import classes from './Form.module.scss';

const Form = ({forms, setValidateFieldText, setDeactiveForm, setPrevForm, setNextForm, setGetWaitForm, setSuccesForm, ...props}) => {
    let formsArray = Object.values(forms);
    const onSubmitHadler = event => {
        event.preventDefault();
        if(!getErrorsForm(formsArray, setValidateFieldText).length) {
            console.log(getDataForms(formsArray));
            setTimeout( ()=> {
                setGetWaitForm(formsArray.length);
            }, 800)
            setTimeout( ()=> {
                setSuccesForm();
                setNextForm(1);
            }, 2500)
        }
    };
    const onNextForm = step => {
        if(!getErrorsForm(formsArray, setValidateFieldText).length) {
            setDeactiveForm(step);
            formsArray.forEach(form => {
                if(form.step === step + 1) {
                    setNextForm(form.step);
                }
            });
        }
    };
    const onPrevForm = step => {
        setDeactiveForm(step);
        formsArray.forEach(form => {
            if(form.step === step - 1) {
                setPrevForm(form.step);
            }
        });
    };
    const getDataForms = forms => {
        let dataForms = [];
        forms.forEach(form => {
            dataForms = Object.values(form.fields).reduce((fields, field) => {
                if(field.type === 'file') {
                    return [...fields, {[field.name]: field.quantity}]
                }
                return [...fields, {[field.name]: field.value}];
            }, [...dataForms])
        });
        return dataForms;
    };

    return (
        <>
            <NumberingForms quantityForms={formsArray}/>
            {formsArray.map((form, index) => {
                if(form.isActive) {
                    return (
                        <form onSubmit={form.step === formsArray.length ? onSubmitHadler: null} key={index} name={form.name} className={`${classes.form} ${form.isActive ? classes.active : ''}`} id={`form-${index + 1}`}>
                            <Fields forms={forms} setValidateFieldText={setValidateFieldText} {...props}/> 
                            {form.step !== formsArray.length ? 
                            <ButtonForm type='button' name='Next' onClick={()=> onNextForm(form.step)} /> :
                            <>
                                <ButtonForm type='button' name='Prev' onClick={()=> onPrevForm(form.step)} />
                                <ButtonForm type='submit' name='Submit'/> 
                            </>}
                        </form>
                    )
                } 
                return null;
            })}
            {formsArray.map((form, index) => {
                if(form.isLoading && form.step === formsArray.length) {
                    return (
                        <ModalThx key={index}/>
                    )
                }
                return null;
            })}
        </>
    );
};

export { Form };