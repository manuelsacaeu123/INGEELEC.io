import Image from 'next/image';



const EventBox = ({ events }) => {
    return (
        <div className='bg-secondary/60 rounded-[10px] p-4 xl:p-12 relative'>
            <div className='flex flex-col xl:flex-row justify-between h-[620px] xl:h-full gap-x-4'>
                {/* image */}
                <div className='hidden xl:flex w-[400px]'>
                    <Image
                        src={'/assets/events/singer.png'}
                        width={358}
                        height={489}
                        priority
                        quality={100}
                        alt=''
                    />
                </div>
                {/* event list */}
                <div className='flex-1 bg-purple-400/10 h-[500px] flex flex-col justify-between overflow-y-scroll scrollbar-thin
                 scrollbar-thumb-accentscrollbar-track-white/10 xl:pr-6'>
                    {/* event item */}
                    {events.map((event) => {
                        return (
                            <div
                                key={event.id}
                                className='flex flex-col xl:flex-row items-center justify-between
                                gap-y-4 xl:gap-y-0 text-center xl:text-left my-4 xl:my-0 border-b
                                border-white/10 pb-10 xl:py-3 last-of-type:border-none
                                first-of-type:pt-0'>

                                <div className='flex flex-col justify-center items-center gap-x-4'>
                                    { /* day & month */}
                                    <div className='flex flex-col justify-center items-center leading-tight w-[80px] mb-4 xl:mb-0'>
                                        <div className= 'text-[44px] font-black text-accent'> 
                                            {event.date.day}
                                        </div>
                                        <div className='text-[20px] font-extrabold'> 
                                            {event.date.month}
                                        </div>
                                    </div>

                                    {/* location */}
                                    <div className='bg-red-500/20 w-64 flex flex-col gap-y-2'>
                                        <div className='text-lg leading-none font-bold'> {`${event.location.city}, ${event.location.country}`}</div>
                                        <div className='flex items-center gap-x-1'>
                                            <div>

                                            </div>
                                            <div> {event.location.address}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div >
            </div >
        </div >
    );
};


export default EventBox; // Exporta EventBox como exportación por defecto
