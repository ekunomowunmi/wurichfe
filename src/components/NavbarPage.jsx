import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,  MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBListGroup, MDBListGroupItem,
} from "mdbreact";
import {Link} from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <React.Fragment>
    <MDBNavbar className="p-3 px-5" color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text d-block d-sm-block d-md-none"><Link className="nav-link waves-effect waves-light" to="/">WuRicH</Link> </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
          <MDBNavItem className="mr-5">
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="bars" />
                  <span className="mr-2 ml-3">Browse Categories</span>
                </MDBDropdownToggle>
                {/* <MDBDropdownMenu>
                  <MDBDropdownItem href="/product/create">New Product</MDBDropdownItem>
                  <MDBDropdownItem href="#!">ff Action</MDBDropdownItem>
                </MDBDropdownMenu> */}
                <MDBDropdownMenu>
                  <MDBListGroup style={{ width: "20rem" }}>

                    <MDBListGroupItem href="#">Cras justo odio <MDBIcon icon="angle-right" className="float-right"/>
                      {/* <MDBDropdownMenu>
                        <MDBListGroup style={{ width: "20rem" }}>
                          <MDBListGroupItem href="#" hover>Dapibus ac facilisis in <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                          <MDBListGroupItem href="#" hover>Morbi leo risus <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                          <MDBListGroupItem href="#" hover>Porta ac consectetur ac <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                          <MDBListGroupItem href="#" disabled>Vestibulum at eros <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                          <MDBListGroupItem href="#">Cras justo odio <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                        </MDBListGroup>
                      </MDBDropdownMenu> */}
                    </MDBListGroupItem>

                    <MDBListGroupItem href="#" hover>Dapibus ac facilisis in <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>Morbi leo risus <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>Porta ac consectetur ac <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#" disabled>Vestibulum at eros <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#">Cras justo odio <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>Dapibus ac facilisis in <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>Morbi leo risus <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#" hover>Porta ac consectetur ac <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                    <MDBListGroupItem href="#" disabled>Vestibulum at eros <MDBIcon icon="angle-right" className="float-right"/></MDBListGroupItem>
                  </MDBListGroup>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem active>
              <Link className="nav-link waves-effect waves-light" to="/">Home</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link waves-effect waves-light" to="/products">Products</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link waves-effect waves-light" to="#!">Other Stuff1</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link waves-effect waves-light" to="#!">Other Stuff2</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link waves-effect waves-light" to="#!">Other Stuff3</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link waves-effect waves-light" to="#!">Other Stuff4</Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link waves-effect waves-light" to="#!">Other Stuff5</Link>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          </MDBNavbarNav>

          <MDBNavbarNav right>
          <MDBNavItem>
              <MDBDropdown dropleft>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
              <Link className="nav-link waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </Link>
            </MDBNavItem>
            <MDBNavItem>
              <Link  className="nav-link waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </Link>
            </MDBNavItem>
          </MDBNavbarNav>

        </MDBCollapse>
      </MDBNavbar>
    </React.Fragment>
    );
  }
}

export default NavbarPage;