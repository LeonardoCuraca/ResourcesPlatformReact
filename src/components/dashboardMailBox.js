import React, { Component } from 'react';
import './css/pagesStyle/userProfileStyle.css';

import NavBar from "./businessComponents/resourcesNavBar";
import MailBox from "./businessComponents/MailBox";

export default class DashboardMailBox extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <div className="rightpart">
          <MailBox
            businessId = {this.props.match.params.businessId}/>
        </div>
      </div>
    );
  }
};
