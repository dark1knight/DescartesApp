import React, { useEffect, useState } from "react";
import axios from "axios";
import MapComponent from "./MapComponent";
import WeatherComponent from "./WeatherComponent";

const GeolocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [inputLatitude, setInputLatitude] = useState("");
  const [inputLongitude, setInputLongitude] = useState("");

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      console.error("Geolocation API is not supported.");
    }
  }, []);

  const fetchWeatherData = async () => {
    setLoading(true);
    if (inputLatitude && inputLongitude) {
      await fetchWeather(inputLatitude, inputLongitude);
    } else if (latitude && longitude) {
      setInputLatitude(latitude);
      setInputLongitude(longitude);
      await fetchWeather(latitude, longitude);
    }
    setLoading(false);
  };

  const fetchWeather = async (latitude, longitude) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum&timezone=auto`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  const handleMapClick = (lat, lng) => {
    setInputLatitude(lat);
    setInputLongitude(lng);
    fetchWeatherData(lat, lng); 
    console.log(`Clicked coordinates: Latitude ${lat}, Longitude ${lng}`);
  };
  const handleLatitudeChange = (e) => {
    setInputLatitude(e.target.value);
  };

  const handleLongitudeChange = (e) => {
    setInputLongitude(e.target.value);
  };

  return (
    <div>
      
      <h2>Previsão do tempo:</h2>
      <div>
        <p>Sua localização</p>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>  
      </div>
      
      <div>
        <label>Latitude:</label>
        <input type="text" value={inputLatitude} onChange={handleLatitudeChange} />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="text" value={inputLongitude} onChange={handleLongitudeChange} />
      </div>
      <div>
        <button onClick={fetchWeatherData} disabled={loading}>
          {loading ? "Loading..." : "Fetch Weather"}
        </button>
      </div>
      {weather && (
        <> 
          <p>Latitude: {inputLatitude || latitude}</p>
          <p>Longitude: {inputLongitude || longitude}</p>        
          <div className="weather-container">
            {/* ... your existing code here */}
            <WeatherComponent weather={weather} />
          </div>
          <image>
            <MapComponent latitude={inputLatitude} longitude={inputLongitude} onMapClick={handleMapClick} />
          </image>
                                  
        </>
      )}
    </div>
  );
};

export default GeolocationComponent;