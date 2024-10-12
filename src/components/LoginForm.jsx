import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
  return (
    <div className="sign-container">
      <div className="sign-form">
        <div className="sperma">
          <h1>LOGIN</h1>
          <input placeholder="LOGIN" type="login" />
          <input placeholder="PASSWORD" type="password" />

          <div className="circle"></div>
        </div>
        <h4> You don't have an account ?</h4>
        <Link to="/signup">
          <h3>Click Here!</h3>
        </Link>

        <a className="logButt" href="">
          LOGIN
        </a>
      </div>
    </div>
  );
}
