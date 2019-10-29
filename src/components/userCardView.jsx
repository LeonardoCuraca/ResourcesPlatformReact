import React from 'react';
import './css/userCardViewStyle.css';

const UserCardView = () => {
  return (
    <div className="profile">
      <div className="row">
        <div className="col-sm-4">
          <div className="photo-profile">
            <img src="https://rstill.netlify.com/images/me.jpg" alt="Robert Smith" />
          </div>
          <a href="cv/cv-1.pdf" target="cv">
            <div className="download-resume">
              <i className="fa fa-cloud-download" aria-hidden="true" />
              <span className="text-download">DOWNLOAD RESUME</span>
            </div>
          </a>
        </div>
        <div className="col-sm-8">
          <div className="info-profile">
            <h2 className="userName">ROBERT SMITH</h2>
            <h3>web developer &amp; web designer</h3>
            <p>Hello! I’m Robert Smith. Web Developer with over 8 years of experience.
              Experienced with all stages of the development cycle for dynamic web projects.
              Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. Strong background in management and leadership.</p>
            <div className="row">
              <div className="col-sm-6">
                <ul className="ul-info">
                  <li className="li-info">
                    <span className="title-info">Age</span>
                    <span className="info">26</span>
                  </li>
                  <li className="li-info">
                    <span className="title-info">Address</span>
                    <span className="info">6235, London, Earth, BE 45</span>
                  </li>
                  <li className="li-info">
                    <span className="title-info">Email</span>
                    <span className="info">robertsmith@gmail.com</span>
                  </li>
                </ul>
              </div>
              <div className="col-sm-6">
                <ul className="ul-info">
                  <li className="li-info">
                    <span className="title-info">Phone</span>
                    <span className="info">+123 456 789 012</span>
                  </li>
                  <li className="li-info">
                    <span className="title-info">Website</span>
                    <span className="info">www.robertsmith.com</span>
                  </li>
                  <li className="li-info">
                    <span className="title-info">Nationality</span>
                    <span className="info">American</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCardView;
