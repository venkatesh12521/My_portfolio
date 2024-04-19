import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import web from './1.jpg'
import Task from './Task1.png'
import Figma from './figma.png'

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibility = () => {
      const currentScrollPos = window.pageYOffset;
      if (currentScrollPos > 1500) {
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

  const projects = [
    {
      title: 'Web Page interface',
      description: '"Our webpage interface is responsive, delivering a seamless experience on any device. Enjoy fluid layouts and intuitive navigation across desktops, tablets, and smartphones."',
      imageUrl: web,
      demoUrl: 'https://magnificent-licorice-7893c2.netlify.app/',
      githubUrl: 'https://github.com/venkatesh12521/WebPage.git',
    },
    {
      title: 'Task Manager App',
      description: 'Task Management App Overview This is a simple task management web application built using React. It allows users to add, delete, and move tasks between different statuses such as "Pending", "In Progress", and "Completed".',
      imageUrl: Task,
      demoUrl: 'https://task-tracker-ruddy-ten.vercel.app/',
      githubUrl: 'https://github.com/venkatesh12521/task-manager.git',
    },
    {
      title:'Figma design',
      description:'"Explore our Figma page built with Next.js and Tailwind CSS, offering seamless navigation and sleek design. With a background color toggle button, customize your viewing experience effortlessly."',
      imageUrl:Figma,
      demoUrl:"https://figmaproject-git-master-veerisettivenky1234-gmailcoms-projects.vercel.app/",
      githubUrl:'https://github.com/venkatesh12521/Figmaproject.git'
    }
    // Add more projects as needed
  ];

  return (
    <section id='projects' className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: '50%' }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? '0%' : '50%' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-md p-6 hover:scale-110">
                <img src={project.imageUrl} alt={project.title} className="w-full h-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.demoUrl} className="text-blue-600 hover:underline">View Demo</a>
                  <a href={project.githubUrl} className="text-blue-600 hover:underline">GitHub</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
