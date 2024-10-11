import React from "react";
import { CiPlay1 } from "react-icons/ci";

const PlayButton = () => {
  return (
    <>
      <div className="flex">
        <div className="relative">
          {/* Ripple effect */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-80 transition-all duration-100 left-0"></span>
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-50 left-0 transition-colors duration-200"></span>
          <span className="absolute inline-flex left-0 h-full w-full rounded-full bg-blue-500 opacity-25"></span>

          {/* Play Button */}
          <div className="relative z-10 w-10 h-10 ">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-500 hover:text-white shadow-lg ml-1">
              <CiPlay1 className="ml-1 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayButton;
