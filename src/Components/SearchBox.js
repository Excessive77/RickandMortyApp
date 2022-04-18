import React, { useState } from "react";
import Searches from './Searches'
import ResidentContainer from "./ResidentContainer";
import LocationContainer from "./LocationContainer";


const randomQuery = Math.floor(Math.random() * 126) + 1;

const SearchBox = () => {


  // useState para mostrar los residentes al azar
  const [url, setUrl] = useState(`https://rickandmortyapi.com/api/location/${randomQuery}`);
  const [search, setSearch] = useState("");
  const handlerSearch = (url) => {
    setSearch("");
    setUrl(url);
  };
  return (

    // El componentes SearchBox debe contener el input y el boton para hacer la busqueda
    <div className="search-box">
      <div className="search-bar">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Escribe una ubicación'
        />
      </div>
      {search !== "" && (
        <Searches
          url={`https://rickandmortyapi.com/api/location/?name=${search}`}
          handle={handlerSearch}
        />
      )}

      {/* Una vez se realiza la busqueda se renderizan los siguientes componentes */}
      <LocationContainer url={url} />
      <ResidentContainer url={url} />
    </div>
  );
};

export default SearchBox