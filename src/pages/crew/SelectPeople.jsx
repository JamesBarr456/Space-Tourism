import { useState } from "react";

export const SelectPeople = ({ names, setCrew }) => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const handleCrew = (type, index) => {
    setCrew(type);
    setClickedIndex(index);
  };
  return (
    <>
      <div
        className="flex 
                       gap-5
                       my-10
                       md:order-2  
                       lg:justify-center 
                       lg:order-3 
                       lg:w-full
                       lg:gap-8"
      >
        {names.map((name, index) => (
          <button
            type="button"
            onClick={() => handleCrew(name, index)}
            className={`rounded-full
                        ${clickedIndex === index ? "bg-White" : "bg-White/20"}
                        ${clickedIndex !== index ? " hover:bg-White/50" : null}
                        w-[10px] 
                        h-[10px]`}
          ></button>
        ))}
      </div>
    </>
  );
};
