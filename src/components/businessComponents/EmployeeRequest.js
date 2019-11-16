import React, { Component } from 'react';
import './businessStyles/EmployeeRequestStyle.css';

export default class EmployeeRequest extends Component {

  render() {
    return (
      <div className="container-contact100">
        <div className="wrap-contact100">
          <form className="contact100-form validate-form">
            <span className="contact100-form-title">
              Send Us A Message
            </span>
            <label className="label-input100" htmlFor="first-name">Tell us your name *</label>
            <div className="wrap-input100 rs1-wrap-input100 validate-input" data-validate="Type first name">
              <input id="first-name" className="input100" type="text" name="first-name" placeholder="First name" />
              <span className="focus-input100" />
            </div>
            <div className="wrap-input100 rs2-wrap-input100 validate-input" data-validate="Type last name">
              <input className="input100" type="text" name="last-name" placeholder="Last name" />
              <span className="focus-input100" />
            </div>
            <label className="label-input100" htmlFor="email">Enter your email *</label>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input id="email" className="input100" type="text" name="email" placeholder="Eg. example@email.com" />
              <span className="focus-input100" />
            </div>
            <label className="label-input100" htmlFor="phone">Enter phone number</label>
            <div className="wrap-input100">
              <input id="phone" className="input100" type="text" name="phone" placeholder="Eg. +1 800 000000" />
              <span className="focus-input100" />
            </div>
            <label className="label-input100" htmlFor="message">Message *</label>
            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea id="message" className="input100" name="message" placeholder="Write us a message" defaultValue={""} />
              <span className="focus-input100" />
            </div>
            <div className="container-contact100-form-btn">
              <button className="contact100-form-btn">
                Send Message
              </button>
            </div>
          </form>
          <div className="contactInfo" style={{backgroundImage: 'url("https://colorlib.com/etc/cf/ContactFrom_v17/images/bg-01.jpg")'}}>
            <div className="info">
              <div className="iconInfo">
                <i className="fas fa-map-marker-alt"/>
              </div>
              <div className="infoContent">
                <span className="title">
                  Address
                </span>
                <span className="content1">
                  Mada Center 8th floor, 379 Hudson St, New York, NY 10018 US
                </span>
              </div>
            </div>
            <div className="info">
              <div className="iconInfo">
                <i className="fas fa-phone"/>
              </div>
              <div className="infoContent">
                <span className="title">
                  Lets Talk
                </span>
                <span className="content2">
                  +1 800 1236879
                </span>
              </div>
            </div>
            <div className="info">
              <div className="iconInfo">
                <i className="fas fa-envelope"/>
              </div>
              <div className="infoContent">
                <span className="title">
                  General Support
                </span>
                <span className="content2">
                  contact@example.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

};
