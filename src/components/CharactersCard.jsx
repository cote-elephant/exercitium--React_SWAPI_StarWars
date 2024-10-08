export function CharactersCard({ char }) {
  const { name, birth_year } = char;

  const profilePic = [];

  return (
    <>
      <h3>{name}</h3>
      <p>came into existence on {birth_year}</p>

      {profilePic.map((pic) => {
        // const altText = pic.includes("C-3PO") ? "C-3PO" :
        // pic.includes("Darth-Vader") ? "Darth Vader" :
        // pic.includes("R2-D2") ? "R2-D2" :
        // "Unknown Character";
        if (
          pic.includes("C-3PO") ||
          pic.includes("Darth-Vader") ||
          pic.includes("R2-D2")
        ) {
          return <img src={pic} alt={pic} key={pic[pic]} />;
        }
      })}
    </>
  );
}
