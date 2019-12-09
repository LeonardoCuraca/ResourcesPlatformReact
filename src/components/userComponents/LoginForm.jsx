import React, { Component } from 'react';
import Facebook from './Facebook';

import './userStyles/loginStyle.css';

export default class LoginForm extends Component {
  render() {
    return (
      <div className="back">
        <div className="box">
          <h2>Iniciar Sesión</h2>
          <div className="facebookButton">
            <Facebook/>
          </div>
          <button className="closeButton" onClick={this.props.closePopup}>X</button>
        </div>
      </div>
    );
  }
};
