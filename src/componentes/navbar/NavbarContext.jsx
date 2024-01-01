import React, { createContext, useContext, useState, useEffect } from 'react';

const NavbarContext = createContext();

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export const NavbarProvider = ({ children }) => {
  const [clickedIndex, setClickedIndex] = useState(() => {
    const savedClickedIndex = localStorage.getItem('clickedIndex');
    return savedClickedIndex !== null ? JSON.parse(savedClickedIndex) : 0;
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('clickedIndex', JSON.stringify(clickedIndex));
  }, [clickedIndex]);

  const updateClickedIndex = (index) => {
    setClickedIndex(index);
  };

  const updateHoveredIndex = (index) => {
    setHoveredIndex(index);
  };

  return (
    <NavbarContext.Provider
      value={{
        clickedIndex,
        hoveredIndex,
        updateHoveredIndex,
        updateClickedIndex,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
