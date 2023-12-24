import { useState } from "react";
import { Destinations } from "../../componentes/Data";
import { SelectPlanet } from "./SelectPlanet";
import { motion } from "framer-motion";
export const Destination = () => {
  const [planet, setPlanet] = useState("moon");

  const planetDestiny = () => {
    return Destinations.find((pl) => pl.name === planet);
  };
  const foundDestination = planetDestiny();
  return (
    <section
      className="bg-destination-mobile 
                 bg-cover 
                 bg-no-repeat 
                 text-center
                 min-h-screen
                text-White
                 px-6
                 font-Barlow
                 pt-40
                 md:bg-destination-tablet
                 md:px-20
                 lg:bg-destination-desktop"
    >
      <h2
        className="tracking-[2.7px]
                       w-full
                       mb-10
                       lg:text-3xl
                       md:text-start"
      >
        <span
          className="font-bold 
                         opacity-25 
                         mr-2"
        >
          01
        </span>
        PICK YOUR DESTINATION
      </h2>
      <div
        className="lg:grid
                   lg:grid-cols-2
                   lg:grid-flow-row
                   lg:justify-items-end"
      >
        <div /** figura */
          className="flex 
                     justify-center
                     lg:items-center
                     w-full"
        >
          <motion.img
            animate={{ rotate: 360 }} // Aplicar la animación de rotación
            transition={{
              duration: 20, // Duración de cada ciclo de rotación en segundos
              repeat: Infinity, // Bucle infinito
              ease: "linear", // Tipo de animación lineal
            }}
            src={foundDestination.images.png}
            alt={foundDestination.name}
            className="w-[40%] 
                       lg:w-[350px] 
                       lg:h-[350px] 
                       xl:w-[450px] 
                       xl:h-[450px]"
          />
        </div>
        <div className="lg:w-[70%]">
          <div /** texto */
            className="border-b 
                     border-[#d3d3d369]
                     pb-8"
          >
            <SelectPlanet setPlanet={setPlanet}></SelectPlanet>
            <h1
              className="text-[56px] 
                         font-bellefair
                         uppercase
                         xl:text-[100px]"
            >
              {foundDestination.name}
            </h1>
            <p
              className="text-lg
                          text-Azul-Lavanda
                          lg:text-start"
            >
              {foundDestination.description}
            </p>
          </div>
          <div /** datos */
            className="flex
                     flex-col
                     gap-5
                     py-8
                     md:grid
                     md:grid-rows-2
                     md:grid-flow-col"
          >
            <h3
              className=" font-condensed
                      text-Azul-Lavanda 
                        tracking-[2.7px]"
            >
              AVG. DISTANCE
            </h3>
            <span
              className="text-3xl 
                         font-bellefair
                         uppercase"
            >
              {foundDestination.distance}
            </span>
            <h3
              className="font-condensed
                     text-Azul-Lavanda 
                       tracking-[2.7px]"
            >
              EST. TRAVEL TIME
            </h3>
            <span
              className="text-3xl 
                         font-bellefair
                         uppercase"
            >
              {foundDestination.travel}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
