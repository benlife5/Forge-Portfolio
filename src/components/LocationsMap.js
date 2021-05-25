import { useState, useEffect, useContext } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { LocationContext } from "../contexts/LocationContext";
import { calcCenter } from "../utils/RestaurantUtils";

function LocationsMap(props) {
  const { coords: originalCoords } = useContext(LocationContext);
  const locations = props.locations;
  const [viewport, setViewport] = useState();
  const [activePopup, setActivePopup] = useState();

  useEffect(() => {
    if (!locations || !originalCoords) return null;
    const center = calcCenter(locations);
    setViewport({
      width: "100%",
      height: "100%",
      latitude: center.lat,
      longitude: center.lng,
      zoom: 12,
      style: { mapbox: "//styles/mapbox/streets-v11" },
    });
  }, [originalCoords, locations]);

  if (locations === null) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#f9f9f9",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Enter an address to begin
      </div>
    );
  }

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {locations.map((l) => (
        <Marker
          latitude={l.geometry.location.lat}
          longitude={l.geometry.location.lng}
          offsetLeft={-20}
          offsetTop={-10}
          key={l.key}
        >
          <img
            src="https://img.icons8.com/office/24/000000/marker.png"
            alt="Red marker"
            onClick={() => {
              setActivePopup(l);
            }}
          />
        </Marker>
      ))}
      {activePopup && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={activePopup.geometry.location.lng}
          latitude={activePopup.geometry.location.lat}
          onClose={setActivePopup}
          closeOnClick={false}
        >
          <a href={"#" + activePopup.name.replaceAll(" ", "-")}>
            {activePopup.name}
          </a>
        </Popup>
      )}
      <Marker
        latitude={originalCoords.lat}
        longitude={originalCoords.lng}
        offsetLeft={-20}
        offsetTop={-10}
      >
        <img
          src="https://img.icons8.com/ultraviolet/24/000000/marker.png"
          alt="blue marker"
        />
      </Marker>
    </ReactMapGL>
  );
}

export default LocationsMap;
