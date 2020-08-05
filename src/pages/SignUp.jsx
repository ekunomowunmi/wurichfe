import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from 'mdbreact';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { registerSeller } from '../actions/authActions';
import classnames from 'classnames';

import '../scss/Component.scss';

class SignupFormPage extends Component {

  initialState = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    password2: '',
    errors: {}
  }
  state = this.initialState;

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/admin-homepage');
    }
  }

  componentWillReceiveProps(nextProps) {
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
      // setUser(user => ({ ...user, [name]: value }));
  };

  handleSubmit = (e) => {
      const { name, phoneNumber, email, password, password2 } = this.state;
      e.preventDefault();
      // if (!name, !phoneNumber, !email, !password, !password2) {
      //   return;
      // }
      const newSeller = {
        name,
        phoneNumber,
        email,
        password,
        password2
      }
      console.log(newSeller);

      this.props.registerSeller(newSeller, this.props.history);
      // this.setState(this.initialState)
  };

  render() {
    const { name, phoneNumber, email, password, password2, errors } = this.state;

    return (
      <div className="d-flex justify-content-center align-items-center vh100">
        {/* <MDBContainer className="mt-5"> */}
        <MDBContainer className="">
          <MDBRow>
            <MDBCol className="mx-auto" md="6">
              <h6 className="text-uppercase mb-4"><Link style={{color: 'black'}} to="/"><MDBIcon className="mr-3" icon="long-arrow-alt-left" />Back To Home</Link></h6>

              <form  onSubmit={this.handleSubmit}>
                <h4><span className="font-weight-bold">Register</span> below</h4>
                <p>Already have an account? <Link to="/login"> Login</Link></p>
                <div className="grey-text mt-4">
                  <div>
                    <MDBInput value={name} name="name" onChange={this.handleChange} label="Name" icon="user" group type="text" error={errors.name} className={classnames('', {invalid: errors.name})} />
                    <span className="red-text">{errors.name}</span>
                  </div>
                  <div>
                    <MDBInput value={email} name="email" onChange={this.handleChange} label="Email" icon="envelope" group type="email" error={errors.email} className={classnames('', {invalid: errors.email})} />
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div>
                    <MDBInput value={phoneNumber} name="phoneNumber" onChange={this.handleChange} label="Phone number" icon="phone-alt" group type="text" error={errors.phoneNumber} className={classnames('', {invalid: errors.phoneNumber})} />
                    <span className="red-text">{errors.phoneNumber}</span>
                  </div>
                  <div>
                    <MDBInput value={password} name="password" onChange={this.handleChange} label="Password" icon="lock" group type="password" error={errors.password} className={classnames('', {invalid: errors.password})} />
                    <span className="red-text">{errors.password}</span>
                  </div>
                  <div>
                    <MDBInput value={password2} name="password2" onChange={this.handleChange} label="Confirm password" icon="exclamation-triangle" group type="password" error={errors.password2} className={classnames('', {invalid: errors.password2})} />
                    <span className="red-text">{errors.password2}</span>
                  </div>
                </div>
                <div className="text-center">
                  <MDBBtn onClick={this.handleSubmit} color="primary">Register</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    )
  }
}

SignupFormPage.propTypes = {
  registerSeller: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerSeller }
)(withRouter(SignupFormPage));