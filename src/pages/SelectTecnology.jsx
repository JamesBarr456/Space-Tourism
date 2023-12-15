

export const SelectTecnology = ({ counts, setTecno }) => {
    return (
        <div
            className="flex 
                       gap-4 
                       mb-10
                       justify-center
                       xl:flex-col
                       xl:justify-start
                       xl:gap-9"
        >
            {counts.map(count => (
                <button
                    type="button"
                    onClick={() => setTecno(count)}
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
                    {count + 1}
                </button>
            ))}
        </div>
    )
}


