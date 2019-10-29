import React from 'react';
import './css/businessCardViewStyle.css';

const BusinessCardView = () => {
  return (
    <div className="BusinessProfile" style={{display: 'block'}}>
      <div className="about">
        <div className="BusinessLogo">
          <div className="logo_wrapper">
            <img src="http://rbista.com/zwin/html/images/photo.jpg" height={186} width={153} />
          </div>
        </div>
        <h1>ANDERSON SMITH</h1>
        <h3>GRAPHIC &amp; WEB DESIGNER</h3>
        <p>I like to make cool and creative designs. My design stash is always full of refreshing ideas. Feel free to take a look around my Vcard.</p>
      </div>
      <ul className="personal-info">
        <li><label>Name</label><span>Anderson smith</span></li>
        <li><label>Birthday</label><span>March 13, 1988</span></li>
        <li><label>Address</label><span>Melbourne Victoria 3000 Australia</span></li>
        <li><label>Email</label><span>Anderson.smith@gmail.com</span></li>
        <li><label>Phone</label><span>+123 456 789 111</span></li>
        <li><label>Website</label><span><a href="#">www.Andersonsmith.com</a></span></li>
      </ul>
    </div>
  );
};

export default BusinessCardView;
