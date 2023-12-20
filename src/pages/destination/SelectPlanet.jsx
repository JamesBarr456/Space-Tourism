import { useState } from "react";
import { motion } from "framer-motion";

const listPlanets = [
  {
    id: "60",
    name: "MOON",
  },
  {
    id: "61",
    name: "MARS",
  },
  {
    id: "62",
    name: "EUROPA",
  },
  {
    id: "63",
    name: "TITAN",
  },
];
export const SelectPlanet = ({ setPlanet }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(0);
  const handlePlanet = (type, index) => {
    setPlanet(type.toLowerCase())
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
        {listPlanets.map((planet, index) => (
          <div key={planet.id} className="relative">
            <motion.button
              type="button"
              onClick={() => 
                handlePlanet(planet.name, index)
              }
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
                position: "absolute",
                bottom: -8,  // Ajusta la posición vertical según tus necesidades
                left: 0,
                width: "100%",
                height: 3,
                background: 
                  clickedIndex === index ? "white" :  "gray"
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};
