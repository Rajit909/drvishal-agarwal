import React from "react";
import PlayButton from "./PlayBtn";
const IntroSection = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggelModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="mx-auto py-2">
     {/* Text and Content Overlay */}
     <div className="flex flex-col-reverse lg:flex-row gap-6 items-center h-auto lg:h-screen justify-center px-4 lg:px-8">
        {/* Left Content */}
        <div className="text-center text-gray-800 dark:text-white font-semibold p-4 lg:w-1/2 py-12 lg:py-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Best Surgeon for Cardiac Surgery
          </h1>
          <p className="text-sm md:text-base lg:text-lg mb-6 max-w-xl mx-auto">
          Heart health is my passion, and as an experienced cardiac surgeon, I am committed to providing top-tier surgical care for my patients. Utilizing the latest advancements in cardiac surgery, my goal is to help patients overcome heart conditions and lead active, fulfilling lives.
          </p>

          {/* Buttons */}
          <div className="flex items-center justify-center space-x-4">
            <button className="bg-blue-700 px-6 py-3 text-white rounded-md hover:bg-blue-500 transition duration-300 text-sm md:text-base">
              GET STARTED
            </button>

            <div>
              <button onClick={toggelModal} className="flex items-center">
                <span className="text-xl">
                  <PlayButton />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 transform scale-100 lg:scale-90">
          <img
            src="/intro/drVishal1.png"
            alt="Doctor"
            className="w-full h-auto px-2 sm:py-0 rounded-3xl object-cover shadow-lg"
            style={{ zIndex: -1 }}
          />
        </div>
      </div>

      {/* Dark overlay for better contrast */}
      {/* <div className="absolute inset-0 bg-black opacity-40"></div> */}

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
