import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMap,
  faCalendar,
  faChartBar,
  faTrophy,
  faArrowRightFromBracket,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <Link to="/perfil">
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span>Perfil</span>
          </li>
        </Link>
        <Link to="/">
          <li>
            <FontAwesomeIcon icon={faStar} />
            <span>Roadmap</span>
          </li>
        </Link>
        <Link to="/calendar">
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Citas</span>
          </li>
        </Link>
        <Link to="/estadisticas">
          <li>
            <FontAwesomeIcon icon={faChartBar} />
            <span>Estadísticas</span>
          </li>
        </Link>
        <Link to ="/logros">
          <li>
            <FontAwesomeIcon icon={faTrophy} />
            <span>Logros</span>
          </li>
        </Link>
        <div className="sidebar-footer">
          <li className="logout">
            <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <span>Cerrar sesión</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
