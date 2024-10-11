import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here, like sending the data to an API
    setSubmitted(true);
  };

  return (
    <section className="py-12 bg-gray-100 dark:bg-[#1f2327]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
            We’d love to hear from you. Send us a message and we’ll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid gap-8 lg:grid-cols-2">
          <div data-aos="fade-right">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Get In Touch</h3>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              If you have any questions or want to work with us, feel free to send a message using the form.
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <span className="material-icons mr-2 text-gray-600 dark:text-gray-300">email</span>
                <p className="text-gray-600 dark:text-gray-300">contact@website.com</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2 text-gray-600 dark:text-gray-300">phone</span>
                <p className="text-gray-600 dark:text-gray-300">+123 456 789</p>
              </div>
              <div className="flex items-center">
                <span className="material-icons mr-2 text-gray-600 dark:text-gray-300">location_on</span>
                <p className="text-gray-600 dark:text-gray-300">123 Street, City, Country</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            {submitted ? (
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800">Thank you for your message! We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 p-2 block w-full border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-800 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
