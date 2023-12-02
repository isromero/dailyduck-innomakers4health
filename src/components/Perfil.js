import Sidebar from "./Sidebar";
import React from "react";
import "./Perfil.css";

const Perfil = () => {
  const experiencePercentage = 35;
  const ProgressBar = ({ percentage }) => {
    const progressStyle = {
      width: `${percentage}%`,
    };

    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={progressStyle}></div>
        <span className="progress-label">{`${percentage}%`}</span>
      </div>
    );
  };
  return (
    <div className="fullPage">
      <Sidebar />
      <div className="profile">
        <div className="profile-header">
          <img
            src={require("../img/daddy_duck.webp")}
            alt="profile-pic"
            className="profile-pic"
          />
          <h1>The Daddy Duck</h1>
          <p>
            <i>El Pato</i>
          </p>
        </div>
        <div className="profile-data">
          <p>
            <strong>Edad:</strong> 99
          </p>
          <p>
            <strong>Sexo:</strong> Masculino
          </p>
          <p>
            <strong>Altura:</strong> 0.5m
          </p>
          <p>
            <strong>Peso:</strong> 1kg
          </p>
          <p>
            <strong>Grupo de Riesgo:</strong> Altísimo riesgo
          </p>
          <p>
            <strong>Fecha de inicio:</strong> 01/01/2021
          </p>
        </div>
        <ProgressBar percentage={experiencePercentage} />
        <h1>Logros</h1>
        <div className="profile-logros">
          <div className="logro">
            <div className="medal-div-image">
                <img
                src={require("../img/oro.png")}
                alt="medal"
                className="medal"
                />
            </div>
            <div className="text-medal">
                <div className="medal-title">
                    <h3>Chef pato</h3>
                    <p>Logra preparar y seguir recetas saludables durante 20 días consecutivos</p>
                </div>
              <p className="achieved-medal">
                <strong>Achieved ✅</strong>
              </p>
            </div>
          </div>
          <div className="logro">
          <div className="medal-div-image">
                <img
                src={require("../img/plata.png")}
                alt="medal"
                className="medal"
                />
            </div>
            <div className="text-medal">
                <div className="medal-title">
                    <h3>Vuelo saludable</h3>
                    <p>Cumple con tu meta de subir escaleras durante 14 días consecutivos</p>
                </div>
              <p className="achieved-medal">
                <strong>Achieved ✅</strong>
              </p>
            </div>
          </div>
          <div className="logro">
          <div className="medal-div-image">
                <img
                src={require("../img/bronce.png")}
                alt="medal"
                className="medal"
                />
            </div>
            <div className="text-medal">
                <div className="medal-title">
                    <h3>Pato consistente</h3>
                    <p>Completa tus tareas durante 7 dias consecutivos</p>
                </div>
              <p className="achieved-medal">
                <strong>Achieved ✅</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Perfil;

