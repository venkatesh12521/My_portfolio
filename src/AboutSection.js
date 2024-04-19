import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  }, []);

  return (
    <section id='about' className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: '50%' }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? '0%' : '50%' }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold mb-8">About Me</h2>
              
              <TypeAnimation
                data-aos="fade-up"
                sequence={[
                  "Web Developer",
                  2000,
                  "Freelancer",
                  2000,
                  "",
                ]}
                speed={30}
                wrapper="h2"
                repeat={Infinity}
                className="text-yellow-500 text-4xl font-bold sm:text-3xl"
              /> 
              <p className="text-lg mb-6">
                Hey there! 👋 I'm Venkatesh, a recent graduate with a passion for frontend development and creating delightful user experiences. I'm excited to embark on my journey in the tech industry and eager to contribute to innovative projects that make a positive impact.
              </p>
              <p className="text-lg mb-6">
                I've had the opportunity to work on several projects during my studies, including building responsive websites, creating interactive web applications, and experimenting with frontend design. These experiences have honed my technical skills and sparked my enthusiasm for frontend development.
              </p>
              <p className="text-lg">
                I'm passionate about leveraging technology to solve real-world problems and enhance user experiences. I thrive in collaborative environments where I can learn from experienced professionals and contribute my ideas to meaningful projects.
              </p>
            </motion.div>
          </div>

          {/* Animated Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden"
          >
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=612x612&w=0&k=20&c=upiDYeAZEsxbUBdhX35MXm79drIXA-5Q-FcfmZk71lM="
              alt="About Me Illustration"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
