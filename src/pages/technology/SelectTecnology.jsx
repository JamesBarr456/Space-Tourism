import { useState } from "react";

export const SelectTecnology = ({ counts, setTecno }) => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const handleTecno = (type, index) => {
    setTecno(type);
    setClickedIndex(index);
  };
  return (
    <div
      className="flex 
                       gap-4 
                       my-10
                       justify-center
                       lg:flex-col
                       lg:justify-start
                       lg:gap-9"
    >
      {counts.map((count, index) => (
        <button
          type="button"
          onClick={() => handleTecno(count, index)}
          className={`
                    font-bellefair
                    w-10
                    h-10
                    md:w-14
                    md:h-14
                    xl:w-16
                    xl:h-16
                    xl:text-3xl
                    rounded-full
                    ${
                      clickedIndex === index
                        ? "bg-White text-Azul-Marino"
                        : "hover:border-White/40"
                    }
                    
                    border`}
        >
          {count + 1}
        </button>
      ))}
    </div>
  );
};
