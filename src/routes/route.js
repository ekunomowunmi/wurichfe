import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductList, ProductCreate, HomePage, AdminHomePage, LoginFormPage, SignupFormPage } from '../pages';

export default function Routes() {
    return(
           <Switch>
                    <Route path="/" exact component = {HomePage} />
                    <Route path="/products" exact component = {ProductList} />
                    <Route path="/admin/product/create" exact component = {ProductCreate} />
                    <Route path="/admin/homepage" exact component = {AdminHomePage} />
                    <Route path="/sign-up" exact component = {SignupFormPage} />
                    <Route path="/login" exact component = {LoginFormPage} />
            </Switch>
    )
}