import React, { Component } from 'react';
import axios from 'axios';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import UserCardView from "./userComponents/userCardView";
import UserSkills from "./userComponents/userSkills";
import ImageUpload from "./userComponents/ImageUpload";
import EmployeeRequest from "./businessComponents/EmployeeRequest";

export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userData: [],
    }
  }

  componentWillMount(){
    var id = JSON.parse(localStorage.getItem("userInfo")).userID;
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + id + '/').then(res => {
      console.log(res.data);
      this.setState({
        userData: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <UserNavBar/>
        <div className="rightpart">
          <UserCardView
            userData = {this.state.userData}/>
          <UserSkills
            userData = {this.state.userData}/>
        </div>
      </div>
    );
  }
};
