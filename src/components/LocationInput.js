import { Button, Paper, TextField } from "@material-ui/core";
import { useState, useContext, useEffect } from "react";
import zipcodes from "zipcodes";
import { LocationContext } from "../contexts/LocationContext";

function LocationInput() {
  const [inputZIP, setInputZIP] = useState("");
  const { coords, setCoords } = useContext(LocationContext);

  useEffect(() => {
    if (coords) {
      console.log("running");
      window.history.pushState(
        { coords, app: "weather" },
        "",
        coords.lat + "," + coords.lng
      );
    }
  }, [coords]);

  const handleZipInput = (e) => {
    e.preventDefault();
    const pos = zipcodes.lookup(inputZIP);
    if (pos !== undefined) setCoords({ lat: pos.latitude, lng: pos.longitude });
    else alert(inputZIP + " is not a valid US ZIP code.");
  };
  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) =>
        setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      (error) => alert(error.message)
    );
  };

  return (
    <Paper
      style={{
        width: "50%",
        margin: "auto",
        textAlign: "center",
        padding: "1%",
      }}
    >
      <form
        style={{
          textAlign: "center",
          alignItems: "center",
          display: "grid",
          gridTemplate: "1fr 1fr / 8fr 2fr",
        }}
      >
        <Button
          variant="outlined"
          style={{ backgroundColor: "white", gridColumn: "1 / span 2" }}
          onClick={handleCurrentLocation}
        >
          Current Location
        </Button>
        <br />
        <TextField
          variant="standard"
          style={{ gridRow: "2" }}
          label="ZIP code"
          onChange={(e) => setInputZIP(e.target.value)}
        />
        <Button
          variant="outlined"
          style={{ backgroundColor: "white", gridRow: "2" }}
          onClick={handleZipInput}
          type="submit"
        >
          Go
        </Button>
      </form>
    </Paper>
  );
}

export default LocationInput;
