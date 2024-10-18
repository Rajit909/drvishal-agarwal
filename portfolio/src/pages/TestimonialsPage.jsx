import React, { useState } from "react";
import { motion } from "framer-motion";
import PlayButton from "../components/PlayBtn";
import { Link } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

// Dummy testimonials data
const testimonials = [
  {
    name: "name1",
    youtuburl: "https://www.youtube.com/embed/hEsxQMJaRZ4?si=NRqjINn-8sF7_9tN",
    imageurl: "/patientimg/img1.png",
  },
  {
    name: "Mr. Vivek ji",
    youtuburl: "https://www.youtube.com/embed/Yw6xYUrd0RI?si=WrHMTeu7tkB3Om3E",
    imageurl: "/patientimg/img2.png",
  },
  {
    name: "name3",
    youtuburl: "https://www.youtube.com/embed/AYBqzFy1p0I?si=kDe8s8JEo3puHaQc",
    imageurl: "/patientimg/img3.png",
  },
  {
    name: "Smt. Reena ji",
    youtuburl: "https://www.youtube.com/embed/MB6trqKYXTM?si=iX85wZ8fR_Xwq3zK",
    imageurl: "/patientimg/img4.png",
  },
  {
    name: "Mr. Sanjay ji",
    youtuburl: "https://www.youtube.com/embed/hUeSeJr2rks?si=f0vSzT5Kug0_xDp5",
    imageurl: "/patientimg/img5.png",
  },
  {
    name: "Mr. Matloob ji",
    youtuburl: "https://www.youtube.com/embed/3aW-43FvicA?si=VNKZdqbARjmOnpWb",
    imageurl: "/patientimg/img6.png",
  },
  {
    name: "Mr. Mahinder ji",
    youtuburl: "https://www.youtube.com/embed/fsJdn_Yj5OM?si=vMQS4Ik0faf1mGsg",
    imageurl: "/patientimg/img7.png",
  },
  {
    name: "Mr. Vishal ji",
    youtuburl: "https://www.youtube.com/embed/aVVYOuMdHdI?si=9jITnuCcaZHokDfx",
    imageurl: "/patientimg/img8.png",
  },
  {
    name: "Smt. Chandini ji",
    youtuburl: "https://www.youtube.com/embed/28qvVBhe2zQ?si=VmGDCfCJkbWCmK-K",
    imageurl: "/patientimg/img9.png",
  },
  {
    name: "Mr. Tularam ji",
    youtuburl: "https://www.youtube.com/embed/esV_E8s7pCg?si=--CxZ1RvQrX5LqkJ",
    imageurl: "/patientimg/img10.png",
  },
  {
    name: "Smt. Renu ji",
    youtuburl: "https://www.youtube.com/embed/8NS_IlmQgdg?si=EiZA-AVWp8FkCn4f",
    imageurl: "/patientimg/img11.png",
  },
  {
    name: "Mr. AShok ji",
    youtuburl: "https://www.youtube.com/embed/z4lks7EeNUU?si=SHIowD0LcBrWRtUA",
    imageurl: "/patientimg/img12.png",
  },
  {
    name: "Mr. Ram Singh ji",
    youtuburl: "https://www.youtube.com/embed/feOU3GQVEfA?si=iJH0_y57BLWN9W9v",
    imageurl: "/patientimg/img13.png",
  },
  {
    name: "Smt. Malti ji",
    youtuburl: "https://www.youtube.com/embed/V1x0mUONPBA?si=uBZhb8RFjn5A16Lp",
    imageurl: "/patientimg/img14.png",
  },
  {
    name: "Smt. Kamla ji",
    youtuburl: "https://www.youtube.com/embed/ytDGYtob-z4?si=1HbMU64toDLtVSOH",
    imageurl: "/patientimg/img15.png",
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

const TestimonialsPage = () => {
  // State to store the selected video URL
  const [selectedVideoUrl, setSelectedVideoUrl] = useState(null);

  const toggleModal = (url) => {
    setSelectedVideoUrl(url ? url : null); // Set video URL if provided, otherwise close modal
  };

  return (
    <>
    <Navbar/>
    <section
      id="testimonials"
      className="py-16 bg-blue-800  dark:bg-[#1f2327]"
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
              whileHover={{ scale: 1.02 }}
            >
              <div className="mb-4 flex flex-col justify-center items-center relative">
                <img
                  src={item.imageurl}
                  alt={item.name}
                  className="w-full h-72 rounded-xl"
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
    <Footer/>
    </>
  );
};

export default TestimonialsPage;
