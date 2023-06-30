import React from 'react'
import HeroSection from './Herosection'
import Homeabout from './Homeabout'
import Homeprod from './Homeprod'
import Hometeam from './Hometeam'
import Homecollab from './Homecollab'
import Homecont from './Homecont'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <Homeabout/>
        <Homeprod/>
        <Hometeam/>
        <Homecollab/>
        <Homecont/>
        <Footer/>
    </div>
  )
}

export default Home