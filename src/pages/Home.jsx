import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <section
        className="bg-home-mobile 
                   md:bg-home-tablet
                   lg:bg-home-desktop
                   bg-cover 
                   bg-no-repeat 
                   min-h-screen"
      >
        <div
          className="flex 
                     flex-col
                     items-center
                     py-[175px] 
                     lg:items-end
                     lg:flex-row
                     lg:justify-around"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="flex
                       flex-col
                       text-center
                       w-[327px]
                       md:w-[450px]
                       lg:text-start
                       lg:-ml-6"
          >
            <h2
              className="font-condensed
                       text-base
                       md:text-xl
                       lg:text-[28px]
                       tracking-[2.7px]
                       text-Azul-Lavanda
                      "
            >
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1
              className="text-White
                         text-[80px]
                         font-bellefair
                         md:text-[150px]"
            >
              SPACE
            </h1>
            <p
              className="font-barlow 
                       text-base
                       lg:text-lg
                       lg:text-justify
                     text-Azul-Lavanda
                       px-5
                       md:px-2
                       lg:px-0
                       "
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="
                       mt-16
                       md:mt-28
                       lg:mt-0"
          >
            <NavLink
              to={"/destination"}
              className="flex
                        items-center
                        justify-center
                        w-[150px]
                        h-[150px]
                      bg-White
                        font-bellefair
                        rounded-full
                        relative
                        z-[1]
                        hover:after:content-['']
                        hover:after:-z-[1]
                        hover:after:absolute
                        hover:after:bg-White
                        hover:after:opacity-20
                        hover:after:w-full
                        hover:after:h-full
                        hover:after:rounded-full
                        hover:after:scale-150
                        md:w-[242px]
                        md:h-[242px]
                        md:text-3xl
                        lg:w-[274px]
                        lg:h-[274px]
                        "
            >
              EXPLORE
            </NavLink>
          </motion.div>
        </div>
      </section>
    </>
  );
};
