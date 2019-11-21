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
                  <h2>Supervisa y Gestiona tu Negocio</h2>
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
                  <i><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/projectImages%2Fstock.png?alt=media&token=391e6470-7f1f-40f6-8111-811c2b452857" alt="#" /></i>
                  <h3>Maneja tu propio Stock</h3>
                  <p>Digitaliza todos los productos de tu negocio y otorga permisos a tus colaboradores.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/projectImages%2Fpublish.png?alt=media&token=49418885-3954-40f0-92a1-40c1d08c3da7" alt="#" /></i>
                  <h3>Publica tu Negocio</h3>
                  <p>Permite que otras personas conozcan tu negocio y puedan postular a un empleao en él.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/projectImages%2Femployees.png?alt=media&token=9fe60555-2736-4b89-803e-bd74c1db48d2" alt="#" /></i>
                    <h3>Recursos Humanos</h3>
                  <p>Realiza seguimientos de puntualidad de tus empleados y contrata personas dispuestas a trabajar contigo a través de solicitudes.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/projectImages%2Fchart.png?alt=media&token=567d3fcb-680b-43c0-8867-68c4effacb7f" alt="#" /></i>
                  <h3>Reportes</h3>
                  <p>Supervisa las ventas totales de tu negocio, el rendimiento de tus empleados, etc.</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/projectImages%2Fmovil.png?alt=media&token=e01b9e3d-b524-412c-9c39-c623e6cdb469" alt="#" /></i>
                  <h3>Trabaja con tu Móvil</h3>
                  <p>Con el App de Business Manager tus empleados podran registrar su asistencia y realizar las ventas de tu Negocio</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                <div className="Services-box">
                  <i><img src="https://firebasestorage.googleapis.com/v0/b/businessmanagerfilestorage.appspot.com/o/projectImages%2Fprofile.png?alt=media&token=db678a69-85bd-4d7c-9cf8-348452068561" alt="#" /></i>
                  <h3>Personaliza tu Perfil</h3>
                  <p>Presentate a tí y a tu Negocio al Mundo. Tu exito dependerá de tu imagen.</p>
                </div>
              </div>
              <a className="read_more" href="#">Read More</a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MainPage;
