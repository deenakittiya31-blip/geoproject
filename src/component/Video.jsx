import React from 'react'
import { FaPlay } from "react-icons/fa";

const Video = () => {
    return (
        <section className='bg-[url(https://geotrip-shreethemes.netlify.app/assets/bg-3-cWa7myur.jpg)] bg-cover bg-center bg-no-repeat h-[500px] w-full '>
            <div className='bg-[#031628]/50 w-full h-full flex justify-center items-center'>
                <button className='bg-white rounded-full w-20 h-20 text-bluepr flex justify-center items-center'>
                    <FaPlay size={40} />
                </button>
            </div>
        </section>
    )
}

export default Video