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
        <Link to="/dailyduck-innomakers4health/perfil">
          <li>
            <FontAwesomeIcon icon={faUser} />
            <span>Perfil</span>
          </li>
        </Link>
        <Link to="/dailyduck-innomakers4health/">
          <li>
            <FontAwesomeIcon icon={faStar} />
            <span>Roadmap</span>
          </li>
        </Link>
        <Link to="/dailyduck-innomakers4health/calendar">
          <li>
            <FontAwesomeIcon icon={faCalendar} />
            <span>Citas</span>
          </li>
        </Link>
        <Link to="/dailyduck-innomakers4health/estadisticas">
          <li>
            <FontAwesomeIcon icon={faChartBar} />
            <span>Estadísticas</span>
          </li>
        </Link>
        <Link to ="/dailyduck-innomakers4health/logros">
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
