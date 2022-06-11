import React from "react";
import Img from "../../logo/logo.jpg"
import "./Cabecalho.css"

function Cabecalho() {
  return (
    <div className="cabecalho">
      <img className="logo" src={Img}></img>
    </div>
  );
}

export default Cabecalho;
