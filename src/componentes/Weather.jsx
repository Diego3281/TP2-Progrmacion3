import React from 'react';
import './Weather.css'; 

const Weather = ({ weatherData }) => {
  if (!weatherData) {
    return <div>No hay datos para mostrar</div>;
  }

  return (
    <div>
      <h2>Clima en {weatherData.location.name}</h2>
      <p>Temperatura: {weatherData.current.temp_c} °C</p>
      <p>Condición: {weatherData.current.condition.text}</p>
      <img src={weatherData.current.condition.icon} alt="icon" />
    </div>
  );
};

export default Weather;
