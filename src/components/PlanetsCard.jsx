export function PlanetsCard({ planet }) {
  const { name, diameter, gravity, population } = planet;

  return (
    <>
      <div className="planet-container">
        <h3>{name}</h3>
        <p>{diameter}</p>
        <p>{gravity} </p>
        <p>{population}</p>
      </div>
    </>
  );
}
