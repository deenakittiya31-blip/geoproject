import React from 'react'

const CardPopular = ({ image, place, about }) => {
    return (
        <div className='rounded-md relative overflow-hidden group'>
            <img src={image} className='w-full h-auto rounded-md transition-all duration-500 ease-in-out group-hover:scale-125' />

            <div className="absolute inset-0 flex items-center justify-center bg-[#031628]/40 rounded-md">
            </div>
            <div className='absolute bottom-10 left-5 font-jost'>
                <h3 className='font-bold text-[28px] text-white/90 mb-1'>{place}</h3>
                <p className='text-white/90 text-sm'>{about}</p>
            </div>
        </div>
    )
}

export default CardPopular
