import React, { useEffect, useState } from "react";
import axios from "axios";

const GeolocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          await fetchWeatherData(position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation API is not supported.");
    }
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode`;
  
    try {
      const response = await axios.get(url);
      setWeather(response.data);
      console.log(response.data); 
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div>
      {latitude && longitude ? (
        <>
          <h2>Weather at your location:</h2>
          {weather ? (
            <>
              <p>Temperature: {weather.hourly.temperature_2m[0]}°C</p>
              <p>Time: {weather.hourly.time[0]}</p>
            </>
          ) : (
            <p>Loading weather data...</p>
          )}
        </>
      ) : (
        <p>Fetching geolocation...</p>
      )}
    </div>
  );
};

export default GeolocationComponent;