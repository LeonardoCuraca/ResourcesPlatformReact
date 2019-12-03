import React, { Component } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import './businessStyles/dashboardStyle.css';

export default class EmployeesListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [],
        employees: [],
        showProductForm: false,
    }
  }

  componentWillMount(){
    var id = this.props.businessId;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/negocio/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        products: res.data.producto,
      });
    });
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/empleados/').then(res => {
      console.log(res.data);
      this.setState({
        employees: res.data,
      });
    });
  }

  toggleProductForm() {
    this.setState({
         showProductForm: !this.state.showProductForm
    });
  }

  render() {

    return (
      <div>
        {this.state.showProductForm ?
          <ProductForm
                    closeProductForm={this.toggleProductForm.bind(this)}
                    id = {this.props.businessId}
          />
          : null
        }
        <div className="card">
          {/* Card header */}
          <div className="card-header">
            {/* Title */}
            <div className="table-header">
              <h5 className="h3 mb-0">Stock de Productos</h5>
              <button onClick={this.toggleProductForm.bind(this)}>Agregar Nuevo Producto</button>
            </div>

          </div>
          {/* Card body */}
          <div className="card-body">
            {/* List group */}
            <ul className="list-group list-group-flush list my--3">
              {this.state.products.map(product => {
                return(
                  <li className="list-group-item px-0">
                    <div className="row align-items-center">
                      <div className="col-auto">
                        {/* Avatar */}
                        <a href="#" className="avatar rounded-circle">
                          {product.pronombre}
                        </a>
                      </div>
                      <div className="col">
                        <h5>Stock: {product.prostock}</h5>
                      </div>
                      <div className="col">
                        <h5>Categoría: {product.prodetalles}</h5>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="card">
              {/* Card header */}
              <div className="card-header border-0">
                <h3 className="mb-0">Empleados</h3>
              </div>
              {/* Light table */}
              <div className="table-responsive">
                <table className="table align-items-center table-flush">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Nombre</th>
                      <th scope="col">Ganancia</th>
                      <th scope="col">Estado</th>
                      <th scope="col">Asistencia promedio</th>
                      <th scope="col">Acciones</th>
                    </tr>
                  </thead>
                  <tbody className="list">
                  {this.state.employees.map(employee => {
                    return(
                      <tr>
                        <th scope="row">
                          <div className="media align-items-center">
                            <a href="#" className="avatar rounded-circle mr-3">
                              <img alt="Image placeholder" src="../../assets/img/theme/bootstrap.jpg" />
                            </a>
                            <div className="media-body">
                              <span className="name mb-0 text-sm">{employee.emp}</span>
                            </div>
                          </div>
                        </th>
                        <td className="budget">
                          S/. 350.00
                        </td>
                        <td>
                          <span className="badge badge-dot mr-4">
                            <i className="bg-warning" />
                            <span className="status">Trabajando</span>
                          </span>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="completion mr-2">60%</span>
                          </div>
                          <div className="progress progress-xs mb-0">
                            <div className="progress-bar bg-orange" role="progressbar" aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} style={{width: '60%'}} />
                          </div>
                        </td>
                      </tr>
                    )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
		);
  }
}
