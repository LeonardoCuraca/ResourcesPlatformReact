import React from 'react';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import UserCardView from "./userComponents/userCardView";
import UserSkills from "./userComponents/userSkills";
import ImageUpload from "./userComponents/ImageUpload";
import EmployeeRequest from "./businessComponents/EmployeeRequest";

const UserProfile = () => {
  return (
    <div>
      <UserNavBar/>
      <div className="rightpart">
        <UserCardView/>
        <ImageUpload/>
        <UserSkills/>
        <EmployeeRequest/>
      </div>
    </div>
  );
};

export default UserProfile;
