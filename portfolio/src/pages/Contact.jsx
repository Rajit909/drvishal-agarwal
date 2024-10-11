import React from 'react'
import Contact from '../components/Contact.jsx'
import { Link } from 'react-router-dom'

const ContactPage = () => {
  return (
    <>
      <div className='mx-auto container'>
      <div className="about-top h-72 bg-cover bg-center">
          <h1 className="font-extrabold mx-4 md:mx-16 p-4 text-4xl md:text-6xl text-blue-800" >
            Contact Us
          </h1>
          <div className="mx-6 md:mx-20 flex items-center">
            <Link to={"/"}>
              <h1 className="ml-2 font-bold text-blue-700 text-lg"> Home\</h1>
            </Link>{" "}
            <span className=" font-semibold ml-[2px]">Contact</span>
          </div>
        </div>
        <div>
           <Contact/>
        </div>
      </div>
    </>
  )
}

export default ContactPage