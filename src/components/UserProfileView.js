import React, { Component } from 'react';
import axios from 'axios';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import UserProfile from "./userComponents/UserProfile";
import UserSkills from "./userComponents/userSkills";
import ImageUpload from "./userComponents/ImageUpload";
import EmployeeRequest from "./businessComponents/EmployeeRequest";

export default class UserProfileView extends Component {

  constructor(props) {
    super(props);
    this.state = {
        userData: [],
    }
  }

  componentWillMount(){
    axios.get('https://businessmanagerwebservice.herokuapp.com/api/usuarios/' + this.props.match.params.userId + '/').then(res => {
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
          <UserProfile
            userId = {this.props.match.params.userId}/>
          <UserSkills
            userData = {this.state.userData}/>
        </div>
      </div>
    );
  }
};
