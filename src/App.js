import { BrowserRouter, Route, Link } from "react-router-dom";
import WeatherApp from "./weather-app/WeatherApp";
import RestaurantApp from "./restaurant-finder/RestaurantApp";
import { Typography, Button } from "@material-ui/core";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    navbar: { main: "#88AB75" },
    primary: { main: "#2D93AD" },
    secondary: { main: "#DE8F6E" },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div
          style={{
            height: "7.5vh",
            backgroundColor: "#88AB75",
            display: "grid",
            gridTemplate: "100% / calc(100% / 3) calc(100% / 3) calc(100% / 3)",
            padding: "0 1% 0 1%",
            alignItems: "center",
          }}
        >
          <div>
            <Link
              to="/home"
              component={Button}
              variant="contained"
              color="primary"
            >
              Home
            </Link>
          </div>

          <Typography variant="h5" style={{ textAlign: "center" }}>
            Forge Launch
          </Typography>

          <div style={{ textAlign: "right" }}>
            <Link
              to="/weather"
              component={Button}
              variant="contained"
              color="primary"
            >
              Weather
            </Link>
            <Link
              to="/restaurants"
              component={Button}
              variant="contained"
              color="primary"
            >
              Restaurant Finder
            </Link>
          </div>
        </div>

        <Route path="/weather" component={WeatherApp} />
        <Route path="/restaurants" component={RestaurantApp} />
        <Route path="/home" component={Home} />
      </ThemeProvider>
    </BrowserRouter>
  );
}

function Home() {
  return <div>Home</div>;
}

export default App;
