import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="container">
        <div className="row login">
            <div className="loginHeader">
                <h1>Login</h1>
            </div>
            <div className="loginInput">                
                <input type="email" placeholder="Email" className="emailInfo" />                
                <input type="password" placeholder="Password" className="pwdInfo" />                  
            </div>
            <div className="btnRow">
                <input type="button" value="Log in" className="loginBtn" />
            </div>
            <div className="txtForSignup">
                <p><b>Sign up</b> for a new account</p>
            </div>
        </div>
      </div>      
    );
  }
}

export default Login;
