import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

const CardArticle = ({ image, tag }) => {
    return (
        <div>
            <img src={image} className='rounded-md' />
            <div className='pt-3'>
                <div className='flex justify-start'>
                    <button className='bg-greense text-greenpr text-xs px-[15px] py-1 rounded-sm font-medium'>{tag}</button>
                </div>
                <h1 className='font-bold text-base text-headingColor my-2'>Make Your Next Journey Delhi To Paris in Comfirtable And Best Price</h1>
                <p className='mb-3 text-paragraphColor text-[15px]/8'>Think of a news blog that's filled with content hourly on the Besides, random text risks to be unintendedly humorous or offensive day of going live.</p>
                <a href='#' className='flex items-center gap-2 font-medium text-bluepr text-[15px]'>
                    <span>Read More</span>
                    <FaArrowTrendUp />
                </a>
            </div>
        </div>
    )
}

export default CardArticle