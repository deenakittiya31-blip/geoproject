import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaArrowTrendUp, FaHeart } from "react-icons/fa6";

const CardTrend = ({ image, star, place, about, price, room }) => {
    return (
        <div className='rounded-md border border-gray1 font-jost transition duration-400 ease-in-out hover:-translate-y-[5px] hover:shadow-2xl'>
            <div className='relative overflow-hidden rounded-t-[5px]'>
                <img src={image} className='object-contain transition-all duration-500 ease-in-out hover:scale-110' />
            </div>

            <div className='p-3'>
                <div className='flex justify-between items-center font-semibold'>
                    <p className='text-base'>{place}</p>
                    <p className='flex items-center gap-2'><FaStar fill='#ffc107' /> {star}</p>
                </div>
                <p className='mt-2 text-sm/6 text-paragraphColor tracking-wide'>{about}</p>
                <div className='mt-8 flex justify-between items-baseline'>
                    <div className='flex items-baseline gap-2'>
                        <span className=' font-medium text-[13px] text-gray3'>Form</span>
                        <span className='text-xl text-headingColor font-semibold'>{price}</span>
                    </div>
                    <p className='font-medium text-xs text-muted'>{room} Rooms</p>
                </div>
                <div className='mt-3 flex items-center gap-3'>
                    <button type="button" className="text-bluepr text-base font-medium px-5 py-2.5 flex overflow-hidden items-center disabled:pointer-events-none disabled:opacity-50 bg-bluese hover:bg-bluepr h-[45px]  whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-400 ease-out hover:text-white">
                        <span
                            className="absolute right-0 -mt-12 h-35 w-8 translate-x-12 rotate-30 bg-white opacity-10 transition-all duration-400 ease-out group-hover:-translate-x-40"
                        ></span>
                        Request Book <FaArrowTrendUp />
                    </button>
                    <button type="button" className="flex overflow-hidden items-center disabled:pointer-events-none disabled:opacity-50 bg-greense hover:bg-greenpr h-[45px] max-w-13 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-400 ease-out group">
                        <span
                            className="absolute right-0 -mt-12 h-30 w-8 translate-x-12 rotate-30 bg-white opacity-10 transition-all duration-400 ease-out group-hover:-translate-x-15"
                        ></span>
                        <FaHeart className='fill-greenpr size-5 group-hover:fill-white' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardTrend