import { GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORY } from '../actions/types';

const initialState = {
    products: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
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
