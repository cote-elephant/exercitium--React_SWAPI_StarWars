import { MovieCard } from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData.js";
import { styled } from "styled-components";
import "../styles/main.css";

const StyledFilmsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;
export function Movies() {
  const [filmsData, setFilmsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("films")
      .then((data) => setFilmsData(data))
      .catch((e) => setError(JSON.stringify(e)));
  }, []);

  return (
    <div className="films-page">
      <h1>Movies</h1>
      {filmsData && filmsData?.length > 0 && Array.isArray(filmsData) && (
        <StyledFilmsContainer className="films-container">
          {filmsData.map((film) => {
            return <MovieCard film={film} key={film.episode_id} />;
          })}
        </StyledFilmsContainer>
      )}
    </div>
  );
}
