import { GET_CATEGORIES, GET_PRODUCTS_BY_CATEGORY } from '../actions/types';

const initialState = {
    categories: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case GET_PRODUCTS_BY_CATEGORY:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
}