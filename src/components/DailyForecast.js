import { Paper, Typography } from "@material-ui/core";
import { formatDate } from "../utils/WeatherUtils";

function DailyForecast({ forecast }) {
  return (
    <Paper
      varient="outlined"
      style={{
        display: "grid",
        marginTop: "1%",
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
          {formatDate(forecast.dt, { weekday: "long" })}
        </Typography>
        <Typography component="h2">
          {formatDate(forecast.dt, {
            month: "2-digit",
            day: "2-digit",
            year: "2-digit",
          })}
        </Typography>
      </div>

      {/* Weather Icon */}
      <div style={{ textAlign: "center" }}>
        <img
          src={
            "http://openweathermap.org/img/wn/" +
            forecast.weather[0].icon +
            "@2x.png"
          }
          alt={forecast.weather[0].main}
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
          {forecast.weather[0].main.toUpperCase()}
        </Typography>
        <Typography component="p">{forecast.weather[0].description}</Typography>
      </div>

      {/* Precipitation */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography component="p">
          Precipitation <br /> {Math.round(forecast.pop * 100)}%
        </Typography>
      </div>

      {/* Hi/Lo Temperature */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "right",
        }}
      >
        <Typography component="p">
          High: {Math.round(forecast.temp.max)}℉
        </Typography>
        <Typography omponent="p">
          Low: {Math.round(forecast.temp.min)}℉
        </Typography>
      </div>
    </Paper>
  );
}

export default DailyForecast;
