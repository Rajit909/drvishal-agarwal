import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section id="about" className="py-16 dark:bg-inherit" >
      <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0" >
        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-start" data-aos="fade-left">
          <img
            src="./drvishal2.jpg"
            alt="Cardiac Surgeon"
            className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full">
          <div data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray dark:text-white-800 mb-4">
            About Dr. Vishal Agarwal
          </h2>
          <p className="text-lg text-gray-600 mb-4 dark:text-white">
            Hi, I'm Dr. Vishal Agarwal, a board-certified cardiac surgeon with
            over 15 years of experience. I specialize in minimally invasive
            heart surgeries and have successfully performed over 7000 surgeries
            to date. My goal is to provide the highest quality care to my
            patients and help them lead healthier
          </p>
          <p className="text-lg text-gray-600 mb-6 dark:text-white">
            With a dedicated team and a state-of-the-art facility, I aim to
            provide top-notch services to every patient. Your heart health is my
            priority, and together, we can ensure a healthy and long life.
          </p>
          </div>

          {/* Stats (Optional) */}
          <div className="flex space-x-8">
            <div className="text-center" data-aos="fade-right">
              <h3 className="text-3xl font-bold text-blue-800 dark:text-white">
                15+
              </h3>
              <p className="text-gray-600 dark:text-white">
                Years of Experience
              </p>
            </div>
            <div className="text-center" data-aos="fade-up">
              <h3 className="text-3xl font-bold text-blue-800 dark:text-white">
                7000+
              </h3>
              <p className="text-gray-600 dark:text-white">
                Successful Surgeries
              </p>
            </div>
            <div className="text-center" data-aos="fade-left">
              <h3 className="text-3xl font-bold text-blue-800 dark:text-white">
                500+
              </h3>
              <p className="text-gray-600 dark:text-white">Happy Patients</p>
            </div>
          </div>
          <div className="flex justify-center pt-5 cursor-pointer" data-aos="fade-up">
            <Link to={"/About"}>
              <button className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-900">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
