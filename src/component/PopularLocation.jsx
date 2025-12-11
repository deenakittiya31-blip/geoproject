import React from 'react'
import SectionTitle from './SectionTitle'
import CardPopular from './card/CardPopular'

const PopularLocation = () => {
    const data = [
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-7-kkSeD4Z_.png',
            place: 'New York',
            about: '10 hotels5 Rental'
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-2-0whj_Htu.png',
            place: 'Los Angeles',
            about: '12 hotels4 Rental'
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-3-BcdhlEYh.png',
            place: 'San Diego',
            about: '08 hotels6 Rental'
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-4-CxQ7wp0c.png',
            place: 'San Francisco',
            about: '32 hotels12 Rental'
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-5-DsX_Y995.png',
            place: 'Houston',
            about: '22 hotels16 Rental'
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-6-CJGUBgGH.png',
            place: 'San Jose',
            about: '25 hotels15 Rental'
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-1-CS2YlZXp.png',
            place: 'Denver',
            about: '29 hotels14 Rental'
        },
        {
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-10-Ry1fcTlz.png',
            place: 'California',
            about: '22 hotels12 Rental'
        },
    ]

    return (
        <section className='py-20 bg-[#f1f5f8]'>
            <SectionTitle
                title='Popular Location To Stay'
                subtitle='Cicero famously orated against his political opponent Lucius Sergius Catilina.'
            />
            <div className='mt-10 px-20 gap-4 grid sm:grid-cols-2 lg:grid-cols-4'>
                {
                    data.map((i, idx) => (
                        <CardPopular
                            key={idx}
                            image={i.image}
                            place={i.place}
                            about={i.about}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default PopularLocation