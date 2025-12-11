import React from 'react'
import SectionTitle from './SectionTitle'
import { articleData } from '../Link/data'
import CardArticle from './card/CardArticle'

const PopularArticles = () => {
    return (
        <section className='px-20 pb-20'>
            <SectionTitle
                title='Trending & Popular Articles'
                subtitle='Cicero famously orated against his political opponent Lucius Sergius Catilina.'
            />
            <div className='mt-10 md:grid grid-cols-3 justify-items-center gap-6'>
                {
                    articleData.map((i, idx) => (
                        <CardArticle
                            key={idx}
                            image={i.image}
                            tag={i.tag}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default PopularArticles