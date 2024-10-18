import React, { useState } from "react";
import { motion } from "framer-motion";
import PlayButton from "../PlayBtn";
import { Link } from "react-router-dom";

// Dummy testimonials data
const testimonials = [
  {
    name: "name1",
    youtuburl: "https://www.youtube.com/embed/fCnQkuyhHNQ?si=iDOSqw7YSBnaJM8O",
    imageurl: "/patientimg/img1.png",
  },
  {
    name: "Vivek ji",
    youtuburl: "https://www.youtube.com/embed/LoA1KDMwnLo?si=iyxmrksEjk8tKekU",
    imageurl: "/patientimg/img2.png",
  },
  {
    name: "name3",
    youtuburl: "https://www.youtube.com/embed/AYBqzFy1p0I?si=kDe8s8JEo3puHaQc",
    imageurl: "/patientimg/img3.png",
  },
  {
    name: " Reena ji",
    youtuburl: "https://www.youtube.com/embed/MB6trqKYXTM?si=iX85wZ8fR_Xwq3zK",
    imageurl: "/patientimg/img4.png",
  },
  {
    name: "Shri Sanjay ji",
    youtuburl: "https://www.youtube.com/embed/hUeSeJr2rks?si=f0vSzT5Kug0_xDp5",
    imageurl: "/patientimg/img5.png",
  },
  {
    name: "Matloob ji",
    youtuburl: "https://www.youtube.com/embed/3aW-43FvicA?si=VNKZdqbARjmOnpWb",
    imageurl: "/patientimg/img6.png",
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
  // State to store the selected video URL
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  const toggleModal = (url) => {
    setSelectedVideoUrl(url ? url : null); // Set video URL if provided, otherwise close modal
  };

  return (
    <section
      id="testimonials"
      className="py-16 bg-blue-800 m-4 rounded-3xl dark:bg-[#1f2327]"
    >
      <div className="container mx-auto px-8 lg:px-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl leading-9 font-extrabold text-white sm:text-4xl">
            Patient feedback
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-300 dark:text-gray-200">
            Hear from our happy patients.
          </p>
        </div>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              className="p-1 bg-white dark:bg-gray-800 rounded-2xl shadow-lg text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.01, transition: { duration: 0.3 } }}
            >
              <div className="mb-4 flex flex-col justify-center items-center relative">
                <img
                  src={item.imageurl}
                  alt={item.name}
                  className="w-full h-72 rounded-xl object-cover"
                />
                <button
                  onClick={() => toggleModal(item.youtuburl)} // Pass the video URL on click
                  className="absolute"
                >
                  <PlayButton />
                </button>
              </div>
              <h4 className="text-2xl text-start font-semibold text-gray-800 dark:text-white p-4">
                Patient name: <span className="text-lg">{item.name}</span>
              </h4>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center pt-5 cursor-pointer" data-aos="fade-up">
            <Link to={"/patientfeedback"}>
              <button className=" text-blue-800 font-semibold bg-white px-6 py-2 rounded-md hover:bg-gray-200">
                See More
              </button>
            </Link>
          </div>
      </div>

      {/* Video Modal */}
      {selectedVideoUrl && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75">
          <div className="relative w-full max-w-2xl">
            <div className="flex justify-end">
              {/* Close Button */}
              <button
                onClick={() => toggleModal(null)}
                className="text-white text-3xl font-bold p-2"
              >
                ✖
              </button>
            </div>

            {/* Video Embed */}
            <div className="w-100 h-96 bg-black">
              <iframe
                className="h-full w-full rounded-md"
                src={selectedVideoUrl}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
