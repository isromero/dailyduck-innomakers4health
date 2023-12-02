import './App.css';
import './components/HomePage.js'
import HomePage from './components/HomePage.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './components/ChatComponent.css';
import { faUser, faMap, faCalendar, faChartBar, faTrophy, faArrowRightFromBracket, faStar } from '@fortawesome/free-solid-svg-icons';
import MyCalendar from "./components/Calendar";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Perfil from './components/Perfil';
import Logros from './components/Logros';
import Estadisticas from './components/Estadisticas';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/stack-medical-habits-app/" element={<HomePage />}/>
        <Route path="/stack-medical-habits-app/calendar" element={<MyCalendar />}/>
        <Route path="/stack-medical-habits-app/perfil" element={<Perfil />}/>
        <Route path="/stack-medical-habits-app/logros" element={<Logros />}/>
        <Route path="/stack-medical-habits-app/estadisticas" element={<Estadisticas />}/>
      </Routes>
    </Router>
      
    </div>
  );
}

export default App;