import "./App.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import AddressToMarkerDemo from "./AddressToMarker";
import { geocode } from "./Helpers/geo-opencage";
import React, { useState } from "react";

function Map(props) {
  // var map = L.map("map").setView([51.505, -0.09], 13);

  // const [places, setPlaces] = useState([]);

  // let joblocation = props.adds.joblocation;

  function toArray(joblocation) {
    let nums = joblocation.split(", ");
    return [Number(nums[0]), Number(nums[1])];
  }

  return (
    <div className="Map">
      <div id="map">
        <MapContainer
          className="MapContainer"
          center={[-36.980623204677, 144.25703850640292]}
          zoom={12}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {props.adds.map((a) => (
            <Marker key={a.id} position={toArray(a.joblocation)}>
              <Popup>
                <h4>{a.adtitle}</h4>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}

export default Map;
