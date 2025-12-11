import React from 'react'
import { FaStar } from "react-icons/fa";

const Memories = () => {
    return (
        <section className='p-20  md:gap-55 font-jost grid md:grid-cols-2 '>
            <div className='relative'>

                <img src='https://geotrip-shreethemes.netlify.app/assets/img-2-CqbfVzr3.png' className='relative' />

                <div className='absolute bottom-7 -start-3 z-20'>
                    <div className='flex bg-white rounded-md shadow-2xl shadow-gray3/20 px-4 py-3'>
                        <div className=''>
                            <h6 className='font-normal text-base text-headingColor mb-2'>Client</h6>
                            <ul className='relative w-[150px] h-8'>
                                <li className='w-8 h-8 absolute z-1'>
                                    <img src='https://geotrip-shreethemes.netlify.app/assets/team-1-Dk2b_Pxk.jpg' className='rounded-full' />
                                </li>
                                <li className='w-8 h-8 absolute left-5 z-2'>
                                    <img src='https://geotrip-shreethemes.netlify.app/assets/team-2-CL-rmPku.jpg' className='rounded-full' />
                                </li>
                                <li className='w-8 h-8 absolute left-10 z-3'>
                                    <img src='https://geotrip-shreethemes.netlify.app/assets/team-3-CYFXbAzK.jpg' className='rounded-full' />
                                </li>
                                <li className='w-8 h-8 absolute left-15 z-4'>
                                    <img src='https://geotrip-shreethemes.netlify.app/assets/team-4-Be8Q5htU.jpg' className='rounded-full w-9 h-8' />
                                </li>
                                <li className=' absolute left-20 z-5'>
                                    <button className='bg-bluepr w-8 h-8 rounded-full text-white font-semibold flex justify-center items-center'>1K+</button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='font-normal text-base text-headingColor mb-2'>Rating</h6>
                            <div className='flex gap-2'>
                                <span className='font-semibold'>4.5</span>
                                <FaStar fill='#ffc107' size={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h5 className='font-medium text-bluepr'>MEMORIES</h5>
                <h2 className='font-semibold text-[32px] text-headingColor'>Our Attractive Experience And Services For you!</h2>
                <p className='font-light text-base/8'>Using dummy content or fake information in the Web design process can Fake data can ensure a nice looking layout but it doesn’t reflect what a living, breathing application must endure. Real data does. result in products with unrealistic assumptions and potentially serious design flaws. A seemingly elegant design can quickly begin to bloat with unexpected content or break under the weight of actual activity.</p>
                <div className='flex mt-4'>
                    <div className="flex flex-col justify-center items-center py-3 px-3 rounded-md bg-[#f1f5f8] me-3">
                        <h6 className="font-bold text-[28px] text-headingColor">33</h6>
                        <p className="m-0 text-sm text-muted">Year Esperience</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-3 px-3 rounded-md bg-[#f1f5f8] me-3">
                        <h6 className="font-bold text-[28px] text-headingColor">78</h6>
                        <p className="m-0 text-sm text-muted">Destination Collaboration</p>
                    </div>
                    <div className="flex flex-col justify-center items-center py-3 px-3 rounded-md bg-[#f1f5f8] me-3">
                        <h6 className="font-bold text-[28px] text-headingColor">25K</h6>
                        <p className="m-0 text-sm text-muted">Happy Customers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Memories