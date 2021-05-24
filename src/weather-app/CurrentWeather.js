import { Typography, Paper } from "@material-ui/core";
import { useEffect, useState } from "react";
import timestamp from "unix-timestamp";

function CurrentWeather({ position }) {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const [weather, setWeather] = useState(null);

  const formatDate = (options) => {
    return Intl.DateTimeFormat("en-US", options).format(weather.date);
  };

  useEffect(() => {
    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("appid", API_KEY);
    url.searchParams.append("lat", position[0]);
    url.searchParams.append("lon", position[1]);
    url.searchParams.append("units", "imperial");
    if (position[0] && position[1]) {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((obj) => {
          if (obj.cod === 200) {
            obj.date = timestamp.toDate(obj.dt);
            setWeather(obj);
          } else {
            setWeather(false);
          }
        });
    }
  }, [position, API_KEY]);

  return (
    weather && (
      <>
        {/* Header */}
        <Typography
          variant="h2"
          component="h1"
          style={{ textAlign: "center", margin: "1%" }}
        >
          {weather.name} Weather
        </Typography>

        {/* Current Weather */}
        <Paper
          varient="outlined"
          style={{
            display: "grid",
            padding: "1%",
            gridTemplate: "auto / 20% 20% 20% 20% 20%",
          }}
        >
          {/* Date */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" component="h2">
              {" "}
              {formatDate({
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
            </Typography>
            <Typography component="h2">
              {" "}
              {formatDate({
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}{" "}
            </Typography>
          </div>

          {/* Weather Icon */}
          <div style={{ textAlign: "center" }}>
            <img
              src={
                "http://openweathermap.org/img/wn/" +
                weather.weather[0].icon +
                "@2x.png"
              }
              alt={weather.weather[0].main}
            />
          </div>

          {/* Weather Description */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" component="p">
              {" "}
              {weather.weather[0].main.toUpperCase()}{" "}
            </Typography>
            <Typography component="p">
              {" "}
              {weather.weather[0].description}{" "}
            </Typography>
          </div>

          {/* Hi/Lo Temperature */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography component="p">
              {" "}
              High: {Math.round(weather.main.temp_max)}℉{" "}
            </Typography>
            <Typography component="p">
              {" "}
              Low: {Math.round(weather.main.temp_min)}℉{" "}
            </Typography>
          </div>

          {/* Current Temperature */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "right",
            }}
          >
            <Typography variant="h3">
              {Math.round(weather.main.temp)}℉
            </Typography>
          </div>
        </Paper>
      </>
    )
  );
}

export default CurrentWeather;
