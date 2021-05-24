import {Button, Paper, TextField} from "@material-ui/core";
import {useState} from "react";
import zipcodes from "zipcodes";

function LocationInput ({setPosition}) {
  const [inputZIP, setInputZIP] = useState("");
  const handleZipInput = (e) => {
    e.preventDefault();
    const pos = zipcodes.lookup(inputZIP);
    if (pos !== undefined) setPosition([pos.latitude, pos.longitude]);
    else alert(inputZIP + " is not a valid US ZIP code.")
  }
  const handleCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => setPosition([pos.coords.latitude, pos.coords.longitude]),
      (error) => alert(error.message)
    );
  }
  return (
    <Paper style={{width: "50%", margin: "auto", textAlign: "center", padding:"1%"}}>
      <form style={{textAlign: "center", alignItems: "center", display: "grid", gridTemplate: "1fr 1fr / 8fr 2fr"}}>
      <Button variant="outlined" style={{backgroundColor: "white", gridColumn:"1 / span 2"}} onClick={handleCurrentLocation}>Current Location</Button>
      <br />
      <TextField variant="standard" style={{gridRow: "2"}} label="ZIP code" onChange={(e)=>setInputZIP(e.target.value)}/>
      <Button variant="outlined" style={{backgroundColor: "white", gridRow: "2"}} onClick={handleZipInput} type="submit">Go</Button>
      </form>
    </Paper>

  )
}

export default LocationInput;