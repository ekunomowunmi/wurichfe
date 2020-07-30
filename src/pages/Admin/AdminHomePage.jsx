import React, { Component } from 'react';
import '../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import apis from '../../api';
import AdminSideBar from '../../components/AdminSideBar';
import Routes from '../../routes/route';

class AdminHomePage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <AdminSideBar loggedIn={this.props.loggedIn}/>
              <div className="main-content">
              <Routes/>
              </div>
            </React.Fragment>
         );
    }
}

export default AdminHomePage;