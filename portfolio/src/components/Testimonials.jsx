import React, { useState } from "react";
import { motion } from "framer-motion";
import PlayButton from "./PlayBtn";

// Dummy testimonials data
const testimonials = [
  {
    name: "name1",
    youtuburl: "https://www.youtube.com/watch?v=9bZkp7q19f0",
    imageurl: "https://via.placeholder.com/150",
  },
  {
    name: "name2",
    youtuburl: "https://www.youtube.com/watch?v=9bZkp7q19f1",
    imageurl: "https://via.placeholder.com/150",
  },
  {
    name: "name3",
    youtuburl: "https://www.youtube.com/watch?v=9bZkp7q19f2",
    imageurl: "https://via.placeholder.com/150",
  },
  {
    name: "name4",
    youtuburl: "https://www.youtube.com/watch?v=9bZkp7q19f2",
    imageurl: "https://via.placeholder.com/150",
  },
  {
    name: "name5",
    youtuburl: "https://www.youtube.com/watch?v=9bZkp7q19f2",
    imageurl: "https://via.placeholder.com/150",
  },
  {
    name: "name6",
    youtuburl: "https://www.youtube.com/watch?v=9bZkp7q19f2",
    imageurl: "https://via.placeholder.com/150",
  },
];

// Define animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // Add delay based on index to stagger the animations
      duration: 0.6,
    },
  }),
};

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggelModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <section
      id="testimonials"
      className="py-16 bg-blue-800 m-4 rounded-3xl dark:bg-[#1f2327]"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl">
            Patient feedback
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300 dark:text-gray-200">
            Hear from our happy Patient.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idex) => {
            return (
              <motion.div
                key={idex}
                className="p-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={idex}
                whileHover={{ scale: 1.02 }} // Scale on hover
                // whileTap={{ scale: 0.95 }} // Scale down on tap/click
              >
                <div className="mb-4 flex flex-col justify-center items-center ">
                  <img src={item.imageurl} alt="" className="w-full h-72 rounded-xl"/>
                  <button onClick={toggelModal} className="absolute">
                    <div>
                      <PlayButton/>
                    </div>
                  </button>

                     {/* Video Modal */}
                </div>
                <h4 className="text-2xl text-start font-semibold text-gray-800 dark:text-white p-4">
                  Patient name: <span className="text-lg">{item.name}</span>
                </h4>
              </motion.div>
            );
          })}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl">
            <div className="flex justify-end">
              {/* Close Button */}
              <button
                onClick={toggelModal}
                className="text-white text-3xl font-bold p-2"
              >
                ✖
              </button>
            </div>

            {/* Video Embed */}
            <div className="w-100 h-96 bg-black">
              {
                testimonials.filter((item, index) => index === 0).map((item) => (
                  <iframe
                    className="w-full h-full rounded-xl"
                    src={item.youtuburl}
                    {...item}
                    title={item.name}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ))
                }
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
