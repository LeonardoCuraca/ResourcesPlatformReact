import React, { Component } from 'react';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import UserCardView from "./userComponents/userCardView";
import UserSkills from "./userComponents/userSkills";
import ImageUpload from "./userComponents/ImageUpload";
import EmployeeRequest from "./businessComponents/EmployeeRequest";

export default class UserProfile extends Component {
  render() {
    return (
      <div>
        <UserNavBar/>
        <div className="rightpart">
          <UserCardView/>
          <UserSkills/>
        </div>
      </div>
    );
  }
};
