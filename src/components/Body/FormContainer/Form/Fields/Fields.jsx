import React from 'react';
import {InputText} from '../Fields/InputText/InputText';
import {InputFile} from '../Fields/InputFile/InputFille';
import {Textarea} from '../Fields/Textarea/Textarea';
import classes from './Fields.module.scss';

const Fields = props => {
    return (
        <>
            {Object.values(props.forms).map(form => (
                form.isActive &&
                Object.values(form.fields).map((field, index) => {
                    const onUpdateValueText = event => {
                        props.setUpdateFieldText(event.target.value, event.target.name);
                    };

                    const onUpdateQuantityFile = event => {
                        props.setUpdateFieldFile(event.target.files.length, event.target.name);
                    };
                
                    const onTouchedEmpty = event => {
                        field.validators && field.validators.isWithinRange(field.type, event.target.value, event.target.name, props.setValidateFieldText)(field.minLength, field.maxLength);
                    };
                    return (
                        field.type === 'text' || field.type === 'number'?
                        <div className={`${classes.inputBox}`} key={index}>
                            <label className={`${classes.labelForm} ${field.requiered ? classes.requiered : '' }`}>{field.label}</label>
                            <InputText 
                                name={field.name} 
                                value={field.value} 
                                placeholder={field.placeholder} 
                                onUpdateValueText={onUpdateValueText} 
                                onTouchedEmpty={onTouchedEmpty} 
                                error={field.error}
                            /> 
                            {field.error &&  <span className={`${classes.errorMessage}`}>{field.isErrorMessage}</span>}
                        </div>:
                        field.type === 'textarea' ?
                        <div className={`${classes.inputBox}`} key={index}>
                            <label className={`${classes.labelForm} ${field.requiered ? classes.requiered : '' }`}>{field.label}</label>
                            <Textarea 
                                name={field.name} 
                                value={field.value} 
                                placeholder={field.placeholder} 
                                onUpdateValueText={onUpdateValueText} 
                                onTouchedEmpty={onTouchedEmpty}
                                error={field.error}
                            />
                            {field.error &&  <span className={`${classes.errorMessage}`}>{field.isErrorMessage}</span>}
                        </div>:
                        field.type === 'file' ?
                        <div className={`${classes.inputBox}`} key={index}>
                            <InputFile name={field.name} numberOfFiles={field.quantity} updateFile={onUpdateQuantityFile}/>
                            {field.error &&  <span className={`${classes.errorMessage}`}>{field.isErrorMessage}</span>}
                        </div>:
                        null
                    )
                })
            ))}
        </>
    );
};

export { Fields };