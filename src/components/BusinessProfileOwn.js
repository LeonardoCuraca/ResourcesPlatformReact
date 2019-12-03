import React, { Component } from 'react';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import BusinessProfile from "./businessComponents/BusinessProfile.js";

export default class BusinessProfileOwn extends Component {
  render() {
    return (
      <div>
        <UserNavBar/>
        <div className="rightpart">
          <BusinessProfile
            businessId = {this.props.match.params.businessId}/>
        </div>
      </div>
    );
  }
};
