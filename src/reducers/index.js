import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import categoriesReducer from './categoriesReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    categories: categoriesReducer
});