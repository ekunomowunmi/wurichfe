import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ProductList, ProductCreate, HomePage } from '../pages';

export default function Routes() {
    return(
           <Switch>
                    <Route path="/" exact component = {HomePage} />
                    <Route path="/products" exact component = {ProductList} />
                    <Route path="/product/create" exact component = {ProductCreate} />

            </Switch>
    )
}