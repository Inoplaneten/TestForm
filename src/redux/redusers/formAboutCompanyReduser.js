import { UPDATE_INPUT_TEXT_VALUE, UPDATE_INPUT_FILE, NOVALIDATE_INPUT_VALUE, DEACTIVE_FORM, PREV_FORM, NEXT_FORM, GET_WAIT_FORM, SUCCES_FORM} from "../actionTypes/actionTypes";
import {isEmpty, isWithinRange} from '../../modules/validators';

const initialState = {
    step: 1,
    name: 'formAboutCompany',
    fields: {
        companyName: {
            type: 'text',
            label: 'Your company name',
            placeholder: 'Type text',
            name: 'companyName',
            value: '',
            requiered: false,
            error: false,
            isErrorMessage: '',
            minLength: 5,
            maxLength: 10,
            validators: {isWithinRange}
        },
        numberOfPeople: {
            type: 'number',
            label: 'Number of people',
            placeholder: '1-99',
            name: 'numberOfPeople',
            value: '',
            requiered: true,
            error: false,
            isErrorMessage: '',
            minLength: 1,
            maxLength: 99,
            validators: {isEmpty, isWithinRange}
        },
        bussinesArea: {
            type: 'text',
            label: 'Bussines Area',
            placeholder: 'Design, Marketing, Development, etc',
            name: 'bussinesArea',
            value: '',
            requiered: true,
            error: false,
            isErrorMessage: '',
            minLength: 6,
            maxLength: 8,
            validators: {isEmpty, isWithinRange}
        },
        description: {
            type: 'textarea',
            label: 'Description',
            placeholder: 'Description',
            name: 'description',
            value: '',
            requiered: true,
            error: false,
            isErrorMessage: '',
            minLength: 10,
            maxLength: 50,
            validators: {isEmpty, isWithinRange}
        },
        uploadFiles: {
            type: 'file',
            name: 'uploadFiles',
            requiered: false,
            error: false,
            isErrorMessage: '',
            quantity: 0,
            minLength: 1,
            maxLength: 10
        }
    },
    isActive: true,
    succesForm: false,
    isLoading: false
}

const formAboutCompany = (state = initialState, action) => {
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
        case UPDATE_INPUT_FILE: 
            if(state.isActive) {
                return {
                    ...state,
                    fields: {
                        ...state.fields,
                        [action.inputName]: {
                            ...state.fields[action.inputName],
                            quantity: action.currentValue,
                        }
                    }
                };
            };
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
            };
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
            };
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
            };
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
                    succesForm: true,
                } 
            }
            return {
                ...state,
            };                           
        case SUCCES_FORM:
           return {
               ...state,
               fields: {
                    companyName: {
                        ...state.fields.companyName,
                        value: ''
                    },
                    numberOfPeople: {
                    ...state.fields.numberOfPeople,
                        value: ''
                    },
                    bussinesArea: {
                        ...state.fields.bussinesArea,
                        value: ''
                    },
                    description: {
                        ...state.fields.description,
                        value: ''
                    },
                    uploadFiles: {
                        ...state.fields.uploadFiles,
                        quantity: 0
                    } 
               },
               succesForm: true
           }
        default: 
            return state;    
    }
};

export {formAboutCompany};