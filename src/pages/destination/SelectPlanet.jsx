import { useState } from 'react';
import { motion } from 'framer-motion';
import { Planets } from '../../componentes/Data';

export const SelectPlanet = ({ setPlanet }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(0);
  const handlePlanet = (type, index) => {
    setPlanet(type.toLowerCase());
    setClickedIndex(index);
  };

  return (
    <>
      <div
        className="flex 
                   gap-4 
                   font-condensed
                   my-10
                   justify-center
                  text-Azul-Lavanda
                   lg:w-full"
      >
        {Planets.map((planet, index) => (
          <div key={planet.id} className="relative">
            <motion.button
              type="button"
              onClick={() => handlePlanet(planet.name, index)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="tracking-[2.7px] py-2"
            >
              {planet.name}
            </motion.button>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{
                scaleX:
                  hoveredIndex === index || clickedIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '100%',
                height: 3,
                background: clickedIndex === index ? 'white' : 'gray',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
