import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;



const MapComponent = ({ latitude, longitude, onMapClick }) => {
  const MapClickHandler = () => {
    useMapEvent('click', (event) => {
      const { lat, lng } = event.latlng;
      onMapClick(lat, lng); 
    });
  
    return null;
  };

  if (latitude === undefined || longitude === undefined) {
    return null; 
  }
  return (
    <MapContainer center={[latitude, longitude]} zoom={13} style={{ height: '100vh', width: '100wh' }} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>Seu Local</Popup>
      </Marker>
      <MapClickHandler />
    </MapContainer>
  );
};

export default MapComponent;