import people from "../assets/crew/image-douglas-hurley.webp";
export const Crew = () => {
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
            src={people}
            alt=""
          />
          <div
            className="flex 
                       gap-4 
                       my-10
                       md:order-2  
                       lg:justify-center 
                       lg:order-3 
                       lg:w-full"
          >
            <button
              type="button"
              className="rounded-full
                      bg-White 
                         w-[10px] 
                         h-[10px]"
            ></button>
            <button
              type="button"
              className="rounded-full
                       bg-White 
                        w-[10px] 
                        h-[10px]"
            ></button>
            <button
              type="button"
              className="rounded-full
                       bg-White 
                        w-[10px] 
                        h-[10px]"
            ></button>
            <button
              type="button"
              className="rounded-full
                       bg-White 
                        w-[10px] 
                        h-[10px]"
            ></button>
          </div>
          <div
            className="font-bellefair  
                     text-Azul-Claro 
                       md:w-[65%] 
                       lg:w-full "
          >
            <h3 className="lg:text-3xl">COMMANDER</h3>
            <h1
              className="text-2xl
                       text-White 
                         mt-2 mb-7 
                         lg:text-[48px]"
            >
              DOUGLAS HURLEY
            </h1>
            <p
              className="font-barlow 
                         mb-10 
                         lg:text-xl "
            >
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
