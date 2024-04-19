import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TimelineSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 2000) {
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

  const events = [
    { year: '2019 - 2023', title: 'Bachelor\'s  in Electronics And Communicaation ', description: 'Usha Rama College Of Engineering And Technology' },
    { year: '2017 - 2019', title: 'Intermediate', description: 'Narayana Jr College,Gudivada' },
    {year:'2016 - 2017', title:'SSC',description:'Triveni Public School,Gudivada'}
    // Add more events as needed
  ];

  return (
    <section id='timeline' className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Timeline</h2>
        <div className="relative">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: '50%' }}
              animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? '0%' : '50%' }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-12"
            >
              <div className="flex items-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center text-white border-2 border-white rounded-full font-semibold text-lg mr-4">{event.year}</div>
                <div>
                  <h3 className="text-xl font-bold">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
