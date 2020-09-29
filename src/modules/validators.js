export const isEmpty = (value, name, setValidate) => {
    if(!value) {
        setValidate(value, name, 'field is required');
        return true;
    }else {
        return false;
    } 
};

export const isWithinRange = (type, value, name, setValidate) => (minLength = 1, maxLength = 5) => {
    if(type === 'number') {
        let numberValue = +value;
        if(numberValue < minLength || numberValue > maxLength || Number.isNaN(numberValue)) {
            setValidate(value, name, `Please enter number from ${minLength} to ${maxLength}`);
            return true; 
        }
    } else if(type === 'text' || type === 'textarea') {
        if(value.length < minLength) {
            setValidate(value, name, `Min length ${minLength} symbol`);
            return true; 
        }else if(value.length > maxLength){
            setValidate(value, name, `Max length ${maxLength} symbol`);
            return true; 
        }
    }else {
        return false;
    }   
};

export const getErrorsForm = (forms, setValidate) => {
    let errorsForm = [];
    forms.forEach(form => {
        if(form.isActive) {
            Object.values(form.fields).forEach(field => {
                if(field.validators) {
                    if(
                        (field.requiered && field.validators.isEmpty(field.value,  field.name, setValidate)) || 
                        (field.validators.isWithinRange(field.type, field.value, field.name, setValidate)(field.minLength, field.maxLength))
                    ) {
                        errorsForm = [...errorsForm, field.name];
                    }
                }
            });
        };
    });

    return errorsForm;
}
