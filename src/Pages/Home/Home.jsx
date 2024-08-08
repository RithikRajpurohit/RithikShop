import React from 'react'

import HomeSection from '../../Components/HomeSection/HomeSection'
import Services from '../../Components/Services/Services'
import Gallery from '../../Components/Gallery/Gallery'
import Login from '../Login/Login'


const Home = () => {
  return (
    <div >
      <>
        <HomeSection/>
        <Services/>
        <Gallery/>
        <Login/>
    
      </>
    </div>
  )
}

export default Home
