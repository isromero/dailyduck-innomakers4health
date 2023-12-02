import React from "react";
import Sidebar from "./Sidebar";
import "./Logros.css";
import "./Perfil.css";

const Logros = () => {
  return (
    <div className="fullPage">
      <Sidebar />
      <div className="logros-page">
        <h1>Logros</h1>
        <div className="logros-container">
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
                <h3>Desafío del pato nadador</h3>
                <p>Supera el reto de hacer ejercicios de cardio intensos durante 10 días seguidos</p>
              </div>
              <p className="achieved-medal">
                <strong>Achieved ✅</strong>
              </p>
            </div>
          </div>
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
                <h3>Descubre nuevos  estanques</h3>
                <p>Completa 15 ejercicios distintos en un mes</p>
              </div>
              <p className="achieved-medal">
                <strong>Achieved ✅</strong>
              </p>
            </div>
          </div>
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
                <h3>Serenidad del pato zen</h3>
                <p>Realiza sesiones de meditación para reducir el estrés durante 15 días consecutivos</p>
              </div>
              <p className="achieved-medal">
                <strong>Achieved ✅</strong>
              </p>
            </div>
          </div>
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
                <h3>Pato balanceado</h3>
                <p>Mantén un peso saludable duranate 3 meses registranto tus pesos de manera constante</p>
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
                <h3>Pato viajero</h3>
                <p>Alcanza la meta diaria de 10k de pasos durante 5 días seguidos</p>
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
                src={require("../img/oro.png")}
                alt="medal"
                className="medal"
              />
            </div>
            <div className="text-medal">
              <div className="medal-title">
                <h3>Carrera con plumaje</h3>
                <p>Completa una carrera de 5km o más</p>
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
                <h3>Relax aquático</h3>
                <p>Realiza 5 sesiones de natación</p>
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
                <h3>Respiración profucnda</h3>
                <p>Practica ejercicios de respiración durante 5 minutos al día, durante dos semnas</p>
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
                <h3>Pato en reposo</h3>
                <p>Logra una mejora en tus habitos de sueño aumentando tu tiempo de descanso en 30 min dirarios durante una semana</p>
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

export default Logros;
