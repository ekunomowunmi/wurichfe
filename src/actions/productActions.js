import apis from '../api';
import {GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY} from './types';

export const getProductsByCategory = (category_id) => async (dispatch) => {
    await apis.getProductsByCategory(category_id).then(products => {
        dispatch({
            type: GET_PRODUCTS_BY_CATEGORY,
            payload: products.data.data
        })
    })
};

export const getAllProducts = () => async (dispatch) => {
    await apis.getAllProducts().then(products => {
        dispatch({
            type: GET_PRODUCTS,
            payload: products.data.data,
            // isLoading: false
        })
    })
}