import React, { Component } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import './businessStyles/dashboardStyle.css';

export default class EmployeesListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        employees: [],
    }
  }

  componentWillMount(){
    var id = this.props.businessId;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        employees: res.data.empleado,
      });
    });
  }

  render() {

    return (
      <div>
        <div className="card-header">
          <div className="table-header">
            <h5 className="h3 mb-0">Empleados</h5>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Área</th>
              <th scope="col">Sueldo</th>
              <th scope="col">Inicio de Empleo</th>
              <th scope="col">Fin de Empleo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(employee => {
              var url = "/myBusiness/employee/skills/" + employee.empusu;
              return(
                <tr>
                  <td><a href={'/userProfile/' + employee.empusu}>{employee.empnombre}</a></td>
                  <td>{employee.emparea}</td>
                  <td>{employee.empsueldo}</td>
                  <td>{employee.empentrada}</td>
                  <td>{employee.empsalida}</td>
                  <td><a className="calificarButton" href={url}>Calificar</a></td>
                </tr>
              )

            })}
          </tbody>
        </table>
      </div>
		);
  }
}
