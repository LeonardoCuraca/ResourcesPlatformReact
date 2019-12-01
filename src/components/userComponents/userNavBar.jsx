import React, { Component } from 'react';
import './userStyles/userNavBarStyle.css';
import {Redirect} from 'react-router-dom';
export default class UserCardView extends Component {

  cerrarSesion(){
    localStorage.removeItem("userInfo");
  }

  render() {
    return (
      <div className="userProfile">
        <div className="leftpart">
          <div className="leftpart_inner">
            <div className="logo_wrap">
              <a href="/"><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/BUSINESS%20MANAGER.png?alt=media&token=e2e8f33a-29cf-46f6-80d2-bae47d4194b0" alt="" /></a>
            </div>
            <div className="menu_list_wrap">
              <ul className="anchor_nav">
                <li><a href="/userProfile">Perfil</a></li>
                <li><a href="/myBusiness">Mis Negocios</a></li>
                <li><a href="#Empleos">Mis Empleos</a></li>
                <li><a href="/lookForJobs">Buscar Empleo</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="/" onClick={() => this.cerrarSesion()}>Cerrar Sesión</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="rightpart">
        </div>
      </div>
    );
  }

}
