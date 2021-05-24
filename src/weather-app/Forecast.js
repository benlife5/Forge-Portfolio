import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import HourlyForecast from "./HourlyForecast.js";
import DailyForecast from "./DailyForecast.js";

function Forecast({ position }) {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [hourlyActive, setHourlyActive] = useState(true);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lat", position[0]);
    url.searchParams.append("lon", position[1]);
    url.searchParams.append("units", "imperial");
    url.searchParams.append("exclude", "current,minutely,alerts");

    if (position[0] && position[1]) {
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
  }, [position, API_KEY]);

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
