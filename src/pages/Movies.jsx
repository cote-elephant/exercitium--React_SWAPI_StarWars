import { useEffect, useState } from "react";

import { MovieCard } from "../components/MovieCard.jsx";

import { fetchData } from "../utils/fetchData.js";

// import { styled } from "styled-components";
import "../styles/main.css";

// const StyledFilmsPage = styled.div`

//   }
// `;
export function Movies() {
  const [filmsData, setFilmsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("films")
      .then((data) => setFilmsData(data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);

  return (
    <div className="movies-page">
      <h2>Movies</h2>
      {filmsData && filmsData?.length > 0 && Array.isArray(filmsData) && (
        <div className="movies-container">
          {filmsData.map((film) => {
            return <MovieCard film={film} key={film.episode_id} />;
          })}
        </div>
      )}
    </div>
  );
}
