import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationInfo from "./LocationInfo.js";

const LocationContainer = (url) => {
    
  const [location, setLocation] = useState({});


  useEffect(() => {
    const prom = axios(url);
    prom.then((res) => {
      setLocation({
        name: res.data.name,
        type: res.data.type,
        dimension: res.data.dimension,
        population: res.data.residents.length
      });
    });
  }, [url]);

  return (
    <LocationInfo
      name={location.name}
      type={location.type}
      dimension={location.dimension}
      population={location.population}
    />
  );
};

export default LocationContainer;