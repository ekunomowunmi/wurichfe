import apis from '../api';
import { GET_CATEGORIES } from './types';

export const getAllCategories =  () => async (dispatch) => {
    await apis.getAllCategories().then(categories => {
        dispatch({
            type: GET_CATEGORIES,
            payload: categories.data.data,

        })
    })
};
