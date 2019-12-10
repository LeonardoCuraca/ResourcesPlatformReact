import React, { Component } from 'react';
import axios from 'axios';
import NewBusinessForm from './NewBusinessForm';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from 'react-router-dom';
import './businessStyles/businessCardViewStyle.css';

export default class UserCardView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        business: [],
        selectedBusinessId: "",
        showBusinessForm: false,
    }
  }

  toggleBusinessForm() {
    this.setState({
         showBusinessForm: !this.state.showBusinessForm
    });
  }

  showBusinessInfo(negid) {
    console.log(negid);
  }

  componentWillMount(){
    var id = JSON.parse(localStorage.getItem("userInfo")).userID;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        business: res.data.negocio,
      });
      console.log(this.state.business);
    });
  }

  render() {
    var selectedBusinessId;
    function updateSelectedBusinessId(newid) {
      selectedBusinessId = newid;
      console.log(selectedBusinessId);
    };
    return (
      <div  className="businessContainer">
        <button className="NewBusinessFormButton" onClick={this.toggleBusinessForm.bind(this)}>Crear Nuevo Negocio</button>
        {this.state.showBusinessForm ?
          <NewBusinessForm
                    closeNewBusinessForm={this.toggleBusinessForm.bind(this)}
          />
          : null
        }
        {this.state.business.map(business => {
          var url = "/myBusiness/login/" + business.negid;
          return(
            <a href={url}>
              <div className="businessCard">
                <div className="back-side">
                  <img className="businessImage" src={business.neglogo}/>
                  <div className="name-tag">
                    <h1>
                      <strong>{business.negnombre}</strong>
                    </h1>
                    <h3>{business.negdetalles}</h3>
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    );
  }

};
