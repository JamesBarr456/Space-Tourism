
export const SelectPeople = ( { names, setCrew } ) => {
    return (
        <>
            <div
                className="flex 
                       gap-4 
                       my-10
                       md:order-2  
                       lg:justify-center 
                       lg:order-3 
                       lg:w-full
                       lg:gap-8"
            >
                {names.map( name => (
                     <button
                     type="button"
                     onClick={() => setCrew(name)}
                     className="rounded-full
                                bg-White 
                                 w-[10px] 
                                 h-[10px]"
                 ></button>
                ))}
              
            </div>
        </>
    )
}

