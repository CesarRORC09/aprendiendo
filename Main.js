import React, {Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
}from "react-router-dom"
import Principal from"./Principal";
import Peliculas from"./Peliculas";
import Contacto from"./Contacto";

class Main extends Component{
  render(){
    return(
      <HashRouter>
      <div>
        <h1>Hola </h1>
          <ul className="header">
            <li><NavLink to="/">Principal</NavLink></li>
            <li><NavLink to="/peliculas">Peliculas</NavLink></li>
            <li><NavLink to="/contacto">Contacto</NavLink></li>
          </ul>

          <div className="content">

          </div>
      </div>
      </HashRouter>
    );
  }
}
export default Main;
