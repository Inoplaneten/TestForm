import React from 'react';
import { Form } from '../Form/Form';
import { useRef  } from 'react';
import { NumberingForms } from '../NumberingForms/NumberingForms'
import { Fields } from '../Fields/Fields';
import {ButtonSubmit} from '../ButtonSubmit/ButtonSubmit';
import { getInputValueUpdate, getInputValueSucces, getValidate } from '../../redux/actions';
import { connect } from 'react-redux';
const Body = ({form1, onUpdate, onSucces, onValidate}) => {

    const inputRef = useRef();

    const validators = (value, inputName, messageError) => (minLength = 1, maxLength = 5) => {
        if(value.length < minLength && value !== '' ) {
            messageError = `Min length ${minLength} symbol`;
            onValidate(value, inputName, messageError)
        }else if(value.length > maxLength && !inputName.includes('number')) {
            messageError = `Max length ${maxLength} symbol`;
            onValidate(value, inputName, messageError)
        } else if(inputName.includes('number')) {
            let numberValue = +value;
            if(numberValue < minLength || numberValue > maxLength || Number.isNaN(numberValue)) {
                messageError = `Please enter number from ${minLength} to ${maxLength}`;
                onValidate(value, inputName, messageError);
            }
        } else if(value === '') {
            onValidate(value, inputName, messageError);
        }
    };

    const validatesForm = data => {
        let valide = true;
        Object.values(data).forEach(field => {
            (field.value === '' || field.error === true) && (valide = false);
        });
        return valide;
    };

    const submitHandle = (form, data) => {
        form.preventDefault();
        if(!validatesForm(data)) {
            Object.values(data).forEach(field => {
                (field.value === '' || field.error === true) && onValidate(field.value, field.valueName, field.isErrorText);
            });
        } else {
            for (let inputName in data) {
                data[inputName].type !== 'file' &&
                console.log(inputName + ':' + data[inputName].value );
            };
            onSucces();
        }
    };

    const inputHandle = (value, inputName, messageError, minLength, maxLength) => {
        onUpdate(value, inputName, messageError);
        validators(value, inputName, messageError)(minLength, maxLength);
    };

    return(
        <section className="sectionForms">
            <div className="container">
                <h1 className="title-section">
                    Your first project
                </h1>
                <NumberingForms/>
                <Form
                        onSubmit={event => submitHandle(event, form1)}
                        id={'form-1'}
                    >
                    {Object.values(form1).map((field, index) => (
                        <Fields
                            key={index}
                            type={field.type}
                            nameLabel={field.label}
                            placeholder={field.placeholder}
                            valueName={field.valueName}
                            inputHandle={ 
                                event => inputHandle( field.type ==='file' ? event.target.files.length : 
                                event.target.value, event.target.name, field.isErrorText, field.minLength, field.maxLength) 
                            }
                            inputValue={field.value}
                            inputRef={inputRef}
                            numberOfFiles={field.type ==='file' && field.quantity}
                            requiered={field.requiered ? 'requiered' : ''}
                            classNameError={field.error ? 'error' : ''}
                        >
                        {field.error && 
                            <span className="error-message">{field.isErrorText}</span>
                        }
                        </Fields>    
                    ))}
                    <ButtonSubmit/>
                </Form>
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    form1: {
        companyName: {
            type: state.formAboutCompany.companyName.type,
            label: state.formAboutCompany.companyName.label,
            placeholder: state.formAboutCompany.companyName.placeholder,
            valueName: state.formAboutCompany.companyName.valueName,
            value: state.formAboutCompany.companyName.value,
            requiered: state.formAboutCompany.companyName.requiered,
            error: state.formAboutCompany.companyName.error,
            isErrorText: state.formAboutCompany.companyName.isErrorText,
            minLength: state.formAboutCompany.companyName.minLength,
            maxLength: state.formAboutCompany.companyName.maxLength
        },
        numberOfPeople: {
            type: state.formAboutCompany.numberOfPeople.type,
            label: state.formAboutCompany.numberOfPeople.label,
            placeholder: state.formAboutCompany.numberOfPeople.placeholder,
            valueName: state.formAboutCompany.numberOfPeople.valueName,
            value: state.formAboutCompany.numberOfPeople.value,
            requiered: state.formAboutCompany.numberOfPeople.requiered,
            error: state.formAboutCompany.numberOfPeople.error,
            isErrorText: state.formAboutCompany.numberOfPeople.isErrorText,
            minLength: state.formAboutCompany.numberOfPeople.minLength,
            maxLength: state.formAboutCompany.numberOfPeople.maxLength
        },
        bussinesArea: {
            type: state.formAboutCompany.bussinesArea.type,
            label: state.formAboutCompany.bussinesArea.label,
            placeholder: state.formAboutCompany.bussinesArea.placeholder,
            valueName: state.formAboutCompany.bussinesArea.valueName,
            value: state.formAboutCompany.bussinesArea.value,
            requiered: state.formAboutCompany.bussinesArea.requiered,
            error: state.formAboutCompany.bussinesArea.error,
            isErrorText: state.formAboutCompany.bussinesArea.isErrorText,
            minLength: state.formAboutCompany.bussinesArea.minLength,
            maxLength: state.formAboutCompany.bussinesArea.maxLength
        },
        description: {
            type: state.formAboutCompany.description.type,
            label: state.formAboutCompany.description.label,
            placeholder: state.formAboutCompany.description.placeholder,
            valueName: state.formAboutCompany.description.valueName,
            value: state.formAboutCompany.description.value,
            requiered: state.formAboutCompany.description.requiered,
            error: state.formAboutCompany.description.error,
            isErrorText: state.formAboutCompany.description.isErrorText,
            minLength: state.formAboutCompany.description.minLength,
            maxLength: state.formAboutCompany.description.maxLength
        },
        uploadFiles: {
            type: state.formAboutCompany.uploadFiles.type,
            valueName: state.formAboutCompany.uploadFiles.valueName,
            error: state.formAboutCompany.uploadFiles.error,
            quantity: state.formAboutCompany.uploadFiles.quantity,
            minLength: state.formAboutCompany.uploadFiles.minLength,
            maxLength: state.formAboutCompany.uploadFiles.maxLength
        }
    }
});

const mapDispatchToProps = dispatch => ({
    onUpdate:  (value, inputName) => dispatch(getInputValueUpdate(value, inputName)),
    onSucces: () => dispatch(getInputValueSucces()),
    onValidate: (value, inputName, messageError) => dispatch(getValidate(value, inputName, messageError))
});

const ConnectBody = connect(mapStateToProps, mapDispatchToProps)(Body);

export { ConnectBody as Body };