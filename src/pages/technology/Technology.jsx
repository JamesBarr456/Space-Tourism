import {  useState } from "react";
import { Technologys } from "../../componentes/Data"
import { SelectTecnology } from "./SelectTecnology";
export const Technology = () => {
  const [tecno, setTecno] = useState(0)
  const counts = Technologys.map((objeto, index) => index);
  const Tech = Technologys[tecno]
  
  return (

    <main
      className="
                bg-tech-mobile md:bg-tech-tablet lg:bg-tech-desktop
                bg-cover bg-no-repeat 
                min-h-screen  
                "
    >
      <section
        className="
                  container
                text-White font-Barlow 
                  pt-20 pb-20  mx-auto md:pt-36 lg:pt-64
                  flex flex-col items-center text-center lg:items-start
                  "
      >
        <h2
          className="
                    font-condensed tracking-[2.7px] md:text-xl lg:text-[28px] lg:tracking-[4.72px]
                    w-full
                    mb-10 xl:pl-28 xl:mb-20
                    md:text-start
                    "
        >
          <span
            className="
                      font-bold opacity-25 
                      mr-2
                      "
          >
            03
          </span>
          SPACE LAUNCH 101
        </h2>
        <div
          className="
                    md:flex md:flex-col md:items-center lg:flex-row-reverse lg:justify-evenly
                    "
        >
          <picture
          >
            <source media="(min-width: 1024px)" srcSet={Tech.images.portrait}></source>
            <img
              src={Tech.images.landscape}
              alt={Tech.name}
              className="md:h-[310px] lg:h-full"
            />
          </picture>
          <div className="md:w-[58%] lg:w-[44.5%] xl:w-[40%]
                         lg:flex lg:gap-10">
            <SelectTecnology
              counts={counts}
              setTecno={setTecno}
            ></SelectTecnology>
            <div /** texto */
              className="
                        mx-14 md:mx-0 
                        lg:flex lg:flex-col lg:justify-center lg:text-start"
            >

              <h3 className="font-condensed text-sm tracking-[2.36px] text-Azul-Claro"
              >
                THE TERMINOLOGY...
              </h3>
              <h1
                className="
                          font-bellefair  uppercase text-2xl md:text-[40px] xl:text-5xl
                          my-5 
                          "
              >
                {Tech.name.toUpperCase()}
              </h1>
              <p
                className="text-Azul-Lavanda lg:text-lg 
                          lg:pr-7"
              >
                {Tech.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
