import React, { Component } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
import Search from './Search';

import '../scss/Component.scss';

import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="px-5">
                <MDBRow>
                    <MDBCol lg="2">
                        <span>
                            <Link className="nav-link waves-effect waves-light font-20px font-weight-400 mt-3" to="/">WuRicH</Link> 
                        </span>
                    </MDBCol>

                    <MDBCol lg="6">
                        <span>
                            <Search />
                        </span>
                    </MDBCol>

                    <MDBCol lg="4">
                        <span className="font-20px font-weight-400">
                            <span>
                                <Link className="nav-link waves-effect waves-light mt-3" to="/sign-up">Sell on WuRich</Link>
                                {/* Sell on WuRich */}
                            </span>

                            <span className="ml-4">
                                <Link className="nav-link waves-effect waves-light mt-3" to="/login">Login/Register</Link>
                            </span>

                            {/* <span>
                                <MDBIcon icon="cart-arrow-down" className="pr-2"/>
                                Cart
                            </span> */}
                        </span>
                    </MDBCol>
                </MDBRow>
            </div>
        )
    }
}

export default Header;