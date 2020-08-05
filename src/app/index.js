import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from '../routes/route';
import NavbarPage from '../components/NavbarPage';
// import { AdminHomePage, User } from '../pages';
import { User } from '../pages';
import AdminSideBar from '../components/AdminSideBar';
import Header from '../components/Header';
import Footer from '../components/footer';

import { Provider, connect } from 'react-redux';
import store from '../store';

import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';
import { setCurrentSeller, logoutSeller } from '../actions/authActions';
import PrivateRoute from '../components/private-route/PrivateRoute';
import AdminHomePage from '../pages/Admin/AdminHomePage';

if (localStorage.jwtToken) {
    const token = localStorage.jwtToken;
    setAuthToken(token);
    const decodedData = jwt_decode(token);
    console.log(decodedData);
    store.dispatch(setCurrentSeller(decodedData));

    const currentTime = Date.now() / 1000;
    console.log(currentTime);
    // if (1596430274.601 < currentTime) {
    if (decodedData.exp < currentTime) {
        store.dispatch(logoutSeller());
        window.location.href = './login';
    }
}

class App extends Component {
    render() {
        // console.log(store.getState());
        // const auth = store.getState().auth;
        // console.log(auth);

        return (
            <Provider store={store}>
                <Router>
                    <>
                        <Routes />
                    </>
                </Router>
            </Provider>
         );
    }
}

export default App;