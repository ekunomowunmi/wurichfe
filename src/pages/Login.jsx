import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBIcon } from 'mdbreact';
import {Link} from 'react-router-dom';

class LoginFormPage extends Component {

  initialState = {
    email: '',
    password: '',
    submitted: false
  }

  state = this.initialState;

  handleChange = (e) => {
      const { name, value } = e.target;
      console.log(e.target.name, ' ', e.target.value);

      this.setState({
        [name] : value
      });
  }

  handleSubmit = (e) => {
      const { email, password } = this.state;
      e.preventDefault();
      if ( !email, !password ) {
        return;
      }
      console.log(this.state);
      this.setState({
        submitted: !this.state.submitted
      })

      this.setState(this.initialState)
  }
  
  render() {
    const { email, password } = this.state;

    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="4" className="mx-auto">
            <h6 className="text-uppercase mb-4"><Link style={{color: 'black'}} to="/"><MDBIcon className="mr-3" icon="long-arrow-alt-left" /></Link>Back To Home</h6>

            <form>
              <h4><span className="font-weight-bold">Login</span> below</h4>
              <p>Don't have an account? <Link to="/sign-up"> Register</Link></p>
              <div className="grey-text mt-4">
                <MDBInput value={email} name="email" onChange={this.handleChange} label="Type your email" icon="envelope" group type="email" validate error="wrong"
                  success="right" />
                <MDBInput value={password} name="password" onChange={this.handleChange} label="Type your password" icon="lock" group type="password" validate />
              </div>
              <div className="text-center">
                <MDBBtn>Login</MDBBtn>
              </div>
            </form>
            
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default LoginFormPage;