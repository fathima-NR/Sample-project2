import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import Management from './Pages/AboutUS/Management'
import Teams from './Pages/AboutUS/Teams'
import ContactUs from './Pages/ContactUs'
import Cyber from './Pages/Services/Cyber'
import It from './Pages/Services/It'
import EVL from './Pages/Services/EVL'
import Cloud from './Pages/Services/Cloud'
import Webdev from './Pages/Services/Webdev'


function Temp() {
  return (
 <>
 {/* <Navbar/>  */}
 {/* <Teams/> */}
 {/* <Management/> */}
{/* <ContactUs/> */}
{/* <Cyber/> */}
{/* <It/> */}
{/* <Home/> */}
{/* <EVL/> */}
{/* <Cloud/> */}
{/* <Webdev/> */}
  {/* <Footer/> */}
  <BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Home />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/OurTeam" element={<Teams />} />

  <Route path="/Management" element={<Management />} />
 


  <Route path="/ContactUs" element={<ContactUs />} />
  <Route path="/Cyber" element={<Cyber />} />
  <Route path="/It" element={<It />} />
  <Route path="/EVL" element={<EVL />} />
  <Route path="/Cloud" element={<Cloud />} />
  <Route path="/Webdev" element={<Webdev />} />
</Routes>

</BrowserRouter>

    <Footer/>
 </>
  )
}

export default Temp