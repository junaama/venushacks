import React, {Component} from 'react';

class LoginManual extends Component {
  render() {
    return (
      <div className='white-bg alignlogin'>
        <h2>Add name here </h2>
        <br/>
        <br/>
        <h4>Create, discover, and share videos on our platform by joining below! </h4>
        <form action="">
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
