import {formAboutCompany} from './redusers/formAboutCompanyReduser';
import {formInfoUser} from './redusers/formInfoUserReduser';
import { combineReducers, createStore } from 'redux';
const сonnectReducers = combineReducers({
    formAboutCompany,
    formInfoUser
});

let store = createStore(сonnectReducers);

window.store = store;

export default store;
