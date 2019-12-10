import React, { Component } from 'react';
import axios from 'axios';

import './businessStyles/NewBusinessFormStyle.css';

export default class BusinessLocationUpdateForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      negLong: null,
      negLati: null,
    }
    this.changeLong = this.changeLong.bind(this);
    this.changeLati = this.changeLati.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeLong(e) {
    this.setState({
      negLong: e.target.value
    });
  }

  changeLati(e) {
    this.setState({
      negLati: e.target.value
    });
  }

  componentWillMount() {
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + this.props.businessId + '/').then(res => {
      this.setState({
        negLong: res.data.negLong,
        negLati: res.data.negLati
      })
    });
  }

  handleSubmit(event) {
    let datos = {
      negLong: this.state.negLong,
      negLati: this.state.negLati
    }
    console.log(datos);
    axios.put('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + this.props.businessId + '/location' , datos).then(res => {
      window.location.reload()
    });
  }

  render() {
    return (
      <div className="back">
        <div className="box">
          <h2>Configuración de Ubicación</h2>
          <div className="inputBox">
            <input type="text" value={this.state.negLati} onChange={this.changeLati} />
            <label>Latitud</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.negLong} onChange={this.changeLong} />
            <label>Longitud</label>
          </div>
          <button className="addButton" onClick={this.handleSubmit}>Actualizar</button><br/>
          <button className="closeButton" onClick={this.props.closeLocationForm}>X</button>
        </div>
      </div>
    );
  }
};
