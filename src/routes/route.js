import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductList, ProductCreate, HomePage, LoginFormPage, SignupFormPage } from '../pages';

export default function Routes() {
    return(
           <Switch>
                    <Route path="/" exact component = {HomePage} />
                    <Route path="/products" component = {ProductList} />

                    {/* <Route path="/admin/homepage" exact component = {AdminHomePage} /> */}
                    <Route path="admin/product/create" component = {ProductCreate} />

                    <Route path="/sign-up" component = {SignupFormPage} />
                    <Route path="/login" component = {LoginFormPage} />
            </Switch>
    )
}