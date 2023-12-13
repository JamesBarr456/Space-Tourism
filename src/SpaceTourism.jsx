import { Routes, Route, Navigate } from "react-router-dom";
import { Crew } from "./pages/Crew";
import { Home } from "./pages/Home";
import { Destination } from "./pages/Destination";
import { Technology } from "./pages/Technology";
import { Navbar } from "./componentes/navbar/Navbar.jsx";
export const SpaceTourism = () => {
  return (
    <>
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
    </>
  );
};
