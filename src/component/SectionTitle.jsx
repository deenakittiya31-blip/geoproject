import React from 'react'

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className='text-center mb-5'>
            <h1 className='mb-3 font-bold text-xl md:text-[32px] text-headingColor'>{title}</h1>
            <p className='text-paragraphColor text-sm md:text-lg'>{subtitle}</p>
        </div>
    )
}

export default SectionTitle