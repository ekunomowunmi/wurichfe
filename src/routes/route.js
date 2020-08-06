import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductList, ProductCreate, HomePage, AdminHomePage, LoginFormPage, SignupFormPage, User } from '../pages';
import PageNotFound from '../pages/PageNotFound';

import PrivateRoute from '../components/private-route/PrivateRoute';

export default function Routes() {
    return(
           <Switch>
                    {/* <Route path="/" exact component = {HomePage} /> */}
                    <Route path="/" exact component = {User} />
                    <Route path="/products" component = {ProductList} />
                    {/* <Route path="/admin/product/create" component = {ProductCreate} /> */}
                    {/* <Route path="/admin/homepage" component = {AdminHomePage} /> */}
                    <Route path="/sign-up" component = {SignupFormPage} />
                    <Route path="/login" component = {LoginFormPage} />

                    {/* <Route path="/admin-homepage" component = {AdminHomePage} /> */}
                    <PrivateRoute path='/admin-homepage' component={AdminHomePage} />

                    <Route component = {PageNotFound} />
            </Switch>
    )
}