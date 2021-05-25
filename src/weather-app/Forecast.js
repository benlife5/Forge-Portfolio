import { useEffect, useState, useContext } from "react";
import { Button } from "@material-ui/core";
import HourlyForecast from "./HourlyForecast.js";
import DailyForecast from "./DailyForecast.js";
import { LocationContext } from "../contexts/LocationContext";

function Forecast() {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [hourlyActive, setHourlyActive] = useState(true);
  const [forecast, setForecast] = useState(null);
  const { coords } = useContext(LocationContext);

  useEffect(() => {
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");

    if (coords) {
      url.searchParams.append("appid", API_KEY);
      url.searchParams.append("lat", coords.lat);
      url.searchParams.append("lon", coords.lng);
      url.searchParams.append("units", "imperial");
      url.searchParams.append("exclude", "current,minutely,alerts");
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((obj) => {
          if (obj.cod === "400") {
            setForecast(false);
          } else {
            setForecast(obj);
          }
        });
    }
  }, [coords, API_KEY]);

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
