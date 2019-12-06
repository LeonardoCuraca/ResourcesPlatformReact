import React, { Component } from 'react';
import axios from 'axios';
import './businessStyles/dashboardStyle.css';

export default class MailBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        requests: [],
    }
  }

  componentWillMount(){
    var id = this.props.businessId;
    console.log(this.props.businessId);
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        requests: res.data.solicitud,
      });
    });
  }

  confirmRequest(soliusu, solid) {
    var datos = {
      empneg: this.props.businessId,
      empusu: soliusu,
    }
    axios.post('https://businessmanagerwebservice.herokuapp.com/api/empleados/', datos).then(res => {
      this.deleteRequest(solid);
    });
  }

  deleteRequest(solid) {
    axios.delete('https://businessmanagerwebservice.herokuapp.com/api/empleados/' + solid + '/').then(res => {
      window.location.reload();
    });
  }

  render() {

    return (
      <div>
        <div className="card-header">
          <div className="table-header">
            <h5 className="h3 mb-0">Solicitudes</h5>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Email</th>
              <th scope="col">Celular</th>
              <th scope="col">Mensaje</th>
              <th scope="col">Agregar</th>
              <th scope="col">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {this.state.requests.map(request => {
              return(
                <tr>
                  <th>{request.soliusu}</th>
                  <th>{request.solinombre}</th>
                  <td>{request.soliapellido}</td>
                  <td>{request.soliemail}</td>
                  <td>{request.solicelular}</td>
                  <th>{request.solimensaje}</th>
                  <th><button onClick={this.confirmRequest(request.soliusu, request.solid)}>Agregar</button></th>
                  <th><button onClick={this.deleteRequest(request.solid)}>Agregar</button></th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
		);
  }
}
