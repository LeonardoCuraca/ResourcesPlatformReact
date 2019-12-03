import React, { Component } from 'react';
import './css/pagesStyle/userProfileStyle.css';

import UserNavBar from "./userComponents/userNavBar";
import BusinessProfileView from "./businessComponents/BusinessProfileView.js";

export default class BusinessProfilePage extends Component {
  render() {
    return (
      <div>
        <UserNavBar/>
        <div className="rightpart">
          <BusinessProfileView
            businessId = {this.props.match.params.businessId}/>
        </div>
      </div>
    );
  }
};
