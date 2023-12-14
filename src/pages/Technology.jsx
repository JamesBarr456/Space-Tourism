import cohete from "../assets/technology/image-launch-vehicle-landscape.jpg";
import cohete2 from "../assets/technology/image-launch-vehicle-portrait.jpg"
export const Technology = () => {
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
              src={cohete}
              alt=""
            />
          </div>
          <div /** Aqui va los botones y texto */
            className="font-condensed
                       p-10
                       xl:flex"
          >
            <div
              className="flex 
                       gap-4 
                       mb-10
                       justify-center
                       xl:flex-col
                       xl:justify-start
                       xl:gap-9"
            >
              <button
                type="button"
                className="w-10
                           h-10
                           md:w-14
                           md:h-14
                           xl:w-16
                           xl:h-16
                           rounded-full
                           border-White
                           border"
              >
                1
              </button>
              <button
                type="button"
                className="w-10
                           h-10
                           md:w-14
                           md:h-14
                           xl:w-16
                           xl:h-16
                           rounded-full
                           border-White
                           border"
              >
                2
              </button>
              <button
                type="button"
                className="w-10
                           h-10
                           md:w-14
                           md:h-14
                           xl:w-16
                           xl:h-16
                           rounded-full
                           border-White
                           border"
              >
                3
              </button>
            </div>
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
                LAUNCH VEHICLE
              </h1>
              <p
                className="font-barlow
                          text-Azul-Claro
                         lg:text-xl "
              >
                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
