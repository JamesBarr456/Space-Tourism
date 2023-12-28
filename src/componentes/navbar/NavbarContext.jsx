import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export const NavbarProvider = ({ children }) => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const updateClickedIndex = (index) => {
    setClickedIndex(index);
  };
  const updateHoveredIndex = (index) => {
    setHoveredIndex(index);
  };

  return (
    <NavbarContext.Provider value={{ clickedIndex, hoveredIndex, updateHoveredIndex, updateClickedIndex }}>
      {children}
    </NavbarContext.Provider>
  );
};