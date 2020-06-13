import { UPDATE_INPUT_VALUE, NOVALIDATE_INPUT_VALUE, SUCCES_INPUT_VALUE} from "../actionTypes";

const initialState = {
    companyName: {
        type: 'text',
        label: 'Your company name',
        placeholder: 'Type text',
        valueName: 'companyName',
        value: '',
        requiered: false,
        error: false,
        isErrorText: 'Min lenght 5 symbol',
        minLength: 5,
        maxLength: 15
    },
    numberOfPeople: {
        type: 'text',
        label: 'Number of people',
        placeholder: '1-99',
        valueName: 'numberOfPeople',
        value: '',
        requiered: true,
        error: false,
        isErrorText: 'This field in required',
        minLength: 1,
        maxLength: 99
    },
    bussinesArea: {
        type: 'text',
        label: 'Bussines Area',
        placeholder: 'Design, Marketing, Development, etc',
        valueName: 'bussinesArea',
        value: '',
        requiered: true,
        error: false,
        isErrorText: 'This field in required',
        minLength: 6,
        maxLength: 25
    },
    description: {
        type: 'textarea',
        label: 'Description',
        placeholder: 'Description',
        valueName: 'description',
        value: '',
        requiered: true,
        error: false,
        isErrorText: 'This field in required',
        minLength: 10,
        maxLength: 50
    },
    uploadFiles: {
        type: 'file',
        valueName: 'uploadFiles',
        requiered: false,
        error: false,
        quantity: 0,
        minLength: 1,
        maxLength: 10
    }
}

const formAboutCompany = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_INPUT_VALUE:
            switch(action.inputName) {
                case 'uploadFiles':
                    return {
                        ...state,
                        [action.inputName]: {
                            ...state[action.inputName],
                            quantity: action.currentValue,
                        }
                    };
                default: 
                    return {
                        ...state,
                        [action.inputName]: {
                            ...state[action.inputName],
                            value: action.currentValue,
                            error: false
                        }
                    };    
            };
        case NOVALIDATE_INPUT_VALUE:
            return {
                ...state,
                [action.inputName]: {
                    ...state[action.inputName],
                    value: action.currentValue,
                    error: true,
                    isErrorText: action.messageError,
                }
            };
        case SUCCES_INPUT_VALUE:
           return {
               ...state,
               companyName: {
                   ...state.companyName,
                   value: ''
               },
               numberOfPeople: {
                ...state.numberOfPeople,
                    value: ''
                },
                bussinesArea: {
                    ...state.bussinesArea,
                    value: ''
                },
                description: {
                    ...state.description,
                    value: ''
                },
                uploadFiles: {
                    ...state.uploadFiles,
                    quantity: 0
                }
           }
        default: 
            return state;    
    }
};

export {formAboutCompany};