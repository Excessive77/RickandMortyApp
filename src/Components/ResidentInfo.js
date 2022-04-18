import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    
      const promise = axios(url);
      promise.then((res) => {
        setLoading(false)
        setResident({
          image: res.data.image,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          origin: res.data.origin.name,
          episodes: res.data.episode.length
        });
      
    })
    
}, [url, resident.status]);

  return (
    <div>
      <div className="resident">
        {(isLoading) ? <div>Loading...</div> : <img src={resident.image} alt="" />}
        <div>
            <p>
            <b>Estado: </b>{resident.status}
            </p>
          <p>
            <b>Nombre: </b>{resident.name}
          </p>
          <p>
           <b>Especie: </b>{resident.species}
          </p>
          <p>
            <b>Origen: </b>{resident.origin}
          </p>
          <p>
            <b>Episodios donde aparece: </b>{resident.episodes}
          </p>
        </div>
      </div>
    </div>
  );
};


export default ResidentInfo;