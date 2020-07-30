import React, { Component } from 'react';
import '../scss/AdminSideBar.scss';
import { MDBContainer } from 'mdbreact';
import {Link} from 'react-router-dom';
class AdminSideBar extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
          <>
              <div className="sidebar-fixed">
                  <span className="side-link list-group-item-action "> <Link className="nav-link waves-effect waves-light" to="/">Home</Link></span>
                  <span className="side-link list-group-item-action "> <Link className="nav-link waves-effect waves-light" to="/products">Products</Link></span>
                  <span className="side-link list-group-item-action "><Link className="nav-link waves-effect waves-light" to="/products">Categories</Link></span>
                  <span className="side-link list-group-item-action ">Logout</span>
              </div>
              {/* <div className="main-content">
                  fdnkjfd f jffkjfkj fd bjffkjfds
              </div> */}
          </>

            </React.Fragment>
         );
    }
}
 
export default AdminSideBar;