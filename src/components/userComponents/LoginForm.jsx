import React from 'react';
import Facebook from './Facebook';

import './userStyles/loginStyle.css';

const LoginForm = () => {
  return (
    <div className="back">
      <div className="box">
        <h2>Iniciar Sesión</h2>
        <div className="facebookButton">
          <Facebook/>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
