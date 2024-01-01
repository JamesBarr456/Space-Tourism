import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { useNavbarContext } from '../componentes/navbar/NavbarContext';
export const Home = () => {
  const { updateClickedIndex } = useNavbarContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 2 } },
  };

  return (
    <main className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover bg-no-repeat min-h-screen">
      <section className="container flex flex-col items-center pt-32 pb-32 mx-auto md:pt-64 lg:items-end lg:flex-row lg:justify-around">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col text-center lg:text-start text-Azul-Lavanda w-[75%] md:w-[60%] lg:w-[448px] lg:-ml-8"
        >
          <h2 className="font-condensed md:text-xl lg:text-[28px] tracking-[2.7px]">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1 className="text-White text-[80px] font-bellefair md:text-[150px]">
            SPACE
          </h1>
          <p className="font-barlow text-sm lg:text-lg lg:text-justify">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-16 md:mt-28 lg:mt-0"
          onClick={() => updateClickedIndex(1)}
        >
          <NavLink
            to="/destination"
            className="bg-White font-bellefair md:text-3xl flex items-center justify-center relative z-[1] w-[150px] h-[150px] md:w-[242px] md:h-[242px] lg:w-[274px] lg:h-[274px] rounded-full hover:after:content-[''] hover:after:bg-White hover:after:opacity-20 hover:after:-z-[1] hover:after:absolute hover:after:w-full hover:after:h-full hover:after:rounded-full hover:after:scale-150"
          >
            EXPLORE
          </NavLink>
        </motion.div>
      </section>
    </main>
  );
};
