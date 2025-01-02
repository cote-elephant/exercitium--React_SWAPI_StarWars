import { useEffect, useState } from "react";

import { MovieCard } from "../components/MovieCard.jsx";
import { fetchData } from "../utils/fetchData.js";
import "../styles/main.scss";

export function Movies() {
  const [filmsData, setFilmsData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("films")
      .then((data) => setFilmsData(data))
      .catch((e) => setError("Failed to fetch data. Please try again later."));
  }, []);

  return (
    <div className="page">
      <h1>Movies</h1>
      {error && <p className="error-message">{error}</p>}
      
      {filmsData && Array.isArray(filmsData) && filmsData.length > 0 ? (
        <div className="container">
          {filmsData.map((film) => (
            <MovieCard film={film} key={film.episode_id} />
          ))}
        </div>
      ) : (
        !error && <p>Loading movies...</p>
      )}
    </div>
  );
}
