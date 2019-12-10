import React, { Component } from 'react';
import axios from 'axios';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';

import './css/pagesStyle/NewBusinessFormStyle.css';

export default class UserSkillsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      honestidad: 0,
      confianza: 0,
      creatividad: 0,
      comunicacion: 0,
      cooperacion: 0,
      respeto: 0,
      flexibilidad: 0,
      dedicacion: 0,
      iniciativa: 0,
    }
    this.changeHonestidad = this.changeHonestidad.bind(this);
    this.changeConfianza = this.changeConfianza.bind(this);
    this.changeCreatividad = this.changeCreatividad.bind(this);
    this.changeComunicacion = this.changeComunicacion.bind(this);
    this.changeCooperacion = this.changeCooperacion.bind(this);
    this.changeRespeto = this.changeRespeto.bind(this);
    this.changeFlexibilidad = this.changeFlexibilidad.bind(this);
    this.changeDedicacion = this.changeDedicacion.bind(this);
    this.changeIniciativa = this.changeIniciativa.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHonestidad(e) {
    this.setState({
      honestidad: e.target.value
    });
  }

  changeConfianza(e) {
    this.setState({
      confianza: e.target.value
    });
  }

  changeCreatividad(e) {
    this.setState({
      creatividad: e.target.value
    });
  }

  changeComunicacion(e) {
    this.setState({
      comunicacion: e.target.value
    });
  }

  changeCooperacion(e) {
    this.setState({
      cooperacion: e.target.value
    });
  }

  changeRespeto(e) {
    this.setState({
      respeto: e.target.value
    });
  }

  changeFlexibilidad(e) {
    this.setState({
      flexibilidad: e.target.value
    });
  }

  changeDedicacion(e) {
    this.setState({
      dedicacion: e.target.value
    });
  }

  changeIniciativa(e) {
    this.setState({
      iniciativa: e.target.value
    });
  }

  handleSubmit(event) {
    axios.put('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + this.props.match.params.userid + '/skills', this.state).then(res => {
      window.location.reload();
    })
  }

  render() {
    console.log(this.props.match.params.userid);
    return (
      <div className="back">
        <div className="skillsbox">
          <h2>Ingrese la Contraseña del Negocio</h2>
          <div className="inputBox">
            <label>Honestidad</label>
            <input type="text" value={this.state.honestidad} onChange={this.changeHonestidad} />
          </div>
          <div className="inputBox">
            <label>Confianza</label>
            <input type="text" value={this.state.confianza} onChange={this.changeConfianza} />
          </div>
          <div className="inputBox">
            <label>Creatividad</label>
            <input type="text" value={this.state.creatividad} onChange={this.changeCreatividad} />
          </div>
          <div className="inputBox">
            <label>Comunicación</label>
            <input type="text" value={this.state.comunicacion} onChange={this.changeComunicacion} />
          </div>
          <div className="inputBox">
            <label>Cooperación</label>
            <input type="text" value={this.state.cooperacion} onChange={this.changeCooperacion} />
          </div>
          <div className="inputBox">
            <label>Respeto</label>
            <input type="text" value={this.state.respeto} onChange={this.changeRespeto} />
          </div>
          <div className="inputBox">
            <label>Flexibilidad</label>
            <input type="text" value={this.state.flexibilidad} onChange={this.changeFlexibilidad} />
          </div>
          <div className="inputBox">
            <label>Dedicación</label>
            <input type="text" value={this.state.dedicacion} onChange={this.changeDedicacion} />
          </div>
          <div className="inputBox">
            <label>Iniciativa</label>
            <input type="text" value={this.state.iniciativa} onChange={this.changeIniciativa} />
          </div>
          <button className="addButton" onClick={this.handleSubmit}>Añadir</button><br/>
          <button className="closeButton" onClick={this.props.closeBusinessLoginForm}>X</button>
        </div>
      </div>
    );
  }
};
