import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapContainer = ({ google, latitude, longitude }) => {
  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Map
        google={google}
        zoom={14}
        initialCenter={{ lat: latitude, lng: longitude }}
        center={{ lat: latitude, lng: longitude }}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);