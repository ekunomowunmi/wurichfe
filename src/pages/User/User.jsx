import React, { Component } from 'react';
import '../../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Routes from '../../routes/route';
import NavbarPage from '../../components/NavbarPage';
import Header from '../../components/Header';
import Footer from '../../components/footer';
import HomePage from '../HomePage';
import { connect } from 'react-redux';

class User extends Component {
    state = {  }
    render() { 
        const { auth } = this.props;
        return ( 
            <>
                <Header />
                <NavbarPage />
                {/* {!auth.isAuthenticated && <Header />}
                {!auth.isAuthenticated && <NavbarPage />} */}

                <HomePage />
                {/* <Routes /> */}

                <Footer />
                {/* {!auth.isAuthenticated && <Footer />} */}
            </>
         );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps)(User);
// export default User;