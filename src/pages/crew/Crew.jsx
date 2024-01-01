import { useState } from 'react';
import { Crews } from '../../componentes/Data';
import { SelectPeople } from './SelectPeople';
export const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState(Crews[0].name);

  const findCrewMember = () =>
    Crews.find((objeto) => objeto.name === selectedCrew);
  const crewNames = Crews.map((objeto) => objeto.name);
  const crewMember = findCrewMember();

  return (
    <main className="bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover bg-no-repeat min-h-screen">
      <section className="container text-White font-Barlow pt-20 pb-20 px-5 mx-auto md:pt-36 md:pb-[400px] lg:pt-64 lg:pb-0 flex flex-col items-center relative">
        <h2 className="font-condensed tracking-[2.7px] md:text-xl lg:text-[28px] lg:tracking-[4.72px] w-full mb-10 lg:mb-40 xl:pl-20 text-center md:text-start">
          <span className="font-bold opacity-25 mr-2">02</span>MEET YOUR CREW
        </h2>
        <div>
          <picture className="w-full border-b border-Gris-Claro md:border-0 flex justify-center md:absolute md:bottom-0 lg:right-0 lg:justify-end xl:right-20">
            <img
              src={crewMember.images.png}
              alt={crewMember.name}
              className="h-[223px] md:h-[420px] lg:h-[550px]"
            />
          </picture>

          <div className="xl:pl-16 flex flex-col items-center lg:items-start">
            <SelectPeople names={crewNames} setCrew={setSelectedCrew} />
            <h3 className="font-bellefair uppercase text-Gris-Claro md:text-2xl lg:text-3xl">
              {crewMember.role}
            </h3>
            <h1 className="font-bellefair uppercase text-2xl md:text-[40px] lg:text-[56px] my-2 md:my-4 lg:my-10">
              {crewMember.name}
            </h1>
            <p className="font-barlow text-[15px] md:text-base lg:text-lg text-Azul-Lavanda px-4 lg:px-0 md:w-[85%] lg:w-[50%] xl:w-[42%] xl:h-28 text-center lg:text-start">
              {crewMember.bio}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
