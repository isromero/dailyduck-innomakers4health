import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sidebar from "./Sidebar";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { renderIntoDocument } from "react-dom/test-utils";
import { useState } from "react";

const localizer = momentLocalizer(moment);
const MyCalendar = (props) => {
  const [events, setEvents] = useState([
    {
      title: "Winners Innomakers4Health",
      start: new Date(),
      end: new Date(),
    },
    {
      title: "Primera cita médica",
      start: new Date(2023, 11, 10, 10, 0, 0),
      end: new Date(2023, 11, 10, 11, 0, 0),
    },
    {
      title: "Evaluación de hábitos",
      start: new Date(2023, 11, 12, 14, 30, 0),
      end: new Date(2023, 11, 12, 15, 30, 0),
    },
    {
      title: "Revisión cita médica",
      start: new Date(2023, 11, 15, 18, 0, 0),
      end: new Date(2023, 11, 15, 20, 0, 0),
    },
    {
      title: "Evaluación de hábitos",
      start: new Date(2023, 11, 21, 18, 0, 0),
      end: new Date(2023, 11, 21, 20, 0, 0),
    },
    {
      title: "Análisis de sangre",
      start: new Date(2023, 11, 26, 18, 0, 0),
      end: new Date(2023, 11, 26, 20, 0, 0),
    },
  ]);
  const handleSelect = ({ start, end }) => {
    const title = prompt('Ingrese el título del evento:');
    if (title) {
      const start = new Date(prompt('Ingrese la fecha y hora de inicio (YYYY-MM-DD HH:mm):'));
      const end = new Date(prompt('Ingrese la fecha y hora de fin (YYYY-MM-DD HH:mm):'));

      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        const newEvent = { title, start, end };
        setEvents([...events, newEvent]);
      } else {
        alert('Formato de fecha incorrecto. Por favor, use YYYY-MM-DD HH:mm');
      }
    }
  };
  return (
    <div className="fullPage">
      <Sidebar />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelect}
        style={{ height: window.innerHeight, width: window.innerWidth }}
      />
    </div>
  );
};

export default MyCalendar;
