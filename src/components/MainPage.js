import React from 'react';
import './css/pagesStyle/MainPageStyle.css';

const MainPage = () => {
  return (
    <div>
        {/* banner */}
        <section className="banner_main">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-5">
                <div className="text-bg">
                  <h1>Busca, Crea y Gestiona...</h1>
                  <span>...tu propio negocio</span>
                  <p>Encuentra empleo facilmente según tus habilidades.<br />Personaliza tu marca para dar la mejor impresión.<br />Gestiona rápidamente los recursos de tu Negocio.</p>
                  <a href="/login">Get Started</a>
                </div>
              </div>
              <div className="col-md-7">
                <div className="text-img">
                  <figure><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/BUSINESS%20MANAGER.png?alt=media&token=e2e8f33a-29cf-46f6-80d2-bae47d4194b0" /></figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end banner */}
        {/* Hosting */}
        <div id className="hosting">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>What’s New In Web Hosting</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="web_hosting">
                  <figure><img src="images/web.jpg" alt="#" /></figure>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
                  <a href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Hosting */}
        {/* Services  */}
        <div id="service" className="Services">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Best Services</h2>
                  <p>Lorem ipsum dolor sittem ametamngcing elit, per sed do eiusmoad <br />
                    teimpor sittem elit inuning ut sed.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="images/service1.png" alt="#" /></i>
                  <h3> Shared Hosting</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="images/service2.png" alt="#" /></i>
                  <h3>Dedicated Hosting</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="images/service3.png" alt="#" /></i>
                  <h3>Domain Registration</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="images/service4.png" alt="#" /></i>
                  <h3>VPS Hosting</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="images/service5.png" alt="#" /></i>
                  <h3>Cloud Hosting</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="images/service6.png" alt="#" /></i>
                  <h3>Reseller Hosting</h3>
                  <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                </div>
              </div>
              <a className="read_more" href="#">Read More</a>
            </div>
          </div>
        </div>
        {/* end Servicess */}
        {/* why */}
        <div id="why" className="why">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>Why you should choose </h2>
                  <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div id="box_ho" className="why-box">
                  <i><img src="images/why1.png" alt="#" /></i>
                  <h3>Powerful Features</h3>
                  <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                </div>
                <a className="read_more bg" href="#">Read More</a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="why-box">
                  <i><img src="images/why2.png" alt="#" /></i>
                  <h3>Totaly Optimised</h3>
                  <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                </div>
                <a className="read_more bg" href="#">Read More</a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="why-box">
                  <i><img src="images/why3.png" alt="#" /></i>
                  <h3>Worldwide Support</h3>
                  <p>making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still </p>
                </div>
                <a className="read_more bg" href="#">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MainPage;
