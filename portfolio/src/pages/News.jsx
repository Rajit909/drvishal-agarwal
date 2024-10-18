import React, { useState } from "react";
import NewsCard from "../components/NewsCard";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

// Sample Data (You can replace it with real data from an API or database)
const newsList = [
  {
    id: 1,
    image: "https://via.placeholder.com/300x200",
    title: "New State-of-the-Art Cardiology Unit",
    date: "October 15, 2024",
    description: "Pulse Hospital has launched a new cardiology unit equipped with the latest technology.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/300x200",
    title: "Free Health Check-Up Camp",
    date: "October 10, 2024",
    description: "Join our free health check-up camp to get consultations from experienced doctors.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/300x200",
    title: "Awarded Best Hospital in the City",
    date: "September 25, 2024",
    description: "Pulse Hospital has been recognized as the best hospital in the city for providing excellent healthcare services.",
  },
  {
    id: 4,
    image: "https://via.placeholder.com/300x200",
    title: "COVID-19 Vaccination Drive",
    date: "September 15, 2024",
    description: "Pulse Hospital is organizing a vaccination drive. Register now to get your vaccine.",
  },
];

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNews = newsList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
    <Navbar/>
    <section className="py-12 bg-gray-100 dark:bg-[#1f2327]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">News & Updates</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up">
          {currentNews.map((news) => (
            <NewsCard
              key={news.id}
              image={news.image}
              title={news.title}
              date={news.date}
              description={news.description}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-8">
          <nav>
            <ul className="flex space-x-2">
              {[...Array(Math.ceil(newsList.length / itemsPerPage)).keys()].map((number) => (
                <li key={number + 1}>
                  <button
                    onClick={() => paginate(number + 1)}
                    className={`px-4 py-2 rounded ${
                      currentPage === number + 1
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white"
                    }`}
                  >
                    {number + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default News;
