import { UPDATE_INPUT_TEXT_VALUE, NOVALIDATE_INPUT_VALUE, DEACTIVE_FORM, PREV_FORM, NEXT_FORM, GET_WAIT_FORM, SUCCES_FORM} from "../actionTypes/actionTypes";
import {isEmpty, isWithinRange} from '../../modules/validators';

const initialState = {
    step: 2,
    name: 'formInfoUser',
    fields: {
        nameUser: {
            type: 'text',
            label: 'Your name',
            placeholder: 'Your name',
            name: 'nameUser',
            value: '',
            requiered: true,
            error: false,
            isErrorMessage: '',
            minLength: 5,
            maxLength: 15,
            validators: {isEmpty, isWithinRange}
        },
        lastNameUser: {
            type: 'text',
            label: 'Your last name',
            placeholder: 'Your lastname',
            name: 'lastNameUser',
            value: '',
            requiered: true,
            error: false,
            isErrorMessage: '',
            minLength: 8,
            maxLength: 15,
            validators: {isEmpty, isWithinRange}
        },
        addressUser: {
            type: 'text',
            label: 'Your address',
            placeholder: 'Your address',
            name: 'addressUser',
            value: '',
            requiered: true,
            error: false,
            isErrorMessage: '',
            minLength: 10,
            maxLength: 20,
            validators: {isEmpty, isWithinRange}
        }
    },
    isActive: false,
    succesForm: false,
    isLoading: false
}

const formInfoUser = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_TEXT_VALUE:
            if(state.isActive) {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            value: action.currentValue,
                            error: false,
                            isErrorMessage: ''
                        }
                    }
                };
            }
            return {
                ...state,
            };     
        case NOVALIDATE_INPUT_VALUE:
            if(state.isActive) {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            value: action.currentValue,
                            error: true,
                            isErrorMessage: action.messageError 
                        }
                    }
                };
            }
            return {
                ...state,
            };
        case PREV_FORM:
            if(action.prevForm === state.step) {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                    },    
                    isActive: true,
                } 
            }
            return {
                ...state,
            };    
        case NEXT_FORM:
            if(action.nextForm === state.step) {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                    },    
                    isActive: true,
                } 
            }
            return {
                ...state,
            };        
        case DEACTIVE_FORM:
            if(action.currentForm === state.step) {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                    },    
                    isActive: false,
                } 
            }
            return {
                ...state,
            };
        case GET_WAIT_FORM:
            if(action.currentForm === state.step) {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                    },    
                    isLoading: true,
                    succesForm: true
                } 
            };
            return {
                ...state,
            };                   
        case SUCCES_FORM:
           return {
               ...state,
               fields: {
                    nameUser: {
                        ...state.fields.nameUser,
                        value: ''
                    },
                    lastNameUser: {
                    ...state.fields.lastNameUser,
                        value: ''
                    },
                    addressUser: {
                        ...state.fields.addressUser,
                        value: ''
                    }
               },
               succesForm: true,
               isActive: false,
               isLoading: false
           }
        default: 
            return state;    
    }
};

export {formInfoUser};