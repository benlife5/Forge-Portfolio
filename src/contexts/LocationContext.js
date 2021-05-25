import { createContext, useState } from "react";

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [coords, setCoords] = useState();
  return (
    <LocationContext.Provider value={{ coords, setCoords }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
