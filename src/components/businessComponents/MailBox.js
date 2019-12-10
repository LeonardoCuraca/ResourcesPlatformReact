import React, { Component } from 'react';
import axios from 'axios';
import EmployeeAddForm from './EmployeeAddForm';
import './businessStyles/dashboardStyle.css';

export default class MailBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        requests: [],
        showEmployeeAddForm: false,
    }
  }

  toggleEmployeeAddForm() {
    this.setState({
         showEmployeeAddForm: !this.state.showEmployeeAddForm
    });
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
      empentrada: new Date(),
      empsalida: new Date(),
    }
    console.log(datos);
    axios.post('https://businessmanagerwebservice.herokuapp.com/api/empleados/', datos).then(res => {
      console.log("added");
      this.deleteRequest(solid);
    });
  }

  deleteRequest(solid) {
    axios.delete('https://businessmanagerwebservice.herokuapp.com/api/solicitudes/' + solid + '/').then(res => {
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
        <div className="requestContainer">
          {this.state.requests.map(request => {
            return(
              <div className="card mb-3" style={{maxWidth: '540px'}}>
                {this.state.showEmployeeAddForm ?
                  <EmployeeAddForm
                            closeEmployeeAddForm={this.toggleEmployeeAddForm.bind(this)}
                            solid = {request.solid}
                            businessId = {this.props.businessId}
                            soliusu = {request.soliusu}
                            soliname = {request.solinombre}
                            soliapellido = {request.soliapellido}
                  />
                  : null
                }
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src={request.soliimage} className="card-img"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title"><a className="requestName" href={'/userProfile/' + request.soliusu}>{request.solinombre} {request.soliapellido}</a></h5>
                      <p className="card-text">{request.solimensaje}</p>
                      <p className="requestInfo"><small className="text-muted">Email: {request.soliemail}</small></p>
                      <p className="requestInfo"><small className="text-muted">Celular: {request.solicelular}</small></p>
                    </div>
                    <div className="card-body">
                      <button className="confirmButton" onClick={this.toggleEmployeeAddForm.bind(this)}>Agregar</button>
                      <button className="deleteButton" onClick={() => this.deleteRequest(request.solid)}>Descartar</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
		);
  }
}
