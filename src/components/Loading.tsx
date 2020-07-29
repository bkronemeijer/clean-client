import React from "react";
// import Spinner from "react-bootstrap/Spinner";
import logo from '../Statics/assets/dustly-icon.svg'

export default function Loading() {
  return (
    <div>
      <img className="imgLoader" src={logo} alt="Dustly logo"/>
    </div>
  );
}
