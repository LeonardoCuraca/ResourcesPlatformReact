import React from 'react';
import './css/loginStyle.css';

const RegisterPage = () => {
  return (
    <div className="box">
      <h2>Registro</h2>
      <form action="#" method="post" autoComplete="off">
        <div className="inputBox">
          <input type="text" required />
          <label>Nombres</label>
        </div>
        <div className="inputBox">
          <input type="text" required />
          <label>Apellidos</label>
        </div>
        <div className="radio-group">
          <label className="radio">
            <input type="radio" defaultValue="Masculino" required />
            Hombre
            <span />
          </label>
          <label className="radio">
            <input type="radio" defaultValue="Femenino" required />
            Mujer
            <span />
          </label>
        </div>
        <div className="inputBox">
          <input type="text" style={{width: '68%'}} required />
          <p>@platform.com</p>
          <label>Usuario</label>
        </div>
        <div className="inputBox">
          <input type="password" required />
          <label>Contraseña</label>
        </div>
        <div className="inputBox">
          <input type="text" required />
          <label>Descripción</label>
        </div>
        <input type="submit" defaultValue="Registrarse" />
        <input type="reset" defaultValue="Limpiar" />
      </form>
    </div>
  );
};

export default RegisterPage;
