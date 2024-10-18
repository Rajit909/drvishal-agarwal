import React, { useState } from "react";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Contact Form Data:", formData);
    alert("Your message has been sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section className="py-12 bg-gray-100 dark:bg-[#1f2327] dark:text-white">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          <h2 className="text-4xl font-bold text-center mb-8 text-blue-600">
            Contact Us
          </h2>

          {/* Contact Info Section */}
          <div className="grid md:grid-cols-2 gap-2 lg:gap-8 mb-12">
            {/* Address & Info */}
            <div className="bg-white dark:bg-slate-700  p-6 rounded-lg ">
              <h3 className="text-2xl font-bold mb-4 ">Get in Touch</h3>
              <p className="text-gray-700 dark:text-white mb-2">
                <strong>Address:</strong> DD Puram Bareilly, UP
              </p>
              <p className="text-gray-700 dark:text-white mb-2">
                <strong>Phone:</strong> +91 9927030110
              </p>
              <p className="text-gray-700 dark:text-white mb-2">
                <strong>Email:</strong> drvishal001@redifmail.com
              </p>
              {/* <p className="text-gray-700 mb-2"><strong>Working Hours:</strong> Mon-Fri: 8:00 AM - 6:00 PM</p> */}
            </div>

            {/* Google Map */}
            <div className="overflow-hidden rounded-lg ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.2605307908366!2d79.42844247499919!3d28.381197995450606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a00721b8465449%3A0x39bec9bf9038a4cb!2sGangasheel%20Advanced%20Medical%20Research%20Institute%20-%20Best%20Hospital%20in%20Bareilly!5e0!3m2!1sen!2sin!4v1729246112841!5m2!1sen!2sin"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">
              Send Us a Message
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="name"
                >
                  Full Name*
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              {/* Message Input */}
              <div className="md:col-span-2">
                <label
                  className="block text-gray-700 font-semibold mb-2"
                  htmlFor="message"
                >
                  Message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ContactPage;
