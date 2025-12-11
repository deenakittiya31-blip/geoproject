import React from 'react'
import SectionTitle from './SectionTitle'
import { trendingData } from '../Link/data'
import CardTrend from './card/CardTrend'

const Trending = () => {
    return (
        <section className='p-20'>
            <SectionTitle
                title='Hot & Trending Venues'
                subtitle='Cicero famously orated against his political opponent Lucius Sergius Catilina.'
            />
            <div className='mt-10 gap-5 grid sm:grid-cols-2 lg:grid-cols-4'>
                {
                    trendingData.map((i, idx) => (
                        <CardTrend
                            key={idx}
                            image={i.image}
                            star={i.star}
                            place={i.place}
                            about={i.about}
                            price={i.price}
                            room={i.room}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Trending