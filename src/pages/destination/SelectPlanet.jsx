const listPlanets = [
  {
    id: "60",
    name: "MOON",
  },
  {
    id: "61",
    name: "MARS",
  },
  {
    id: "62",
    name: "EUROPA",
  },
  {
    id: "63",
    name: "TITAN",
  },
];
export const SelectPlanet = ({ setPlanet }) => {
  const handlePlanet = (type) => {
    setPlanet(type);
  };
  return (
    <>
      <div
        className="flex 
                       gap-4 
                       font-condensed
                       my-10
                       justify-center
                       text-Azul-Lavanda
                       lg:w-full"
      >
        {listPlanets.map((planet) => (
          <button
            key={planet.id}
            type="button"
            onClick={() => handlePlanet(planet.name.toLowerCase())}
            className="tracking-[2.7px]
                     py-2"
          >
            {planet.name}
          </button>
        ))}
      </div>
    </>
  );
};
