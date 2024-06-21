import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
const Map = ({ position, zoom }) => {
  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        
      />
      <Marker position={position}>
        <Popup>
          <h2>Don Vannì</h2>
          <p>Via Padre Annibale, Maria di Francia 3, 92010 Grotte (AG)</p>
        </Popup>
        <Tooltip>Don Vannì</Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default Map;
