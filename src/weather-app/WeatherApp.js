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
  const { coords, setCoords } = useContext(LocationContext);
  console.log("coords at weather render: ", coords);
  useEffect(() => {
    if (location !== "home") {
      setCoords({ lat: location.split(",")[0], lng: location.split(",")[1] });
    }
  }, [location, setCoords]);

  return (
    <div
      className="App"
      style={{
        width: "60%",
        minWidth: "min-content",
        margin: "auto",
        backgroundColor: "lightgray",
        padding: "2%",
      }}
    >
      <LocationInput />
      <CurrentWeather />
      <Forecast />
    </div>
  );
}

export default WeatherApp;
