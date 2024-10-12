import React from 'react';
import { Link } from 'react-router-dom';

export default function SignUpForm() {
  return (
    <div className="sign-container">
      <div className="sign-form">
        <div className="sperma">
          <h1>REGISTER</h1>
          <input placeholder="LOGIN" type="login" />
          <input placeholder="EMAIL" type="emeil" />
          <input placeholder="PASSWORD" type="password" />

          <div className="circle"></div>
        </div>
        <h4>Already have an account?</h4>
        <Link to="/login">
          <h3>Click Here!</h3>
        </Link>

        <a className="regButt" href="">
          REGISTRATE
        </a>
      </div>
    </div>
  );
}
