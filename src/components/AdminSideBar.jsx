import React, { Component } from 'react';
import '../scss/AdminSideBar.scss';
import { MDBContainer } from 'mdbreact';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutSeller } from '../actions/authActions';
class AdminSideBar extends Component {
    state = {  }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutSeller();
    }

    render() { 
        return ( 
          <>
              <div className="sidebar-fixed">
                  <span className="side-link list-group-item-action "> <Link className="nav-link waves-effect waves-light" to="/">Home</Link></span>
                  <span className="side-link list-group-item-action "> <Link className="nav-link waves-effect waves-light" to="/products">Products</Link></span>
                  <span className="side-link list-group-item-action "><Link className="nav-link waves-effect waves-light" to="/products">Categories</Link></span>
                  <span onClick={this.onLogoutClick} className="side-link list-group-item-action ">Logout</span>
              </div>
              {/* <div className="main-content">
                  fdnkjfd f jffkjfkj fd bjffkjfds
              </div> */}
          </>
         );
    }
}

AdminSideBar.propTypes = {
    logoutSeller: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}
 
const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutSeller }
)(AdminSideBar);