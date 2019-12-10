import React, { Component } from 'react';
import './userStyles/userSkillsStyle.css';

export default class UserSkills extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div className="skillsSection">
        <div className="skillsContainer">
          <h2>Habilidades Personales</h2>
          <div className="skills">
            <span className="name">Honestidad</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.honestidad + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.honestidad}%</span>
          </div>
          <div className="skills">
            <span className="name">Confianza</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.confianza + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.confianza}%</span>
          </div>
          <div className="skills">
            <span className="name">Creatividad</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.creatividad + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.creatividad}%</span>
          </div>
        </div>
        <div className="skillsContainer">
          <h2>Habilidades en Grupo</h2>
          <div className="skills">
            <span className="name">Comunicación</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.comunicacion + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.comunicacion}%</span>
          </div>
          <div className="skills">
            <span className="name">Cooperación</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.cooperacion + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.cooperacion}%</span>
          </div>
          <div className="skills">
            <span className="name">Respeto</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.respeto + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.respeto}%</span>
          </div>
        </div>
        <div className="skillsContainer">
          <h2>Habilidades en el Trabajo</h2>
          <div className="skills">
            <span className="name">Flexibilidad</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.flexibilidad + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.flexibilidad}%</span>
          </div>
          <div className="skills">
            <span className="name">Dedicación</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.dedicacion + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.dedicacion}%</span>
          </div>
          <div className="skills">
            <span className="name">Iniciativa</span>
            <div className="percent">
              <div className="progress" style={{width: this.props.userData.iniciativa + "%"}}>
              </div>
            </div>
            <span className="value">{this.props.userData.iniciativa}%</span>
          </div>
        </div>
      </div>
    );
  }
}
