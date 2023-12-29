import { useState } from "react";
import { Crews } from "../../componentes/Data";
import { SelectPeople } from "./SelectPeople";
export const Crew = () => {
  const [crew, setCrew] = useState(Crews[0].name)
  const findPeople = () => {
    return Crews.find((objeto) => objeto.name === crew);
  };
  const names = Crews.map(objeto => objeto.name)
  const foundPeople = findPeople()
  return (
    <main
      className="
                bg-crew-mobile  md:bg-crew-tablet lg:bg-crew-desktop
                bg-cover bg-no-repeat 
                min-h-screen  
                "
    >
      <section
        className="
                  container
                text-White font-Barlow 
                  pt-20 pb-20 px-5 mx-auto md:pt-36 lg:pt-64
                  flex flex-col items-center 
                  "
      >
        <h2
          className="
                    font-condensed tracking-[2.7px] md:text-xl lg:text-[28px] lg:tracking-[4.72px]
                    w-full
                    mb-10 xl:pl-28 xl:mb-20
                    text-center md:text-start
                    "
        >
          <span
            className="font-bold opacity-25 mr-2"
          >
            02
          </span>
          MEET YOUR CREW
        </h2>
        <div>
          <picture
            className="
                      
                      w-full 
                      border-b border-Gris-Claro
                      flex justify-center">
            <img
              src={foundPeople.images.png}
              alt={foundPeople.name}
              className="h-[223px] "
            />
          </picture>

          <div
            className="
               
                    flex flex-col items-center">
            <SelectPeople names={names} setCrew={setCrew}></SelectPeople>
            <h3
              className="font-bellefair uppercase text-Gris-Claro">{foundPeople.role}</h3>
            <h1
              className="font-bellefair uppercase text-2xl
                         my-2">
              {foundPeople.name}
            </h1>
            <p
              className="
                        font-barlow text-[15px] text-Azul-Lavanda
                        px-4
                        text-center">
              {foundPeople.bio}
            </p>
          </div>
        </div>
      </section>
    </main >
  );
};
