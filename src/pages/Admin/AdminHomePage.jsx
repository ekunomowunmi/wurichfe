import React, { Component } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutSeller } from '../../actions/authActions';
import { MDBBtn } from 'mdbreact';
import '../../scss/Component.scss';
import AdminSideBar from '../../components/AdminSideBar';

// import '../../App.css';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import apis from '../../api';
// import AdminSideBar from '../../components/AdminSideBar';
// import Routes from '../../routes/route';

class AdminHomePage extends Component {
    state = {  }

    onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutSeller();
    }

    render() { 
        return ( 
            <>
              <div className="vh60 d-flex justify-content-center align-items-center">
                <div>
                  <h1>AdminHomePage</h1>
                  <MDBBtn onClick={this.onLogoutClick} color="primary">Logout</MDBBtn>
                </div>
              </div>
              <AdminSideBar />
            </>

            // <React.Fragment>
            // <AdminSideBar loggedIn={this.props.loggedIn} />
            //   <div className="main-content">
            //     <Routes />
            //   </div>
            // </React.Fragment>
         );
    }
}

AdminHomePage.propTypes = {
  logoutSeller: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutSeller }
)(AdminHomePage);