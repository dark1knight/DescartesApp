import React, { useEffect, useState } from "react";

const GeolocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

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

  return (
    <div>
      {latitude && longitude ? (
        <>
          Latitude: {latitude} <br />
          Longitude: {longitude}
        </>
      ) : (
        "Fetching geolocation..."
      )}
    </div>
  );
};

export default GeolocationComponent;