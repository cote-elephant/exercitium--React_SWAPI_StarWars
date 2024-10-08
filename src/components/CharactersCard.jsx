export function CharactersCard({ char }) {
  const { name, birth_year } = char;

  const profilePic = {
    "C-3PO": "../assets/C-3PO.jpg",
    "Darth-Vader": "../assets/Darth-Vader.png",
    "R2-D2": "../assets/R2-D2.jpg",
  };

  const pic = profilePic[name];
  // const altText = pic.includes("C-3PO") ? "C-3PO" :
  // pic.includes("Darth-Vader") ? "Darth Vader" :
  // pic.includes("R2-D2") ? "R2-D2" :
  // "Unknown Character";
  return (
    <>
    <div className="char-container">
      <h3>{name}</h3>
      <p>came into existence on {birth_year}</p>

      {pic && <img src={pic} alt={pic} key={pic[pic]} />}
   </div> </>
  );
}
