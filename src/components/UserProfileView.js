import React, { Component } from 'react';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import UserProfile from "./userComponents/UserProfile";
import UserSkills from "./userComponents/userSkills";
import ImageUpload from "./userComponents/ImageUpload";
import EmployeeRequest from "./businessComponents/EmployeeRequest";

export default class UserProfileView extends Component {
  render() {
    return (
      <div>
        <UserNavBar/>
        <div className="rightpart">
          <UserProfile
            userId = {this.props.match.params.userId}/>
          <UserSkills/>
          <EmployeeRequest/>
        </div>
      </div>
    );
  }
};
