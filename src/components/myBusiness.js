import React from 'react';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import BusinessCardView from "./businessComponents/businessCardView.js";

const UserProfile = () => {
  return (
    <div>
      <UserNavBar/>
      <div className="rightpart">
        <BusinessCardView/>
      </div>
    </div>
  );
};

export default UserProfile;
