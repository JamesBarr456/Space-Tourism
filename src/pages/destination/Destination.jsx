import { useState } from "react";
import { Destinations } from "../../componentes/Data";
import { SelectPlanet } from "./SelectPlanet";
export const Destination = () => {
  const [planet, setPlanet] = useState("moon");
  const planetDestiny = () => {
    const foundDestination = Destinations.find((pl) => pl.name === planet);
    return [foundDestination]; // Devuelve un array con el destino encontrado
  };

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
          <img
            src=""
            alt=""
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
            <div
              className="flex 
                       gap-4 
                       font-condensed
                       my-10
                       justify-center
                       text-Azul-Lavanda
                       lg:w-full"
            >
              <button
                type="button"
                className="tracking-[2.7px]
                           py-2"
              >
                MOON
              </button>
              <button
                type="button"
                className="tracking-[2.7px]
                           py-2"
              >
                MARS
              </button>
              <button
                type="button"
                className="tracking-[2.7px]
                           py-2"
              >
                EUROPA
              </button>
              <button
                type="button"
                className="tracking-[2.7px]
                           py-2"
              >
                TITAN
              </button>
            </div>
            <h1
              className="text-[56px] 
                         font-bellefair
                         xl:text-[100px]"
            >
              MOON
            </h1>
            <p
              className="text-lg
                          text-Azul-Lavanda
                          lg:text-start"
            >
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
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
                       font-bellefair"
            >
              384,400 KM
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
                       font-bellefair"
            >
              3 DAYS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
