import React, { Component } from 'react';
import axios from 'axios';

import './businessStyles/NewBusinessFormStyle.css';

export default class NewBusinessForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      negnombre: "",
      negdetalles: "",
      negdireccion: "",
      negemail: "",
      negcelular: "",
      negpassword: "",
      negestado: "inactivo",
      negusuario: JSON.parse(localStorage.getItem("userInfo")).userID,
    }
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName(e) {
    this.setState({
      negnombre: e.target.value
    });
  }

  changeDescription(e) {
    this.setState({
      negdetalles: e.target.value
    });
  }

  changeAddress(e) {
    this.setState({
      negdireccion: e.target.value
    });
  }

  changeEmail(e) {
    this.setState({
      negemail: e.target.value
    });
  }

  changePhone(e) {
    this.setState({
      negcelular: e.target.value
    });
  }

  changePassword(e) {
    this.setState({
      negpassword: e.target.value
    });
  }

  handleSubmit(event) {
    axios.post('https://businessmanagerwebservice.herokuapp.com/api/negocio/', this.state).then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="back">
        <div className="box">
          <h2>Agregar nuevo negocio</h2>
          <form onSubmit={this.handleSubmit} autoComplete="off">
            <div className="inputBox">
              <input type="text" value={this.state.negnombre} onChange={this.changeName} />
              <label>Nombre del Negocio</label>
            </div>
            <div className="inputBox">
              <input type="text" value={this.state.negdetalles} onChange={this.changeDescription} />
              <label>Descripción del Negocio</label>
            </div>
            <div className="inputBox">
              <input type="text" value={this.state.negdireccion} onChange={this.changeAddress} />
              <label>Dirección</label>
            </div>
            <div className="inputBox">
              <input type="text" value={this.state.negemail} onChange={this.changeEmail} />
              <label>Correo Electrónico del Negocio</label>
            </div>
            <div className="inputBox">
              <input type="text" value={this.state.negcelular} onChange={this.changePhone} />
              <label>Teléfono</label>
            </div>
            <div className="inputBox">
              <input type="password"  value={this.state.negpassword} onChange={this.changePassword} />
              <label>Contraseña del Negocio</label>
            </div>
            <input type="submit" defaultValue="Registrarse" />
            <input type="reset" defaultValue="Limpiar" />
          </form>
          <button onClick={this.props.closeNewBusinessForm}>Cerrar</button>
        </div>
      </div>
    );
  }
};
