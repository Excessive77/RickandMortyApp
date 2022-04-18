import React, { useEffect, useState } from "react";
import axios from "axios";
import ResidentInfo from "./ResidentInfo";

const ResidentContainer = ({ url }) => {
  const [residents, setResidents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const residentsPerPage = 10;

  useEffect(() => {
    const promise = axios(url);
    promise.then((res) => {
      setResidents(res.data.residents);
      setCurrentPage(1);
    });
  }, [url]);

  const indexOfLastResident = currentPage * residentsPerPage;
  const indexOfFirstResident = indexOfLastResident - residentsPerPage;
  const currentResidentsShowed = residents.slice(indexOfFirstResident,indexOfLastResident);

  
  return (
    <div>
      <h3>Residentes</h3>
        <div className="resident-container">
      <div className="card">
        {currentResidentsShowed.map((url) => (
          <div>
            <ResidentInfo key={url.substring(42)} url={url} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ResidentContainer;