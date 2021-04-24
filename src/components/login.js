import React, { Component } from 'react';
import LoginManual from './login-manual/login-manual.js';

class Login extends Component {
  render() {
    return <div className='container-fluid background'>
      <LoginManual/>
    </div>;
  }
}

export default Login;
