import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const skills = [
    { name: 'HTML', logo: 'https://th.bing.com/th/id/OIP.sTD3jjh3OYnaOY4GJvP4SAHaHa?w=186&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'CSS', logo: 'https://th.bing.com/th/id/OIP.OKxa5pUz8liY78zSRbsIegHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'JavaScript', logo: 'https://th.bing.com/th/id/OIP.25vSXGJsvi1u3JIjcfvfNQHaEo?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'Bootstrap', logo: 'https://th.bing.com/th/id/OIP.oDkmpM5TPGWwG8e9O8G1sQHaF5?w=235&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    { name: 'React', logo: 'https://th.bing.com/th/id/OIP.N7g0TdF5W30m_UmYNP_JwgHaGo?w=198&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
    {name:'jQuery', logo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGMHefGS4Jc3NHxMLCKF5DrjURg5iFrI_lxaTX2H6wLw&s'},
    {name:'Tailwind CSS', logo:'https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png'},
    {name:'SQL',logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sql_data_base_with_logo.png/640px-Sql_data_base_with_logo.png'}
    // Add more skills with logos as needed
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 700) {
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
    <section id='skills' className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: '50%' }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? '0%' : '50%' }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="bg-white p-4 rounded shadow text-center overflow-hidden relative z-10"
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-16 h-16 mx-auto rounded-full"
                  />
                  <p className="mt-2">{skill.name}</p>
                </motion.div>
                <motion.div
                  whileHover={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 bg-blue-500 rounded-full opacity-0"
                ></motion.div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
