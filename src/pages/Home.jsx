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
          className="lg:flex 
                      md:pt-[100px] 
                      lg:pt-[160px] 
                      lg:justify-around">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex
                     flex-col
                     lg:w-[450px]
                     items-center
                     px-6
                     lg:px-0
                     pt-28
                     lg:pt-0"
          >
            <h2
              className="font-condensed
                       text-base
                       md:text-xl
                       lg:text-[28px]
                       tracking-[2.7px]
                       text-Azul-Lavanda
                       mb-6"
            >
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1
              className="text-White
                         text-[80px]
                         md:text-[150px]
                        font-bellefair
                        mb-6"
            >
              SPACE
            </h1>
            <p
              className="font-barlow 
                       text-sm
                       lg:text-lg
                       lg:text-justify
                     text-Azul-Lavanda
                       text-center
                       px-4
                       md:w-[60%]
                       lg:w-full
                       lg:px-0
                       mb-14"
            >
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of it.
              Well sit back, and relax because we’ll give you a truly out of this
              world experience!
            </p>
          </motion.div>
          <motion.div 
            initial= {{x:400, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration:1.5}}
            className="flex
                        justify-center
                        items-end"
            >
            <NavLink
              to={"/destination"}
              className="flex
                        items-center
                        justify-center
                      bg-White
                        font-bellefair
                        rounded-full
                        my-12
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
                        w-[150px]
                        h-[150px]
                        lg:w-[274px]
                        lg:h-[274px]
                        lg:text-3xl"
            >
              EXPLORE
            </NavLink>
          </motion.div>
        </div>
      </section>
    </>
  );
};
