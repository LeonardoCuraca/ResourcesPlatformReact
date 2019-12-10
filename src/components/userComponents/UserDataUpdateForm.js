import React, { Component } from 'react';
import axios from 'axios';

import './userStyles/loginStyle.css';

export default class UserDataUpdateForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        usunombre: "",
        usuapellido: "",
        usugenero: "",
        usudetalle: "",
        usudireccion: "",
        usuemail: "",
        usufoto: "",
        usucelular: "",
    }
    this.changeName = this.changeName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changePhone = this.changePhone.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeName(e) {
    this.setState({
      usunombre: e.target.value
    });
  }

  changeLastName(e) {
    this.setState({
      usuapellido: e.target.value
    });
  }

  changeDescription(e) {
    this.setState({
      usudetalle: e.target.value
    });
  }

  changeAddress(e) {
    this.setState({
      usudireccion: e.target.value
    });
  }

  changePhone(e) {
    this.setState({
      usucelular: e.target.value
    });
  }

  componentWillMount() {
    var id = JSON.parse(localStorage.getItem("userInfo")).userID;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        usunombre: res.data.usunombre,
        usuapellido: res.data.usuapellido,
        usugenero: res.data.usugenero,
        usudetalle: res.data.usudetalle,
        usudireccion: res.data.usudireccion,
        usufoto: res.data.usufoto,
        usuemail: res.data.usuemail,
        usucelular: res.data.usucelular,
      });
      console.log(this.state);
    });
  }

  handleSubmit(event) {
    var id = JSON.parse(localStorage.getItem("userInfo")).userID;
    axios.put('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/', this.state).then(res => {
      console.log(res);
      window.location.reload();
    })
  }

  render() {
    return (
      <div className="back">
        <div className="box">
          <h2>Actualizar Información</h2>
          <div className="inputBox">
            <input type="text" value={this.state.usunombre} onChange={this.changeName} />
            <label>Nombres</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.usuapellido} onChange={this.changeLastName} />
            <label>Apellidos</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.usudetalle} onChange={this.changeDescription} />
            <label>Descripción</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.usudireccion} onChange={this.changeAddress} />
            <label>Dirección</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.usucelular} onChange={this.changePhone} />
            <label>Celular</label>
          </div>
          <button className="addButton" onClick={this.handleSubmit}>Aceptar</button><br/>
          <button className="closeButton" onClick={this.props.closePopup}>X</button>
        </div>
      </div>
    );
  }
};
