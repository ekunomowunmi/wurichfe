import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
import categoriesReducer from './categoriesReducer';
import productReducer from './productReducers';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    categories: categoriesReducer,
    products: productReducer
});