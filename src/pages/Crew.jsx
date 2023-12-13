import people from "../assets/crew/image-douglas-hurley.webp";
export const Crew = () => {
  return (
    <>
      <section
        className="bg-crew-mobile 
                   md:bg-crew-tablet
                   lg:bg-crew-desktop
                   bg-cover 
                   bg-no-repeat 
                   min-h-screen"
      >
        <div
          className="flex
                     flex-col
                     items-center 
                     px-6 
                     text-White"
        >
          <h2
            className="font-Barlow
                       tracking-[2.7px]
                       w-full
                       mt-28
                       md:mt-36
                       mb-10
                       text-center
                       md:text-start"
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
          <div className="order-2 md:order-1 font-bellefair text-center text-Azul-Claro">
            <h3>COMMANDER</h3>
            <h1 className="text-2xl text-White mt-2 mb-7">DOUGLAS HURLEY</h1>
            <p className="font-barlow mb-10">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <img
            className="h-52 mx-auto md:mx-0 md:mt-6 order-1 md:order-2"
            src={people}
            alt=""
          />
          <div className="flex gap-4 my-10">
            <button
              type="button"
              className="rounded-full bg-White w-[10px] h-[10px]"
            ></button>
            <button
              type="button"
              className="rounded-full bg-White w-[10px] h-[10px]"
            ></button>
            <button
              type="button"
              className="rounded-full bg-White w-[10px] h-[10px]"
            ></button>
            <button
              type="button"
              className="rounded-full bg-White w-[10px] h-[10px]"
            ></button>
          </div>
        </div>
      </section>
    </>
  );
};
