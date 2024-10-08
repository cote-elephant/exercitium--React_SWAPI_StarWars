import { NavLink } from "react-router-dom";
import "../styles/main.css";

export function Header() {
  const activeState = ({ isActive }) => {
    return {
      color: isActive ? "black" : "orange",
      padding: isActive ? "5px 15px" : "none",
      border: isActive ? "black solid 2px" : "none",
    };
  };
  return (
    <>
      <header>
        <h1>React Project</h1>
        <ul>
          <li>
            <NavLink to="/movies" style={activeState}>
              movies
            </NavLink>
          </li>
          <li>
            <NavLink to="/characters" style={activeState}>
              characters
            </NavLink>
          </li>
          <li>
            <NavLink to="planets" style={activeState}>
              planets
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}
