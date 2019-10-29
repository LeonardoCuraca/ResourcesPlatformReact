import React from 'react';
import './css/resourcesNavBarStyle.css';

const ResourcesNavBar = () => {
  return (
    <div className="main-sidebar">
      <div className="logo">
        <a href="#"><img src="http://frenify.com/envato/marketify/html/arlo/1/img/logo/desktop-logo.png" alt="" /></a>
      </div>
      {/* sidebar menu*/}
      <div className="navbar_wrap">
        <ul className="sidebar-menu tree" data-widget="tree">
          <li className="active">
            <a href="index.html">
              <i className="mdi mdi-view-dashboard" />
              <span>Dashboard</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-right pull-right" />
              </span>
            </a>
          </li>
          <li className="treeview">
            <a href="#">
              <i className="mdi mdi-application" />
              <span>Applications</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-right pull-right" />
              </span>
            </a>
          </li>
          <li>
            <a href="pages/mailbox/mailbox.html">
              <i className="mdi mdi-email-variant" />
              <span>Mailbox</span>
              <span className="pull-right-container">
                <i className="fa fa-angle-right pull-right" />
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesNavBar;
