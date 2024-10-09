import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white">About Dr.  </h3>
            <p className="mt-4 text-sm text-gray-400">
              Dr.   is a renowned cardiac surgeon with over 20 years of experience in heart surgery. He is committed to providing excellent patient care and advanced cardiac treatment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">About Me</a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a>
              </li>
              <li>
                <a href="#blog" className="text-gray-400 hover:text-white">Blog</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white">Contact Information</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@drjohndoe.com</li>
              <li>Address: 123 Heartbeat Ave, Suite 100, New York, NY 10001</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white">Follow Me</h3>
            <div className="mt-4 space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.36 5.64a9 9 0 11-12.72 0 9 9 0 0112.72 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-3 3m0 0l-3-3m3 3V9" />
                </svg>
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.36 5.64a9 9 0 11-12.72 0 9 9 0 0112.72 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-3 3m0 0l-3-3m3 3V9" />
                </svg>
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18.36 5.64a9 9 0 11-12.72 0 9 9 0 0112.72 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12l-3 3m0 0l-3-3m3 3V9" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Dr.  . All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
