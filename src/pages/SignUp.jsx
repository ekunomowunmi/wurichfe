import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom';


class SignupFormPage extends Component {

  initialState = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    submitted: false
  }

  state = this.initialState;

  handleChange = (e) => {
      const { name, value } = e.target;
      console.log(e.target.name, ' ', e.target.value);

      this.setState({
        [name] : value
      });

      // setUser(user => ({ ...user, [name]: value }));
  }

  handleSubmit = (e) => {
      const { name, phoneNumber, email, password, confirmPassword } = this.state;
      e.preventDefault();
      if (!name, !phoneNumber, !email, !password, !confirmPassword) {
        return;
      }
      console.log(this.state);
      this.setState({
        submitted: !this.state.submitted
      })

      this.setState(this.initialState)
  }

  render() {
    const { name, phoneNumber, email, password, confirmPassword } = this.state;

    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol className="mx-auto" md="6">
            <h6 className="text-uppercase mb-4"><Link style={{color: 'black'}} to="/"><MDBIcon className="mr-3" icon="long-arrow-alt-left" /></Link>Back To Home</h6>

            <form onSubmit={this.handleSubmit}>
              {/* <p className="h2 text-center mb-4">Sign up</p> */}
              <h4><span className="font-weight-bold">Register</span> below</h4>
              <p>Already have an account? <Link to="/login"> Login</Link></p>
              <div className="grey-text mt-4">
                <MDBInput value={name} name="name" onChange={this.handleChange} label="Name" icon="user" group type="text" validate error="wrong" success="right" />
                <MDBInput value={email} name="email" onChange={this.handleChange} label="Email" icon="envelope" group type="email" validate error="wrong" success="right" />
                <MDBInput value={phoneNumber} name="phoneNumber" onChange={this.handleChange} label="Phone number" icon="phone-alt" group type="text" validate error="wrong" success="right" />
                <MDBInput value={password} name="password" onChange={this.handleChange} label="Password" icon="lock" group type="password" validate />
                <MDBInput value={confirmPassword} name="confirmPassword" onChange={this.handleChange} label="Confirm password" icon="exclamation-triangle" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn onClick={this.handleSubmit} color="primary">Register</MDBBtn>
              </div>
            </form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default SignupFormPage;