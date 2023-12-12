import React from "react";

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
        <div className="lg:flex md:pt-[100px] lg:pt-[200px] lg:pl-[165px]">
          <div
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
          </div>
          <div className="flex
                          justify-center
                          items-end 
                          w-full">
            <button
              className="bg-White
                        font-bellefair
                        w-[150px]
                        h-[150px]
                        lg:w-[274px]
                        lg:h-[274px]
                        rounded-full
                        my-12
                        lg:text-3xl"
            >
              EXPLORE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
