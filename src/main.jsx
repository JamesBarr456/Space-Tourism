import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { SpaceTourism } from "./SpaceTourism";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <SpaceTourism />
    </React.StrictMode>
  </BrowserRouter>
);
