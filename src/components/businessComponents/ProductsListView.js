import React, { Component } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';
import './businessStyles/dashboardStyle.css';

export default class ProductsListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [],
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
        <div className="card-header">
          <div className="table-header">
            <h5 className="h3 mb-0">Stock de Productos</h5>
            <button onClick={this.toggleProductForm.bind(this)}>Agregar Nuevo Producto</button>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Stock</th>
              <th scope="col">Precio</th>
              <th scope="col">Detalle/Categoría</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(product => {
              return(
                <tr>
                  <th>{product.pronombre}</th>
                  <td>{product.prostock}</td>
                  <td>{product.proprecio}</td>
                  <td>{product.prodetalles}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
		);
  }
}
