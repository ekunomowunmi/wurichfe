import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginSeller }  from '../actions/authActions';
import classnames from 'classnames';

import '../scss/Component.scss';

class LoginFormPage extends Component {

  initialState = {
    email: '',
    password: '',
    errors: {}
  }
  state = this.initialState;

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/admin-homepage');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/admin-homepage');
      // this.props.history.push('/admin/homepage');
      // this.props.history.push('/products');
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
        [name] : value
      });
  }

  handleSubmit = (e) => {
      const { email, password } = this.state;
      e.preventDefault();
      // if ( !email, !password ) {
      //   return;
      // }

      const sellerData = {
        email,
        password
      }
      // console.log(sellerData);
      this.props.loginSeller(sellerData);
      // this.setState(this.initialState)
  }
  
  render() {
    const { email, password, errors } = this.state;

    return (
      <div className="d-flex justify-content-center align-items-center vh100">
        <MDBContainer>
          <MDBRow>
            <MDBCol md="4" className="mx-auto">
              <h6 className="text-uppercase mb-4"><Link style={{color: 'black'}} to="/"><MDBIcon className="mr-3" icon="long-arrow-alt-left" />Back To Home</Link></h6>

              <form onSubmit={this.handleSubmit}>
                <h4><span className="font-weight-bold">Login</span> below</h4>
                <p>Don't have an account? <Link to="/sign-up"> Register</Link></p>
                <div className="grey-text mt-4">
                  <div>
                    <MDBInput value={email} name="email" onChange={this.handleChange} label="Type your email" icon="envelope" group type="email" error={errors.email} className={classnames("", {invalid: errors.email || errors.emailnotfound})} />
                    <span className="red-text">{errors.email} {errors.emailnotfound}</span>
                  </div>
                  <div>
                    <MDBInput value={password} name="password" onChange={this.handleChange} label="Type your password" icon="lock" group type="password" error={errors.password} className={classnames("", {invalid: errors.password || errors.passwordincorrect})} />
                    <span className="red-text">{errors.password} {errors.passwordincorrect}</span>
                  </div>
                </div>
                <div className="text-center">
                  <MDBBtn onClick={this.handleSubmit} color="primary">Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

LoginFormPage.propTypes = {
  loginSeller: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginSeller }
)(LoginFormPage);