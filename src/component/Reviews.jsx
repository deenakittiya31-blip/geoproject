import React from 'react'
import SectionTitle from './SectionTitle'
import { reviewData } from '../Link/data'
import CardReview from './card/CardReview'

const Reviews = () => {
    return (
        <section className='px-5 py-20 lg:p-20 bg-[#F2F5F8]'>
            <SectionTitle
                title='Loving Reviews By Our Customers'
                subtitle='Cicero famously orated against his political opponent Lucius Sergius Catilina.'
            />
            <div className='mt-10 flex flex-wrap justify-center gap-5'>
                {
                    reviewData.map((i, idx) => (
                        <CardReview
                            key={idx}
                            image={i.image}
                            name={i.name}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default Reviews