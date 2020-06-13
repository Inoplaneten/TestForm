import {formAboutCompany} from './redusers/formAboutCompanyReduser';
import { combineReducers } from 'redux';
const ConnectReducers = combineReducers({
    formAboutCompany
});

export {ConnectReducers as mainReducers}
