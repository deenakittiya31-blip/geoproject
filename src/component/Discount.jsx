import React from 'react'
import CardDiscount from './card/CardDiscount'

const Discount = () => {
    const data = [
        {
            title: 'Los Angeles',
            round: '3D/4D | 3 Person',
            price: '$849 - $999',
            discount: '20%',
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-6-CJGUBgGH.png'
        },
        {
            title: 'United Kingdom',
            round: '3D/4D | 2 Person',
            price: '$399 - $599',
            discount: '15%',
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-5-DsX_Y995.png'
        },
        {
            title: 'France',
            round: '3D/4D | 3 Person',
            price: '$569 - $799',
            discount: '30%',
            image: 'https://geotrip-shreethemes.netlify.app/assets/ct-1-CS2YlZXp.png'
        },
    ]
    return (
        <section className='mt-10 px-5 grid grid-cols-1 lg:px-20 lg:grid lg:grid-cols-3 gap-4'>
            {
                data.map((i, inx) => (
                    <CardDiscount
                        image={i.image}
                        key={inx}
                        title={i.title}
                        round={i.round}
                        price={i.price}
                        discount={i.discount}
                    />
                ))
            }
        </section>
    )
}

export default Discount