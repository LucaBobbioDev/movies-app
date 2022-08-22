import { Outlet } from "react-router-dom";

import NavBar from "./components/Navbar.jsx";

export default function App() {
  return (
    <>
      <NavBar/>
      <Outlet/>
    </>
  );
}




