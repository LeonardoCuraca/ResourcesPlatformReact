import React from 'react';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import AvailableBusinessCardView from "./businessComponents/AvailableBusinessCardView.js";

const OtherBusiness = () => {
  return (
    <div>
      <UserNavBar/>
      <div className="rightpart">
        <AvailableBusinessCardView/>
      </div>
    </div>
  );
};

export default OtherBusiness;
