import React from 'react'
import Intro from './Intro'
import About from './About'
import Services from './Services.jsx'



const Home = () => {
  return (
    <>
       <div className='dark:text-white dark:bg-[#1f2327] '>
        {/* <Navbar/> */}
       {/* Intro */}
       <Intro/>
       {/* About me */}
        <About/>
       {/* Services */}

       <Services/>

       {/* Testemonials */}

       {/* Appointment booking */}

       {/* Gallery */}

       {/* Research & publication */}

       {/* Contact us */}


       {/* <Footer/> */}
       </div>
    </>
  )
}

export default Home