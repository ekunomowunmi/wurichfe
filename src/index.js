import React, { Component } from "react";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const element = <h1>Hello World</h1>;
// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>, document.getElementById("root"));
console.log(element);
