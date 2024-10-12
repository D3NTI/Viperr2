import React from 'react';
import Form from './Form';
import Room from '../assets/room.png';

export default function Reservation() {
  return (
    <div className="reservation-section">
      <div className="reservation-card">
        <div className="left-form">
          <h1>RESERVATION</h1>
          <img src={Room} alt="" />
        </div>

        <div className="right-form">
          <Form></Form>
        </div>
      </div>
    </div>
  );
}
