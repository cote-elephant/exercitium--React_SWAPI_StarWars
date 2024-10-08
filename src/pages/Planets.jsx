import { useState, useEffect } from "react";

import { PlanetsCard } from "../components/PlanetsCard.jsx";

import { fetchData } from "../utils/fetchData.js";

import "../styles/main.css"

export function Planets() {
  const [planetsData, setPlanetsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("planets")
      .then((data) => setPlanetsData(data))
      .catch((e) => setError(e));
  }, []);

  return (
    <div className="planets-page">
      <h1>Planets</h1>
      {planetsData && planetsData?.length > 0 && Array.isArray(planetsData) && (
        <div className="planets-container">
          {planetsData.map((planet, id) => {
            return <PlanetsCard planet={planet} key={id} />;
          })}
        </div>
      )}
    </div>
  );
}
