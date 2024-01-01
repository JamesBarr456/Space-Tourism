import { useState } from 'react';

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
                       my-10 lg:my-20
                       md:order-3
                       z-50
                       lg:justify-start
                       lg:w-full
                       lg:gap-6"
      >
        {names.map((name, index) => (
          <button
            key={Date.now() - 1}
            type="button"
            onClick={() => handleCrew(name, index)}
            className={`rounded-full
                        ${clickedIndex === index ? 'bg-White' : 'bg-White/20'}
                        ${clickedIndex !== index ? ' hover:bg-White/50' : null}
                        w-[10px] 
                        h-[10px]`}
          ></button>
        ))}
      </div>
    </>
  );
};
