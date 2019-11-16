import React, { Component } from 'react';
import axios from 'axios';
import './businessStyles/businessCardViewStyle.css';

export default class UserCardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
    }
  }

  componentWillMount(){
    var id = 3;
    axios.get('http://localhost:8080/api/usuarios/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        business: res.data.negocio,
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.business.map(business => {
          return(
            <div className="businessCard">
              <div className="back-side">
                <div className="color-grid">
                  <div className="black" />
                  <div className="red1" />
                  <div className="red2" />
                  <div className="green" />
                </div>
                <div className="name-tag">
                  <h1>
                    <strong>{business.negnombre}</strong>
                  </h1>
                  <h3>{business.negdetalles}</h3>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    );
  }

};
