import LocationInput from "./LocationInput.js";
import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";
import { useContext, useEffect } from "react";
import { LocationContext } from "../contexts/LocationContext";

function WeatherApp({
  match: {
    params: { location },
  },
}) {
  const { setCoords } = useContext(LocationContext);

  // React Router path parameters
  useEffect(() => {
    if (location !== "home") {
      setCoords({
        lat: parseFloat(location.split(",")[0]),
        lng: parseFloat(location.split(",")[1]),
      });
    }
  }, [location, setCoords]);

  return (
    <div
      style={{ width: "100%", height: "100%", backgroundColor: "lightgray" }}
    >
      <div
        className="App"
        style={{
          width: "60%",
          minWidth: "min-content",
          margin: "auto",
          padding: "2%",
        }}
      >
        <LocationInput />
        <CurrentWeather />
        <Forecast />
      </div>
    </div>
  );
}

export default WeatherApp;
