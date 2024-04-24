import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TimelineSection = () => {
  const events = [
    { year: '2019 - 2023', title: 'Bachelor\'s  in Electronics And Communication', description: 'Usha Rama College Of Engineering And Technology' },
    { year: '2017 - 2019', title: 'Intermediate', description: 'Narayana Jr College, Gudivada' },
    { year: '2016 - 2017', title: 'SSC', description: 'Triveni Public School, Gudivada' }
    // Add more events as needed
  ];

  return (
    <section id='timeline' className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Timeline</h2>
        <div className="relative">
          {events.map((event, index) => (
            <TimelineEvent key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineEvent = ({ event, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{ duration: 0.1, delay: index * 0.1 }}
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
  );
};

export default TimelineSection;
