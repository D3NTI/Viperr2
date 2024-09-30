import React from "react";
import Vip from "../assets/vip.png";
import Cat from "../assets/cat.png";
import Ice from "../assets/ice.png";
import Alabaster from "../assets/alabaster.png";
import Dog from "../assets/dog.png";
import Part from "../assets/part.png";

export default function Gallery() {
  return (
    <div className="gallery">
      <div className="top-side">
        <img className="Ice" src={Ice} alt="" />
        <img className="Dog" src={Dog} alt="" />
        <img className="Alabaster" src={Alabaster} alt="" />
      </div>
      <div className="bottom-side">
        <img className="Vip" src={Vip} alt="" />
        <img className="Cat" src={Cat} alt="" />
      </div>
      <img className="Part" src={Part} alt="" />
    </div>
  );
}
