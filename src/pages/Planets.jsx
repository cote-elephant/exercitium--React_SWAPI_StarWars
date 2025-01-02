import { useState, useEffect } from "react";

import { PlanetsCard } from "../components/PlanetsCard.jsx";

import { fetchData } from "../utils/fetchData.js";

import "../styles/main.scss";

export function Planets() {
  const [planetsData, setPlanetsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("planets")
      .then((data) => setPlanetsData(data))
      .catch((e) => setError(e));
  }, []);

  return (
    <div className="page">
      <h1>Planets</h1>
      {error && <p className="error-message">{error}</p>}

      {planetsData && planetsData?.length > 0 && Array.isArray(planetsData) ? (
        <div className="container">
          {planetsData.map((planet, id) => {
            return <PlanetsCard planet={planet} key={id} />;
          })}
        </div>
      ) : (
        !error && <p>Loading movies...</p>
      )}
    </div>
  );
}
