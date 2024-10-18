import React from "react";

const NewsCard = ({ image, title, date, description }) => {
  return (
    <div className="bg-white dark:bg-slate-700 shadow-md rounded-lg overflow-hidden transform hover:scale-[103%] transition duration-300 " >
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-blue-600 mb-2">{title}</h3>
        <p className="text-gray-500 dark:text-gray-100 text-sm mb-2">{date}</p>
        <p className="text-gray-600 dark:text-gray-100 mb-4">{description}</p>
        <button className="text-blue-500 font-semibold hover:underline">
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
