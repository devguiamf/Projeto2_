import React from "react";
import { Link } from "react-router-dom"



import "./MenuHorizontal.css"

function MenuHorizontal() {
  return (
    <div className="menuHorizontal">
     
      <nav className="navMenu">
        <ul>
          
          <li id="inicio"> <Link to="/">Início </Link> </li>  
          <li id="corretor"> <Link to="/corretor">Corretor </Link> </li>
          <li id="imovel"> <Link to="/imovel">Imovel </Link> </li>       
        </ul>
      </nav>
    </div>
  );
}

export default MenuHorizontal;
