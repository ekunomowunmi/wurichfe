import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from './types';

export const registerSeller = (sellerData, history) => dispatch => {
    axios.post('/seller/register', sellerData)
        .then(res => history.push('/login'))
        .catch(err => {
                console.log(err);
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            });
};

export const loginSeller = sellerData => dispatch => {
    axios.post('seller/login', sellerData)
        .then(res => {
            // console.log(res);
            const { token } = res.data;
            localStorage.setItem('jwtToken', token);
            setAuthToken(token);
            const decodedData = jwt_decode(token);
            // console.log(decodedData);
            dispatch(setCurrentSeller(decodedData))
        })
        .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
};

export const setCurrentSeller = decodedData => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedData
    };
};

// User loading
export const setSellerLoading = () => {
    return {
        type: USER_LOADING
    };
};

export const logoutSeller = () => dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthToken(false);
    dispatch(setCurrentSeller({}));
}