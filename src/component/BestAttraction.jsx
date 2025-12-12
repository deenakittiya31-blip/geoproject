import React from 'react'
import SectionTitle from './SectionTitle'
import CardAttraction from './card/CardAttraction'
import { FaArrowTrendUp } from "react-icons/fa6";

const BestAttraction = () => {
    const data = [
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/attr-7-CiqraF4e.jpg',
            place: 'Kansas City',
            todo: 260
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/attr-5-BCfNR-vP.jpg',
            place: 'Los Angeles',
            todo: 240
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/attr-6-BxsYmSXe.jpg',
            place: 'San Antonio',
            todo: 312
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/attr-8-B7b_lEtq.jpg',
            place: 'San Francisco',
            todo: 220
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/attr-9-CVeJFDYe.jpg',
            place: 'Nashville',
            todo: 180
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/attr-10-BrqrfFyG.jpg',
            place: 'Philadelphia',
            todo: 612
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/tour-11-7HppjBxt.jpg',
            place: 'San Jose',
            todo: 145
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/tour-10-BGzNxHjm.jpg',
            place: 'San Diego',
            todo: 310
        },
    ]
    return (
        <section className='px-5 py-20 :lg:p-20'>
            <SectionTitle
                title='Best Attraction In USA'
                subtitle='Cicero famously orated against his political opponent Lucius Sergius Catilina.'
            />
            <div className='mt-10 gap-5 grid sm:grid-cols-2 lg:grid-cols-4 '>
                {
                    data.map((i, idx) => (
                        <CardAttraction
                            key={idx}
                            image={i.image}
                            place={i.place}
                            todo={i.todo}
                        />
                    ))
                }
            </div>
            <div className='flex justify-center items-center mt-12'>
                <button type="button" className="text-bluepr text-base font-medium px-5 py-2.5 flex overflow-hidden items-center disabled:pointer-events-none disabled:opacity-50 bg-bluese hover:bg-bluepr h-14 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-400 ease-out hover:text-white">
                    <span
                        className="absolute right-0 -mt-12 h-35 w-8 translate-x-12 rotate-30 bg-white opacity-10 transition-all duration-400 ease-out group-hover:-translate-x-40"
                    ></span>
                    Explore More <FaArrowTrendUp />
                </button>
            </div>
        </section>
    )
}

export default BestAttraction