import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class LoginManual extends Component {
  render() {
    return (
      <div className='alignlogin'>
        <h2>She Says</h2>
        <br/>
        <br/>
        <h4>Create, discover, and share videos on our platform by joining below! </h4>
        
        <form action="submit">
          <div className='form-group'>
            <input type="text" className='form-control' placeholder='Email'/>
          </div>
          <div className='form-group'>
            <input type="password" className='form-control' placeholder='Password'/>
          </div>
          <button type="submit" className='btn btn-dark right-btn'>Log in</button>
        </form>
      </div>
    );
  }
}

export default LoginManual;
