import React, { Component } from 'react';
import LoginManual from './login-manual/login-manual.js';
import './login.css';



class Login extends Component {
  render() {
    return <div className='container-fluid background'>
      <div className="row">
        <div className="col">
          <div className="box">
          <div className="image columnSet" > 
					<img src= {'https://i.imgur.com/VrRJv7Y.png' } alt="pic" />
			
			</div>
          </div>
        </div>
        
        <div className="col">
        <right>
      <LoginManual/>
      </right>
        </div>
      </div>
     
      <br/>
 
      

    
    </div>;
  }
}

export default Login;
