import { MovieCard } from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
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
    <div className="movies-container">
      <h1>Movies</h1>
      {filmsData && filmsData?.length > 0 && Array.isArray(filmsData) && (
        <div className="movies-list">
          {filmsData.map((film) => {
            return <MovieCard film={film} key={film.episode_id} />;
          })}
        </div>
      )}
    </div>
  );
}
