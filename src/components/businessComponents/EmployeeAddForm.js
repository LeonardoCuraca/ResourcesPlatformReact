import React, { Component } from 'react';
import axios from 'axios';

import './businessStyles/NewBusinessFormStyle.css';

export default class EmployeeAddForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      empneg: this.props.businessId,
      empusu: this.props.soliusu,
      emparea: "",
      empsueldo: null,
      empentrada: new Date(),
      empsalida: new Date(),
    }
    this.changeArea = this.changeArea.bind(this);
    this.changeSueldo = this.changeSueldo.bind(this);
    this.changeSalida = this.changeSalida.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeArea(e) {
    this.setState({
      emparea: e.target.value
    });
  }

  changeSueldo(e) {
    this.setState({
      empsueldo: e.target.value
    });
  }

  changeSalida(e) {
    this.setState({
      empsalida: e.target.value
    });
  }

  handleSubmit(event) {
    axios.post('https://businessmanagerwebservice.herokuapp.com/api/empleados/', this.state).then(res => {
      console.log("added");
      this.deleteRequest(this.props.solid);
    });
  }

  deleteRequest(solid) {
    axios.delete('https://businessmanagerwebservice.herokuapp.com/api/solicitudes/' + solid + '/').then(res => {
      window.location.reload();
    });
  }

  render() {
    return (
      <div className="back">
        <div className="box">
          <h2>Configuración de Nuevo Empleado</h2>
          <div className="inputBox">
            <input type="text" value={this.state.emparea} onChange={this.changeArea} />
            <label>Área</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.empsueldo} onChange={this.changeSueldo} />
            <label>Sueldo</label>
          </div>
          <div className="inputBox">
            <input type="date" value={this.state.empsalida}  min={new Date()} onChange={this.changeSalida} />
            <label>Fín de Contrato</label>
          </div>
          <button className="addButton" onClick={this.handleSubmit}>Añadir</button><br/>
          <button className="closeButton" onClick={this.props.closeEmployeeAddForm}>X</button>
        </div>
      </div>
    );
  }
};
