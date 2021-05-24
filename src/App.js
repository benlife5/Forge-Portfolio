import { BrowserRouter, Route, Link } from "react-router-dom";
import WeatherApp from "./weather-app/WeatherApp"
import RestaurantApp from "./restaurant-finder/RestaurantApp"

function App() {
  return (
    <BrowserRouter>

      <Link to="/home">Home</Link>
      <Link to="/weather">Weather</Link>
      <Link to="/restaurants">Restaurant Finder</Link>

      <Route path="/weather" component={WeatherApp} />
      <Route path="/restaurants" component={RestaurantApp} />
      <Route path="/home" component={Home} />
    </BrowserRouter>
  );
}

function Home() {
  return(
    <div>
      Home
    </div>
  )
}

export default App;
