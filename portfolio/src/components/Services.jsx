import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaStethoscope, FaSyringe, FaProcedures } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHeartbeat className="text-4xl text-blue-800" />,
      title: 'Heart Surgery',
      description: 'Advanced surgical treatments for all types of heart conditions and diseases.',
    },
    {
      icon: <FaStethoscope className="text-4xl text-blue-800" />,
      title: 'Heart Consultation',
      description: 'Comprehensive cardiology consultations to assess your heart health and risks.',
    },
    {
      icon: <FaSyringe className="text-4xl text-blue-800" />,
      title: 'Preventive Care',
      description: 'Personalized plans to help prevent heart disease and maintain a healthy heart.',
    },
    {
      icon: <FaProcedures className="text-4xl text-blue-800" />,
      title: 'Post-Surgery Care',
      description: 'Comprehensive rehabilitation and recovery plans after heart surgeries.',
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

  return (
    <section id="services" className="py-16 ">
      <div className="container mx-auto px-8 lg:px-16">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Services I Offer</h2>
          <p className="text-lg text-gray-600 dark:text-white">Expert cardiac care and advanced treatment options for every patient.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-300 rounded-lg shadow-lg text-center"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={index}
              whileHover={{ scale: 1.05 }} // Scale on hover
              whileTap={{ scale: 0.95 }} // Scale down on tap/click
            >
              {/* Icon */}
              <div className="mb-4">{service.icon}</div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
