import { useState } from 'react'
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
import Navbar2 from './component/Navbar2'
import HeroNew from './component/HeroNew'


function App() {

  return (
    <div>
      <Navbar2 />
      <HeroNew />
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
