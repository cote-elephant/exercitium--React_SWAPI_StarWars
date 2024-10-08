import { NavLink } from "react-router-dom";
import "../styles/main.css";

export function Header() {
  const activeState = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "gray" : "orange",
      padding: isActive ? "5px 25px" : "5px 10px",
      border: isActive ? "black solid 2px" : "none",
      borderColor: isActive ? "gray" : "none",
    };
  };

  return (
    <>
      <header>
        <h1>
          React Project <span>Star Wars</span>
        </h1>
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
