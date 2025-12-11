import React from 'react'

const CardDiscount = ({ image, title, round, price, discount }) => {
    return (
        <div className='flex items-center gap-5 border-dashed border-2 border-gray1 rounded-md p-2 font-jost'>
            <div className='relative'>
                <img src={image} width={110} className='rounded-md' />
                <button className='absolute top-2 left-2 px-2 py-1 bg-red rounded-sm font-semibold text-xs text-white'>{discount} Off</button>
            </div>
            <div>
                <h4 className='font-semibold text-black'>{title}</h4>
                <p className='text-gray2 text-sm mb-3'>Round-trip | {round}</p>
                <h5 className='font-semibold text-black text-xl'>
                    <span className='font-medium text-gray3 text-sm'>From </span>
                    {price}
                </h5>
            </div>
        </div>
    )
}

export default CardDiscount