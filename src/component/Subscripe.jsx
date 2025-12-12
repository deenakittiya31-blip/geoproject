import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";


const Subscripe = () => {
    return (
        <div className='bg-[url(https://geotrip-shreethemes.netlify.app/assets/bg-CnfkaFPo.jpg)] bg-cover bg-center bg-no-repeat h-[500px] w-full font-jost'>
            <div className='bg-[#020d16]/50 w-full h-full px-10 flex flex-col justify-center items-center'>
                <div className='font-bold text-center text-white text-2xl  lg:text-[32px] mb-10'>
                    <h1>Subscribe & Get<br />Special Discount with GeoTrip.com</h1>
                </div>
                <form className='flex flex-col lg:flex-row bg-white w-full lg:w-2xl rounded-md p-3'>
                    <input placeholder='Enter Youre Mail!' className='placeholder-gray-600 p-3 flex-1 focus:outline-none' />
                    <button className='flex gap-3 justify-center items-center bg-bluepr px-10 py-4 rounded-md font-medium text-white text-base'>Submit <FaArrowTrendUp /></button>
                </form>
            </div>
        </div>
    )
}

export default Subscripe