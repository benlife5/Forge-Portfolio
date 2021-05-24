import { BrowserRouter, Route, Link } from "react-router-dom";
import WeatherApp from "./weather-app/WeatherApp";
import RestaurantApp from "./restaurant-finder/RestaurantApp";
import { Typography, Button } from "@material-ui/core";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          height: "7.5vh",
          backgroundColor: "red",
          display: "grid",
          gridTemplate: "100% / calc(100% / 3) calc(100% / 3) calc(100% / 3)",
          padding: "0 1% 0 1%",
          alignItems: "center",
        }}
      >
        <div>
          <Link to="/home" component={Button} variant="outlined">
            Home
          </Link>
        </div>

        <Typography variant="h5" style={{ textAlign: "center" }}>
          {" "}
          Forge Launch{" "}
        </Typography>

        <div style={{ textAlign: "right" }}>
          <Link to="/weather" component={Button} variant="outlined">
            Weather
          </Link>
          <Link to="/restaurants" component={Button} variant="outlined">
            Restaurant Finder
          </Link>
        </div>
      </div>

      <Route path="/weather" component={WeatherApp} />
      <Route path="/restaurants" component={RestaurantApp} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

export default App;
