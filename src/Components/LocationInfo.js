const LocationInfo = ({ name, type, dimension, population }) => {
    return (
        <div>
          <h2 >{name}</h2>
            <div className="row">
          <div>
            <b>Tipo: </b>
            {type}
          </div>
          <div>
            <b>Dimensión: </b>
            {dimension}
          </div>
          <div>
            <b>Residentes: </b>
            {population}
          </div>
        
      </div>
        </div>
    );
  };
  
  export default LocationInfo;