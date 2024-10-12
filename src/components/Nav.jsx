import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      <img src={Logo} alt="" />
      <ul className="nav-butt">
        <li>
          <a>Gallery</a>
        </li>
        <li>
          <a href="">Price</a>
        </li>
        <li>
          <a href="">PC components</a>
        </li>
        <li>
          <a href="">Address</a>
        </li>
        <li>
          <a href="">Contacts</a>
        </li>
      </ul>
      <div className="nav-btns">
        <a href="">Reservation</a>
        <Link to="/account">Sign Up</Link>
      </div>
    </div>
  );
}
