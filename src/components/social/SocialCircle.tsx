
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter, Github, Dribbble, Youtube, Linkedin, Facebook, Music } from 'lucide-react';

const SocialCircle = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const containerVariants = {
    closed: {
      scale: 1,
      rotate: 0
    },
    open: {
      scale: 1.1,
      rotate: 45,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }
  };
  
  const socialVariants = {
    closed: (i: number) => ({
      opacity: 0,
      y: 0,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay: i * 0.1
      }
    }),
    open: (i: number) => ({
      opacity: 1,
      y: Math.sin(i * (Math.PI / 4)) * 80,
      x: Math.cos(i * (Math.PI / 4)) * 80,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
        delay: i * 0.1
      }
    })
  };
  
  const icons = [
    { Icon: Instagram, color: 'bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400' },
    { Icon: Twitter, color: 'bg-blue-400' },
    { Icon: Github, color: 'bg-gray-800' },
    { Icon: Dribbble, color: 'bg-pink-500' },
    { Icon: Youtube, color: 'bg-red-600' },
    { Icon: Linkedin, color: 'bg-blue-700' },
    { Icon: Facebook, color: 'bg-blue-600' },
    { Icon: Music, color: 'bg-purple-600' },
  ];
  
  return (
    <div className="relative h-96 w-96 flex items-center justify-center">
      <motion.button
        className="absolute z-50 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center justify-center shadow-lg cursor-pointer"
        onClick={toggleMenu}
        variants={containerVariants}
        animate={isOpen ? 'open' : 'closed'}
      >
        <span className="absolute w-8 h-0.5 bg-white rounded-full transform transition-transform duration-300" 
          style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)' }}></span>
        <span className="absolute w-8 h-0.5 bg-white rounded-full transform transition-transform duration-300" 
          style={{ transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)' }}></span>
      </motion.button>
      
      {icons.map((item, i) => (
        <motion.div
          key={i}
          className={`absolute z-40 w-12 h-12 rounded-full ${item.color} text-white flex items-center justify-center shadow-md cursor-pointer`}
          custom={i}
          variants={socialVariants}
          animate={isOpen ? 'open' : 'closed'}
          initial="closed"
        >
          <item.Icon size={20} />
        </motion.div>
      ))}
    </div>
  );
};

export default SocialCircle;