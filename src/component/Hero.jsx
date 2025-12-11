import React, { useState } from 'react'
import { BsBuildings, BsAirplane, BsGlobe2, BsCarFront } from "react-icons/bs";
import Hotels from './heroComponent/Hotels'
import Flights from './heroComponent/Flights'
import Activity from './heroComponent/Activity'
import CarRental from './heroComponent/CarRental'

const Hero = () => {
    const [active, setActive] = useState("hotels");

    return (
        <section className='bg-[url(https://geotrip-shreethemes.netlify.app/assets/banner-02-BoKU8yDi.jpg)] bg-cover bg-center bg-no-repeat h-screen w-full font-jost'>
            <div className='bg-gray-950/45 w-full h-full flex flex-col items-center justify-center'>
                <div className='w-[800px] px-40 md:px-0'>
                    <div className='flex justify-center gap-3 font-semibold tracking-wide text-3xl md:text-5xl text-white'>
                        <h1>Explore The Word</h1>
                        <h1>Around</h1>
                        <h1 className='hidden md:relative'>
                            Around
                            <svg width="185px" height="23px" viewBox="0 0 445.5 23"><path className="absolute top-10 start-0 -rotate-1  mt-4 fill-white" d="M409.9,2.6c-9.7-0.6-19.5-1-29.2-1.5c-3.2-0.2-6.4-0.2-9.7-0.3c-7-0.2-14-0.4-20.9-0.5 c-3.9-0.1-7.8-0.2-11.7-0.3c-1.1,0-2.3,0-3.4,0c-2.5,0-5.1,0-7.6,0c-11.5,0-23,0-34.5,0c-2.7,0-5.5,0.1-8.2,0.1 c-6.8,0.1-13.6,0.2-20.3,0.3c-7.7,0.1-15.3,0.1-23,0.3c-12.4,0.3-24.8,0.6-37.1,0.9c-7.2,0.2-14.3,0.3-21.5,0.6 c-12.3,0.5-24.7,1-37,1.5c-6.7,0.3-13.5,0.5-20.2,0.9C112.7,5.3,99.9,6,87.1,6.7C80.3,7.1,73.5,7.4,66.7,8 C54,9.1,41.3,10.1,28.5,11.2c-2.7,0.2-5.5,0.5-8.2,0.7c-5.5,0.5-11,1.2-16.4,1.8c-0.3,0-0.7,0.1-1,0.1c-0.7,0.2-1.2,0.5-1.7,1 C0.4,15.6,0,16.6,0,17.6c0,1,0.4,2,1.1,2.7c0.7,0.7,1.8,1.2,2.7,1.1c6.6-0.7,13.2-1.5,19.8-2.1c6.1-0.5,12.3-1,18.4-1.6 c6.7-0.6,13.4-1.1,20.1-1.7c2.7-0.2,5.4-0.5,8.1-0.7c10.4-0.6,20.9-1.1,31.3-1.7c6.5-0.4,13-0.7,19.5-1.1c2.7-0.1,5.4-0.3,8.1-0.4 c10.3-0.4,20.7-0.8,31-1.2c6.3-0.2,12.5-0.5,18.8-0.7c2.1-0.1,4.2-0.2,6.3-0.2c11.2-0.3,22.3-0.5,33.5-0.8 c6.2-0.1,12.5-0.3,18.7-0.4c2.2-0.1,4.4-0.1,6.7-0.1c11.5-0.1,23-0.2,34.6-0.4c7.2-0.1,14.4-0.1,21.6-0.1c12.2,0,24.5,0.1,36.7,0.1 c2.4,0,4.8,0.1,7.2,0.2c6.8,0.2,13.5,0.4,20.3,0.6c5.1,0.2,10.1,0.3,15.2,0.4c3.6,0.1,7.2,0.4,10.8,0.6c10.6,0.6,21.1,1.2,31.7,1.8 c2.7,0.2,5.4,0.4,8,0.6c2.9,0.2,5.8,0.4,8.6,0.7c0.4,0.1,0.9,0.2,1.3,0.3c1.1,0.2,2.2,0.2,3.2-0.4c0.9-0.5,1.6-1.5,1.9-2.5 c0.6-2.2-0.7-4.5-2.9-5.2c-1.9-0.5-3.9-0.7-5.9-0.9c-1.4-0.1-2.7-0.3-4.1-0.4c-2.6-0.3-5.2-0.4-7.9-0.6 C419.7,3.1,414.8,2.9,409.9,2.6z"></path></svg>
                        </h1>
                        <h1>You</h1>
                    </div>
                    <p className='font-light text-xl text-white text-center mt-5'>
                        Take a little break from the work strss of everyday. Discover plan trip and explore beautiful destinations.
                    </p>
                </div>
                <div>
                    <div className='flex gap-10 justify-center mt-10 mb-5 font-medium text-md text-white tracking-wide'>
                        <button onClick={() => setActive("hotels")} className='flex items-center gap-3 relative py-2'>
                            <BsBuildings /> Hotels
                            {
                                active === "hotels" && (
                                    <div className='absolute bottom-0 -left-2 w-25 h-0.5 bg-white'>
                                    </div>
                                )
                            }
                        </button>
                        <button onClick={() => setActive("flights")} className='flex items-center gap-3 relative py-2'>
                            <BsAirplane /> Flights
                            {
                                active === "flights" && (
                                    <div className='absolute bottom-0 -left-2 w-25 h-0.5 bg-white'>
                                    </div>
                                )
                            }
                        </button>
                        <button onClick={() => setActive("activity")} className='flex items-center gap-3 relative py-2'>
                            <BsGlobe2 /> Activity
                            {
                                active === "activity" && (
                                    <div className='absolute bottom-0 -left-2 w-25 h-0.5 bg-white'>
                                    </div>
                                )
                            }
                        </button>
                        <button onClick={() => setActive("carrental")} className='flex items-center gap-3 relative py-2'>
                            <BsCarFront /> Car Rental
                            {
                                active === "carrental" && (
                                    <div className='absolute bottom-0 -left-5 w-35 h-0.5 bg-white'>
                                    </div>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className='px-20 w-full'>
                    <div className='bg-white rounded-md p-3'>
                        {active === "hotels" && <Hotels />}
                        {active === "flights" && <Flights />}
                        {active === "activity" && <Activity />}
                        {active === "carrental" && <CarRental />}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero