import React, { Component } from 'react';
import './businessStyles/resourcesNavBarStyle.css';

export default class ResourcesNavBar extends Component {

  render() {

    return (
      <div className="main-sidebar">
        <div className="logo">
          <a href="/"><img style={{width: '100%'}} src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/BUSINESS%20MANAGER.png?alt=media&token=e2e8f33a-29cf-46f6-80d2-bae47d4194b0" alt="" /></a>
        </div>
        {/* sidebar menu*/}
        <div className="navbar_wrap">
          <ul className="sidebar-menu tree" data-widget="tree">
            <li className="active">
              <a href="./">
                <i className="mdi mdi-view-dashboard" />
                <span>Dashboard</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-right pull-right" />
                </span>
              </a>
            </li>
            <li className="treeview">
              <a href="#products">
                <i className="mdi mdi-application" />
                <span>Productos</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-right pull-right" />
                </span>
              </a>
            </li>
            <li className="treeview">
              <a href="#employees">
                <i className="mdi mdi-application" />
                <span>Empleados</span>
                <span className="pull-right-container">
                  <i className="fa fa-angle-right pull-right" />
                </span>
              </a>
            </li>
            <li>
              <a href="MailBox">
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
  }
};
