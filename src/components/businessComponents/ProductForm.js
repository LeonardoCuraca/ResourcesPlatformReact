import React, { Component } from 'react';
import axios from 'axios';

import './businessStyles/NewBusinessFormStyle.css';

export default class ProductForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      procodigo: "",
      pronombre: "",
      prostock: "",
      proprecio: "",
      prodetalles: "",
      proneg: this.props.id,
    }
    this.changeCodigo = this.changeCodigo.bind(this);
    this.changeNombre = this.changeNombre.bind(this);
    this.changeStock = this.changeStock.bind(this);
    this.changePrecio = this.changePrecio.bind(this);
    this.changeDetalles = this.changeDetalles.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeCodigo(e) {
    this.setState({
      procodigo: e.target.value
    });
  }

  changeNombre(e) {
    this.setState({
      pronombre: e.target.value
    });
  }

  changeStock(e) {
    this.setState({
      prostock: e.target.value
    });
  }

  changePrecio(e) {
    this.setState({
      proprecio: e.target.value
    });
  }

  changeDetalles(e) {
    this.setState({
      prodetalles: e.target.value
    });
    console.log(this.state);
  }

  handleSubmit(event) {
    axios.post('https://businessmanagerwebservice.herokuapp.com/api/productos/', this.state).then(res => {
      window.location.reload();
    })
  }

  render() {
    return (
      <div className="back">
        <div className="box">
          <h2>Agregar nuevo Producto</h2>
          <div className="inputBox">
            <input type="text" value={this.state.procodigo} onChange={this.changeCodigo} />
            <label>Código de Próducto</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.pronombre} onChange={this.changeNombre} />
            <label>Nombre</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.prostock} onChange={this.changeStock} />
            <label>Stock</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.proprecio} onChange={this.changePrecio} />
            <label>Precio</label>
          </div>
          <div className="inputBox">
            <input type="text" value={this.state.prodetalles} onChange={this.changeDetalles} />
            <label>Detalles</label>
          </div>
          <button className="addButton" onClick={this.handleSubmit}>Añadir</button><br/>
          <button onClick={this.props.closeProductForm}>Cerrar</button>
        </div>
      </div>
    );
  }
};
