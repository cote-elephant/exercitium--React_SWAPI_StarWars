import { useState, useEffect } from "react";
import { fetchData } from "../utils/fetchData.js";

import { CharactersCard } from "../components/CharactersCard.jsx";

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
      <div className="films-page">
        <h1>Characters from Movies</h1>
        {charData && charData?.length > 0 && Array.isArray(charData) && (
          <div className="char-page">
            {" "}
            {charData.map((char) => {
              return <CharactersCard char={char} key={char.name} />;
            })}
          </div>
        )}
      </div>
    </>
  );
}
