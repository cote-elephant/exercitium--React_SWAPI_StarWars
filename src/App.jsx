import { Outlet } from "react-router-dom";
import { Header } from "./components/Header.jsx";

export function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
