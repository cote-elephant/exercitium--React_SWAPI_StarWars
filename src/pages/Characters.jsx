import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData.js";

import { CharactersCard } from "../components/CharactersCard.jsx";
import "../styles/main.scss";

export function Characters() {
  const [charData, setCharData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData("people")
      .then((data) => setCharData(data))
      .catch((e) => setError(JSON.stringify(e)));
  });

  return (
    <>
      <div className="page">
        <h1>Characters</h1>
        {charData && charData?.length > 0 && Array.isArray(charData) && (
          <div className="container">
            {charData.map((char) => {
              return <CharactersCard char={char} key={char.name} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
