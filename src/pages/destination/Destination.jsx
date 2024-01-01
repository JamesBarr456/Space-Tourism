import { useState } from 'react';
import { Destinations } from '../../componentes/Data';
import { SelectPlanet } from './SelectPlanet';
import { motion } from 'framer-motion';
export const Destination = () => {
  const [planet, setPlanet] = useState('moon');
  const { images, name, description, distance, travel } = Destinations.find(
    (pl) => pl.name === planet
  );

  return (
    <main className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover bg-no-repeat min-h-screen">
      <section className="container text-White font-Barlow pt-20 pb-20 mx-auto md:pt-36 lg:pt-64 flex flex-col items-center text-center">
        <h2 className="font-condensed tracking-[2.7px] md:text-xl lg:text-[28px] lg:tracking-[4.72px] w-full mb-10 xl:pl-28 xl:mb-20 md:text-start">
          <span className="font-bold opacity-25 mr-2">01</span>PICK YOUR
          DESTINATION
        </h2>
        <div className="lg:flex lg:justify-around md:w-[80%] lg:w-full">
          <picture className="flex justify-center lg:items-center">
            <motion.img
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              src={images.png}
              alt={name}
              className="w-[150px] md:w-[350px] md:h-[350px] xl:w-[450px] xl:h-[450px]"
            />
          </picture>
          <div className="lg:w-[44.5%] xl:w-[32%]">
            <div className="border-b border-[#d3d3d369] mx-8 md:mx-0">
              <SelectPlanet setPlanet={setPlanet} />
              <h1 className="font-bellefair uppercase text-6xl lg:text-8xl">
                {name}
              </h1>
              <p className="text-Azul-Lavanda lg:text-start my-5">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-8 md:grid md:grid-rows-2 md:grid-flow-col mt-8">
              <h3 className="font-condensed text-Azul-Lavanda tracking-[2.7px]">
                AVG. DISTANCE
              </h3>
              <span className="font-bellefair uppercase text-3xl">
                {distance}
              </span>
              <h3 className="font-condensed text-Azul-Lavanda tracking-[2.7px]">
                EST. TRAVEL TIME
              </h3>
              <span className="text-3xl uppercase font-bellefair">
                {travel}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
