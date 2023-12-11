import React from "react";

export const Home = () => {
  return (
    <>
      <section
        className="bg-home-mobile 
                   bg-cover 
                   bg-no-repeat 
                   min-h-screen"
      >
        <div
          className="flex
                     flex-col
                     items-center
                     px-6
                     pt-28"
        >
          <h2
            className="font-condensed
                       text-base
                       tracking-[2.7px]
                       text-Azul-Lavanda
                       mb-6"
          >
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h1
            className="text-White
                         text-[80px]
                        font-bellefair
                        mb-6"
          >
            SPACE
          </h1>
          <p
            className="font-barlow 
                       text-sm
                     text-Azul-Lavanda
                       text-center
                       px-4
                       mb-14"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
          <button
            className="bg-White
                        font-bellefair
                        w-[150px]
                        h-[150px]
                        rounded-full
                        my-12"
          >
            EXPLORE
          </button>
        </div>
      </section>
    </>
  );
};
