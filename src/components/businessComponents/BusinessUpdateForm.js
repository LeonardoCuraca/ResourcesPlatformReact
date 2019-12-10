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
      negestado: "",
    }
    this.changeName = this.changeName.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePhone = this.changePhone.bind(this);
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

  componentWillMount(){
    var id = this.props.businessId;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res.data.negid);
      this.setState({
        negnombre: res.data.negnombre,
        negdetalles: res.data.negdetalles,
        negdireccion: res.data.negdireccion,
        negemail: res.data.negemail,
        negcelular: res.data.negcelular,
        negestado: res.data.negestado
      });
    });
  }

  handleSubmit(event) {
    var id = this.props.businessId;
    axios.put('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/', this.state).then(res => {
      window.location.reload();
    })
  }

  render() {
    return (
      <div className="back">
        <div className="box">
          <h2>Actualizar Negocio</h2>
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
          <button className="addButton" onClick={this.handleSubmit}>Actualizar</button><br/>
          <button className="closeButton" onClick={this.props.closeBusinessUpdateForm}>X</button>
        </div>
      </div>
    );
  }
};
