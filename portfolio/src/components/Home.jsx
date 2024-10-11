import React from 'react'
import Intro from './Intro'
import About from './About'
import Services from './Services.jsx'
import Testimonials from './Testimonials/Testimonials.jsx'
import { FaArrowUp } from "react-icons/fa";
import Contact from './Contact.jsx'

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'


const Home = () => {
  
  useEffect(() => {
    AOS.init({ duration: 1200 }); // You can set options like duration here
  }, []);

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
        <div>
       <Testimonials/>
        </div>

       {/* Appointment booking */}

       {/* Gallery */}

       {/* Research & publication */}

       {/* Contact us */}
       <Contact/>


       {/* <Footer/> */}
       <div className="fixed bottom-0 right-0 p-4">
            <a
              className="bg-blue-800 dark:bg-gray-700 text-white dark:text-blue-200 rounded-full w-10 h-10 flex items-center justify-center"
              href="#"
            >
           <FaArrowUp />
            </a>
          </div>
       </div>
    </>
  )
}

export default Home