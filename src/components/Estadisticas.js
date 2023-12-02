import React from 'react';
import Sidebar from './Sidebar';
import './Estadisticas.css';
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

const Estadisticas = () => {
    return (
        <div className='fullPage'>
            <Sidebar />
            <div className='estadisticas-page'>
                <div className='estadistica'>
                    <Bar  
                        data={{
                            labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
                            datasets: [
                                {
                                    label: "Pasos de esta semana",
                                    data: [9101, 503, 31000, 13004, 4600, 8500, 11028],
                                    borderRadius: 5
                                }
                            ],
                            
                        }}

                    />
                </div>
                <div className='estadistica'>
                <p className='horas-ultima'>Horas de sueño última semana</p>
                <Doughnut
                        data={{
                            datasets: [
                                {
                                    label: "Horas de sueño de esta semana",
                                    data: [7, 8, 7.5, 3],
                                }
                            ],
                        }}
                    />
                </div>
                    <div className='estadistica big-estadistica'>
                    <Line  
                        data={{
                            labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
                            datasets: [
                                {
                                    label: "Pulsaciones de esta semana",
                                    data: [76, 90, 78, 62, 90, 92, 74],
                                },
                                {
                                    label: "Oxígeno en sangre de esta semana",
                                    data: [90, 93, 92, 97, 99, 98, 91],
                                }
                            ],
                        }}
                    />
                    </div>
            </div>
        </div>
    );
};

export default Estadisticas;