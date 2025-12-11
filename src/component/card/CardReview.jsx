import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa6";

const CardReview = ({ image, name }) => {
    return (
        <div className='p-4 bg-white border border-gray1 rounded-md w-full max-w-[300px] md:max-w-[350px]'>
            <div className='relative flex justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-20 h-20 overflow-clip rounded-md'>
                        <img src={image} />
                    </div>

                    <div>
                        <p className='font-bold text-base'>{name}</p>
                        <p className='text-muted text-sm'>United States</p>
                        <div className='flex gap-1 mt-1'>
                            <FaStar fill='#ffc107' size={10} />
                            <FaStar fill='#ffc107' size={10} />
                            <FaStar fill='#ffc107' size={10} />
                            <FaStar fill='#ffc107' size={10} />
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 end-0  me-3">
                    <button className="flex justify-center items-center rounded-full text-bluepr bg-bluese w-10 h-10">
                        <FaQuoteRight />
                    </button>
                </div>
            </div>
            <p className='mt-3 text-sm text-paragraphColor'>Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt</p>
        </div>
    )
}

export default CardReview