import React, { Component } from 'react';
import '../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from '../../routes/route';
import NavbarPage from '../../components/NavbarPage';

class User extends Component {
    state = {  }
    render() { 
        return ( 
                 <React.Fragment>
                <Router>
                    <>
                    <NavbarPage/>
                    <Routes/>
                    </>

                </Router>


            </React.Fragment>
         );
    }
}

export default User;