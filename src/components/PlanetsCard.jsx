export function PlanetsCard({ planet }) {
  const { name, diameter, gravity, population } = planet;

  return (
    <>
      <div className="info-box">
        <h3>Name: {name}</h3>
        <p>Diameter: {diameter}</p>
        <p>Gravity: {gravity} </p>
        <p>Population: {population}</p>
      </div>
    </>
  );
}
