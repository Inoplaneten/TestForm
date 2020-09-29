import {Form} from './Form/Form';
import { setUpdateFieldText, setUpdateFieldFile, setValidateFieldText, setDeactiveForm, setPrevForm, setNextForm, setGetWaitForm, setSuccesForm} from '../../../redux/actions/actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    forms : {
        formAboutCompany: {
            step: state.formAboutCompany.step,
            name: state.formAboutCompany.name,
            fields: state.formAboutCompany.fields,
            isActive: state.formAboutCompany.isActive,
            succesForm: state.formAboutCompany.succesForm,
            isLoading: state.formAboutCompany.isLoading
        },
        formInfoUser: {
            step: state.formInfoUser.step,
            name: state.formInfoUser.name,
            fields: state.formInfoUser.fields,
            isActive: state.formInfoUser.isActive,
            succesForm: state.formInfoUser.succesForm,
            isLoading: state.formInfoUser.isLoading
        }
    }
});

const mapDispatchToProps = {
    setUpdateFieldText,
    setUpdateFieldFile,
    setValidateFieldText,
    setDeactiveForm,
    setPrevForm,
    setNextForm,
    setGetWaitForm,
    setSuccesForm
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(Form);

export default FormContainer;