import React from 'react'

const CardAttraction = ({ image, place, todo }) => {
    return (
        <div className='flex flex-col border-dashed border-2 border-gray1 rounded-md p-2 font-jost transition duration-400 ease-in-out hover:-translate-y-[5px] hover:shadow-2xl'>

            <div className='relative overflow-clip rounded-md'>
                <img src={image} className='w-full h-auto rounded-md  transition-all duration-400 ease-in-out hover:scale-110' />
            </div>
            <div className='p-3'>
                <h5 className='font-bold text-base text-headingColor'>{place}</h5>
                <p className='font-medium text-xs text-muted'>{todo} Things To Do</p>
            </div>
        </div>
    )
}

export default CardAttraction