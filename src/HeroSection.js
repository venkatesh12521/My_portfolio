import React from 'react';
import { motion } from 'framer-motion';
import Myimage from './WhatsApp Image 2024-04-18 at 17.38.26_73af5d42.jpg';
import { TypeAnimation } from 'react-type-animation';
import { Link as ScrollLink } from 'react-scroll'; // Import Link component from react-scroll for smooth scrolling

const HeroSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white py-20"
    >
      <div id='hero' className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <motion.div
            className="w-32 h-32 md:w-60 md:h-60 rounded-full overflow-hidden"
            whileHover={{ rotateY: 180 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.img
              src={Myimage}
              alt="Your Name"
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
          </motion.div>
          <div className="ml-8">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Venkatesh Veerisetti
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-lg md:text-xl mb-8"
            >
              <p>
                <TypeAnimation
                  sequence={[
                    'Frontend Developer', // Types 'Frontend Developer'
                    1000,            // Waits 1 second
                    'Freelancer', // Replaces with 'Freelancer'
                    2000,            // Waits 2 seconds
                    () => {
                      console.log('Sequence completed');
                      // Other logic here
                    },
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                />
              </p>
            </motion.p>
            {/* Use ScrollLink component for smooth scrolling to contact form */}
            <ScrollLink
              to="contact" // ID of the contact form section
              smooth={true} // Enable smooth scrolling
              duration={500} // Duration of the scroll animation
            >
              <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Contact Me
              </motion.button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
