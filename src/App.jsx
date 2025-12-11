import { useState } from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Discount from './component/Discount'
import BestAttraction from './component/BestAttraction'
import PopularLocation from './component/PopularLocation'
import Trending from './component/Trending'
import Video from './component/Video'
import Reviews from './component/Reviews'
import Memories from './component/Memories'
import PopularArticles from './component/PopularArticles'
import Subscripe from './component/Subscripe'
import Footer from './component/Footer'


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <main>
        <Discount />
        <BestAttraction />
        <PopularLocation />
        <Trending />
        <Video />
        <Reviews />
        <Memories />
        <PopularArticles />
        <Subscripe />
      </main>
      <Footer />
    </div>
  )
}

export default App
