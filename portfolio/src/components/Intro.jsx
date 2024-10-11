import React from "react";
import PlayButton from "./PlayBtn";
const IntroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggelModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="relative ">
      {/* Text and Content Overlay */}
      <div
        className="relative z- flex items-center justify-center h-screen bg-cover bg-center w-full"
        style={{ backgroundImage: "url('./drvishal.jpg')" }}
      >
        <div className="text-center text-white px-8 mt-56 font-semibold p-4">
          <h1 className="text-5xl font-bold mb-4">
            Best Sergeon for cardiac sergory
          </h1>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            A pharmacy also called drugstore in American English or community
            pharmacy or chemist in Commonwealth English or rarely apothecary is
            a retail shop which provides.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center space-x-4">
            {/* Get Started Button */}
            <button className="bg-blue-700 px-6 py-3 text-white rounded-md hover:bg-blue-500 transition duration-300">
              GET STARTED
            </button>

            {/* Play Button */}

            <button onClick={toggelModal}>
              <span className="text-xl">
                <PlayButton />
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Video Modal */}
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
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IntroSection;
