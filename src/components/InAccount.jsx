import React from 'react';
import Ava from '../assets/Ava.png';
import LeftIn from '../components/LeftIn';
import RightIn from '../components/RightIn';
export default function InAccount() {
  return (
    <div className="inacc-container">
      <div className="inacc">
        <div className="top">
          <img src={Ava} alt="" />
          <h1>Hi, NickName!</h1>
        </div>
        <div className="pp">
          <div className="left-inacc">
            <LeftIn></LeftIn>
          </div>
          <div className="right-inacc">
            <RightIn></RightIn>
          </div>
        </div>
      </div>
    </div>
  );
}
