import React from 'react'
import SectionTitle from './SectionTitle'
import { articleData } from '../Link/data'
import CardArticle from './card/CardArticle'

const PopularArticles = () => {
    return (
        <section className='px-5 pb-20 lg:px-20'>
            <SectionTitle
                title='Trending & Popular Articles'
                subtitle='Cicero famously orated against his political opponent Lucius Sergius Catilina.'
            />
            <div className='mt-10 gap-5 grid lg:grid-cols-3 justify-items-center'>
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