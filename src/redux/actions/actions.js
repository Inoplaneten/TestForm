import {UPDATE_INPUT_TEXT_VALUE, UPDATE_INPUT_FILE, NOVALIDATE_INPUT_VALUE, DEACTIVE_FORM, PREV_FORM, NEXT_FORM, GET_WAIT_FORM, SUCCES_FORM} from '../actionTypes/actionTypes';

export const setUpdateFieldText = (currentValue, inputName) => ({
    type: UPDATE_INPUT_TEXT_VALUE,
    inputName,
    currentValue
});

export const setValidateFieldText = (currentValue, inputName, messageError) => ({
    type: NOVALIDATE_INPUT_VALUE,
    currentValue,
    inputName,
    messageError
});

export const setUpdateFieldFile = (currentValue, inputName) => ({
    type: UPDATE_INPUT_FILE,
    inputName,
    currentValue
});

export const setNextForm = nextForm => ({
    type: NEXT_FORM,
    nextForm
});

export const setPrevForm = prevForm => ({
    type: PREV_FORM,
    prevForm
});

export const setDeactiveForm = currentForm => ({
    type: DEACTIVE_FORM,
    currentForm
}) 

export const setGetWaitForm = currentForm => ({
    type: GET_WAIT_FORM,
    currentForm
})

export const setSuccesForm = () => ({
    type: SUCCES_FORM
});

