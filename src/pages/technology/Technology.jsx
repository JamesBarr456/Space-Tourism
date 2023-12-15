import { useEffect, useState } from "react";
import { Technologys } from "../../componentes/Data"
import { SelectTecnology } from "./SelectTecnology";
export const Technology = () => {
  const [tecno, setTecno] = useState(0)
  const counts = Technologys.map((objeto, index) => index);
  const Tech = Technologys[tecno]
  const [isMobile, setIsMobile] = useState(window.matchMedia("(max-width: 1280px)").matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width: 1280px)");
    const handleWidthChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQueryList.addEventListener("change", handleWidthChange);
    return () => {
      mediaQueryList.removeEventListener("change", handleWidthChange);
    };
  }, []);
  return (
    <>
      <section
        className="bg-tech-mobile 
                     bg-cover 
                     bg-no-repeat 
                     text-center
                     min-h-screen
                     pt-40
                   text-White
                     md:bg-tech-tablet
                     lg:bg-tech-desktop
                     xl:text-start"
      >
        <h2
          className="font-Barlow
                     tracking-[2.7px]
                     w-full
                     mb-10
                     md:text-start
                     md:pl-20
                     lg:text-3xl"
        >
          <span
            className="font-bold 
                       opacity-25 
                       mr-2"
          >
            03
          </span>
          SPACE LAUNCH 101
        </h2>
        <div
          className="xl:grid
                     xl:grid-cols-2
                     xl:grid-flow-row
                     xl:justify-items-center
                     xl:items-center"
        >
          <div /** Aqui va la imagen */
            className="xl:order-1
                       pb-10">
            <img
              className="w-full"
              src={isMobile ? Tech.images.landscape : Tech.images.portrait}
              alt={Tech.name}
            />
          </div>
          <div /** Aqui va los botones y texto */
            className="font-condensed
                       p-10
                       xl:flex"
          >
            <SelectTecnology
              counts={counts}
              setTecno={setTecno}
            ></SelectTecnology>
            <div
              className="xl:flex
                         xl:flex-col
                         md:px-12"
            >
              <h3 className="text-sm
                            text-Azul-Claro"
              >
                THE TERMINOLOGY..
              </h3>
              <h1
                className="text-2xl
                        text-White 
                         mt-2 mb-7 
                         lg:text-[48px]"
              >
                {Tech.name.toUpperCase()}
              </h1>
              <p
                className="font-barlow
                          text-Azul-Claro
                         lg:text-xl "
              >
               {Tech.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
