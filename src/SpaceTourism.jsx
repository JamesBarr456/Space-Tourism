import { Routes, Route, Navigate } from "react-router-dom";
import { Crew } from "./pages/crew/Crew.jsx";
import { Home } from "./pages/Home";
import { Destination } from "./pages/destination/Destination.jsx";
import { Technology } from "./pages/technology/Technology.jsx";
import { Navbar } from "./componentes/navbar/Navbar.jsx";
import { NavbarProvider } from "./componentes/navbar/NavbarContext.jsx";
export const SpaceTourism = () => {
  return (
    <>
      <NavbarProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/destination"
            element={<Destination></Destination>}
          ></Route>
          <Route path="/crew" element={<Crew></Crew>}></Route>
          <Route path="/technology" element={<Technology></Technology>}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
      </NavbarProvider>
    </>
  );
};
