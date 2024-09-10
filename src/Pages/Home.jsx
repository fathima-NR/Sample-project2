import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Imagecarousel from '../Components/Body/Imagecarousal'
import Footer from '../Components/Footer/Footer'
import Servicehome from '../Components/Body/ServiceHome'
import NumberCounting from '../Components/Body/NumberCounting'
import AboutHome from '../Components/Body/AboutHome'
import Steps from '../Components/Body/Steps'
import HomeTeam from '../Components/Body/HomeTeam'
import"./home.css"
import Contact from '../Components/Body/Contact'

function Home() {
  return (
    <>
 
    <div className='extra'>
<Imagecarousel/>
<div className='mt-5 pb-4'><Servicehome/></div>
<div className='mt-5'>
  <NumberCounting/>
</div>
<div className='mt-5'>
  <AboutHome/>
</div>
<div className='mt-5 step-ani pt-5 pb-5'>
  <Steps/>
</div>
<div className="mt-5 pb-5">
  <HomeTeam/>
</div>
<div className='mt-5'>
  <Contact/>
</div>

    </div>
    
    </>
  )
}

export default Home