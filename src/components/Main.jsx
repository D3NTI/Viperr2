import React from 'react';

import Mice from '../assets/mice.png';
export default function Main() {
  return (
    <div className="main">
      <div className="left-section">
        <h2>EXCLUSIVE COMPUTER CLUB!</h2>
        <h1>VIPERR PC CLUB</h1>
        <ul className="main-list">
          <li>Best place to chill with your friends</li>
          <li>Only the best computers </li>
          <li> Lounge zone with cafe and bar</li>
        </ul>
        <a href="">RESERVATION</a>
      </div>
      <div className="right-section">
        <img src={Mice} alt="" />
      </div>
    </div>
  );
}
