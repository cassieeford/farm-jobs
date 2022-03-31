import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
  // var map = L.map("map").setView([51.505, -0.09], 13);

  return (
    <div className="Map">
      <p>TODO - popup to pull geolocation of address for producer</p>
      <div id="map">
        <MapContainer
          className="MapContainer"
          center={[-37.302092, 144.456268]}
          zoom={10}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={[-37.302092, 144.456268]}>
            {" "}
            <Popup>
              // A pretty CSS3 popup. <br /> Easily customizable. //{" "}
            </Popup>{" "}
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
