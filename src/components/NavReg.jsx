import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function NavReg() {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="nav-btns">
        <Link to="/login">Sign in</Link>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
}
