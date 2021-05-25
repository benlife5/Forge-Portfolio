import timestamp from "unix-timestamp";
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const getCurrentWeather = (coords, setWeather) => {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.append("appid", API_KEY);
  url.searchParams.append("lat", coords.lat);
  url.searchParams.append("lon", coords.lng);
  url.searchParams.append("units", "imperial");
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((obj) => {
      if (obj.cod === 200) {
        setWeather(obj);
      } else {
        setWeather(false);
      }
    });
};

const getForecast = (coords, setForecast) => {
  if (coords) {
    const url = new URL("https://api.openweathermap.org/data/2.5/onecall");
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
};

const formatDate = (dt, options) => {
  return Intl.DateTimeFormat("en-US", options).format(timestamp.toDate(dt));
};

export { getCurrentWeather, getForecast, formatDate };
