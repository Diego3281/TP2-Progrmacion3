import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = async () => {
    const apiKey = '3c60ae7f087d41a1ae8212621240506';  
    try {
      const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`);
      onSearch(response.data);
    } catch (error) {
      console.error("Error al obtener datos meteorológicos", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Ingresa la ubicación"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search;
