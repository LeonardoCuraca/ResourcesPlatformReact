import React from 'react';
import './css/loginStyle.css';

const LoginPage = () => {
  return (
    <div className="box">
      <h2>Iniciar Sesión</h2>
      <form action method="post" autoComplete="off">
        <div className="inputBox">
          <input type="text" name="login_username" required />
          <label>Usuario</label>
        </div>
        <div className="inputBox">
          <input type="password" name="login_password" required />
          <label>Contraseña</label>
        </div>
        <input type="submit" name defaultValue="Entrar" /><br />
        ¿Primera vez aquí? <a className="registerLink" href="/nuevo">Regístrate</a>
      </form>
    </div>
  );
};

export default LoginPage;
