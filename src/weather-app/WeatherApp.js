import LocationInput from "./LocationInput.js";
import CurrentWeather from "./CurrentWeather.js";
import Forecast from "./Forecast.js";
import { useState } from "react";

function WeatherApp() {
  const [position, setPosition] = useState(false);

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
      <LocationInput setPosition={setPosition} />
      <CurrentWeather position={position} />
      <Forecast position={position} />
    </div>
  );
}

export default WeatherApp;
