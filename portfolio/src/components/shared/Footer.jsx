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
              Dr.   is a renowned cardiac surgeon with over 20 years of experience in heart surgery. He is committed to providing excellent patient care and advanced cardiac treatment.
            </p>
          </div>

          {/* Quick Links */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold dar:text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="dark:text-gray-200 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/About" className="dark:text-gray-200 hover:text-white">About Me</a>
              </li>
              <li>
                <a href="#services" className="dark:text-gray-200 hover:text-white">Services</a>
              </li>
            
            </ul>
          </div>

          {/* Contact Information */}
          <div data-aos="fade-up">
            <h3 className="text-xl font-semibold dark:text-white">Contact Information</h3>
            <ul className="mt-4 space-y-2 text-sm dark:text-gray-200">
              <li>Phone: +91 97x-xxx-xxxx</li>
              <li>Email: info@dremail.com</li>
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
