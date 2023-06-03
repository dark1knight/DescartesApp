import React from 'react';

const WeatherComponent = ({ weather }) => {
  if (!weather === 0) {
   
    return null; 
  }
  console.log(weather.daily);
  return (
    <div>
      <h3>Tempo:</h3>
      {weather.daily.time.map((date, index) => (
        <div key={index}>
          <h4>{date}</h4>
          <p>Max Temperatura: {weather.daily.temperature_2m_max[index]} °C</p>
          <p>Min Temperatura: {weather.daily.temperature_2m_min[index]} °C</p>
          <p>Precipitação pluviométrica: {weather.daily.precipitation_sum[index]} mm</p>
          <p>Chuva: {weather.daily.rain_sum[index]} mm</p>
        </div>
      ))}
    </div>
  );
};

export default WeatherComponent;