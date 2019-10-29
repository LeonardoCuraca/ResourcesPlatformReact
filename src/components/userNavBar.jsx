import React from 'react';
import './css/userNavBarStyle.css';

const UserNavBar = () => {
  return (
    <div className="userProfile">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo_wrap">
            <a href="#"><img src="http://frenify.com/envato/marketify/html/arlo/1/img/logo/desktop-logo.png" alt="" /></a>
          </div>
          <div className="menu_list_wrap">
            <ul className="anchor_nav">
              <li><a href="/userProfile">Perfil</a></li>
              <li><a href="/businessView">Mis Negocios</a></li>
              <li><a href="#Empleos">Mis Empleos</a></li>
              <li><a href="/lookForJobs">Buscar Empleo</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Cerrar Sesión</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightpart">
      </div>
    </div>
  );
}

export default UserNavBar;
