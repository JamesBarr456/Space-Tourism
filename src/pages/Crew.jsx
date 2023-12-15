import { useState } from "react";

import { Crews } from "../componentes/Data";
import { SelectPeople } from "./SelectPeople";
export const Crew = () => {
  const [crew, setCrew] = useState(Crews[0].name)
  const findPeople = () => {
    return Crews.find((objeto) => objeto.name === crew);
  };
  const names = Crews.map( objeto => objeto.name)
  const foundPeople = findPeople()
  return (
    <>
      <section
        className="bg-crew-mobile 
                   bg-cover 
                   bg-no-repeat 
                   text-center
                   min-h-screen
                   px-20
                   pt-40
                  text-White
                   md:bg-crew-tablet
                   lg:text-start
                   lg:bg-crew-desktop"
      >
        <h2
          className="font-Barlow
                       tracking-[2.7px]
                       w-full
                       mb-10
                       lg:text-3xl
                       "
        >
          <span
            className="font-bold 
                         opacity-25 
                         mr-2"
          >
            02
          </span>
          MEET YOUR CREW
        </h2>
        <div
          className="flex
                     flex-col
                     items-center
                     lg:items-star
                     lg:w-[50%]
                     xl:w-[40%]"
        >
          <img
            className="h-52 
                     border-White 
                       border-b 
                       md:border-0 
                       md:h-[420px] 
                       md:mt-2 
                       md:order-3 
                       lg:h-[75%] 
                       lg:order-2 
                       lg:absolute 
                       lg:bottom-0 
                       lg:right-[10%]"
            src={foundPeople.images.png}
            alt={foundPeople.name}
          />
          <SelectPeople
            names={names}
            setCrew={setCrew}
          ></SelectPeople>
          <div
            className="font-bellefair  
                     text-Azul-Claro 
                       md:w-[65%] 
                       lg:w-full "
          >
            <h3 className="lg:text-3xl">{foundPeople.role}</h3>
            <h1
              className="text-2xl
                       text-White 
                         mt-2 mb-7 
                         lg:text-[48px]"
            >
              {foundPeople.name}
            </h1>
            <p
              className="font-barlow 
                         mb-10 
                         lg:text-xl "
            >
              {foundPeople.bio}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
