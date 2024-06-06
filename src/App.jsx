import React, { useState } from 'react';
import Weather from './componentes/Weather';
import Search from './componentes/Search';
import axios from 'axios';
import './estilo.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const handleSearch = async (data) => {
    setWeatherData(data);
    // Guardar historial en MongoDB
    try {
      await axios.post('http://localhost:5000/api/history', { location: data.location.name });
    } catch (error) {
      console.error("Error saving search history", error);
    }
  };

  return (
    <div>
      <h1>Aplicación de Clima</h1>
      <Search onSearch={handleSearch} />
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default App;

