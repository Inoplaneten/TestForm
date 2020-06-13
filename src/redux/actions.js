import {UPDATE_INPUT_VALUE, NOVALIDATE_INPUT_VALUE, SUCCES_INPUT_VALUE} from './actionTypes';

export const getInputValueUpdate = (currentValue, inputName) => ({
    type: UPDATE_INPUT_VALUE,
    inputName,
    currentValue,
});

export const getValidate = (currentValue, inputName, messageError) => ({
    type: NOVALIDATE_INPUT_VALUE,
    currentValue,
    inputName,
    messageError,
});

export const getInputValueSucces = () => ({
    type: SUCCES_INPUT_VALUE,
});

