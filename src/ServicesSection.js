import React from 'react';
import { motion } from 'framer-motion';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000 // Adjust animation duration as needed
    });
  }, []);

  return (
    <section data-aos='zoom-in' id='services' className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Stunning Web Experiences */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Stunning Web Experiences</h3>
            <p className="text-gray-700 mb-6">
              Transform your vision into reality with captivating web experiences that leave a lasting impression.
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWUsiFAZ-19d1GenUNhwt815DtNK1qhR2PeinAnmKjA&s" alt="Stunning Web Experiences" className="w-full h-auto mx-auto" />
          </motion.div>

          {/* Service 2: Intuitive User Interfaces */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Intuitive User Interfaces</h3>
            <p className="text-gray-700 mb-6">
              Step into the future of design with intuitive and visually stunning user interfaces.
            </p>
            <img src="https://www.icoderzsolutions.com/blog/wp-content/uploads/2019/03/Intuitive-UI-For-Gratifying-UX-Blog-Post-.jpg" alt="Intuitive User Interfaces" className="w-full h-auto mx-auto" />
          </motion.div>

          {/* Service 3: Interactive Web Applications */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold mb-4">Interactive Web Applications</h3>
            <p className="text-gray-700 mb-6">
              Bring your ideas to life with dynamic and interactive web applications that engage and delight users.
            </p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwgTJtqRAE7Cgc4AaZNcxqmOaXCpHub4yoiy_9XNNF8A&s" alt="Interactive Web Applications" className="w-full h-auto mx-auto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
