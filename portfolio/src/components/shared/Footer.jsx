import React from 'react';
import { TiSocialFacebook, TiSocialInstagram, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti';

const Footer = () => {
  return (
    <footer className="dark:bg-[#1f2327] py-10 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-bold dar:text-white font-doctor"> Dr.Vishal Agarwal  </h3>
            <p className="mt-4 text-sm dark:text-gray-200">
             At the forefront of modern cardiac care, Dr. Vishal Agrawal is dedicated in delivering advanced, patient-centered cardiovascular and thoracic treatments. With over 15 years of experience and more than 7,000 successful surgeries, committed to improving the lives of those suffering from complex heart conditions.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold dar:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="dark:text-gray-200">Home</a>
              </li>
              <li>
                <a href="/About" className="dark:text-gray-200">About Me</a>
              </li>
              <li>
                <a href="#services" className="dark:text-gray-200">Services</a>
              </li>
            
            </ul>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold dark:text-white">Contact Information</h3>
            <ul className="mt-4 space-y-2 text-sm dark:text-gray-200">
              <li>Phone: +91 99270 30110</li>
              <li>Email: drvishal001@redifmail.com</li>
              <li>Address: DD Puram Bareilly, UP</li>
            </ul>
          </div>

          {/* Social Media */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold dark:text-white">Follow Me</h3>
            <div className="mt-4 space-x-4">
            <div className="flex items-center gap-4 pr-4 text-white">
            <button className=' rounded-full p-1 bg-blue-800'><TiSocialFacebook size={24} /></button>
            <button className=' rounded-full p-1 bg-blue-800'><TiSocialLinkedin size={24} /></button>
            <button className=' rounded-full p-1 bg-blue-800'><TiSocialTwitter size={24} /></button>
            <button className=' rounded-full p-1 bg-blue-800'><TiSocialInstagram size={24} /></button>
          </div>
            </div>
          </div>
        </div>
        
        <div  className="mt-8 border-t border-gray-700 pt-6 text-center text-sm dark:text-gray-200">
         <div > &copy; {new Date().getFullYear()} Dr.  . All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
