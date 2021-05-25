import { useEffect, useState, useContext } from "react";
import { Button } from "@material-ui/core";
import HourlyForecast from "./HourlyForecast.js";
import DailyForecast from "./DailyForecast.js";
import { LocationContext } from "../contexts/LocationContext";
import { getForecast } from "../utils/WeatherUtils";

function Forecast() {
  const [hourlyActive, setHourlyActive] = useState(true);
  const [forecast, setForecast] = useState(null);
  const { coords } = useContext(LocationContext);

  useEffect(() => {
    getForecast(coords, setForecast);
  }, [coords]);

  return (
    (hourlyActive && forecast && (
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1%" }}
      >
        <Button
          style={{ backgroundColor: "white" }}
          variant="outlined"
          onClick={() => setHourlyActive(false)}
        >
          Switch to Daily
        </Button>
        {forecast.hourly.map((hour) => (
          <HourlyForecast forecast={hour} key={hour.dt} />
        ))}
      </div>
    )) ||
    (!hourlyActive && forecast && (
      <div
        style={{ display: "flex", flexDirection: "column", marginTop: "1%" }}
      >
        <Button
          style={{ backgroundColor: "white" }}
          variant="outlined"
          onClick={() => setHourlyActive(true)}
        >
          Switch to Hourly
        </Button>
        {forecast.daily.map((day) => (
          <DailyForecast forecast={day} key={day.dt} />
        ))}
      </div>
    ))
  );
}

export default Forecast;
