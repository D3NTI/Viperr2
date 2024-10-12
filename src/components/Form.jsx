import React from 'react';
import Logo from '../assets/logo.png';

export default function Form() {
  return (
    <div className="reservation-form">
      <img src={Logo} alt="" />
      <input type="LOGIN" placeholder="LOGIN" />

      <input type="Password" placeholder="PASSWORD" />

      <input type="tel" placeholder="PHONE NUMBER" />
      <h3>
        SELECTION FOR RESERVATION
        <span>
          <select name="SELECTION FOR RESERVATION" id="selec">
            <option value="1">STANDART</option>
            <option value="2">VIP</option>
            <option value="3">BOOTCAMP</option>
            <option value="4">VIP ROOM</option>
            <option value="5">TV RENT</option>
          </select>
        </span>
      </h3>

      <a href="">Reserve</a>
    </div>
  );
}
