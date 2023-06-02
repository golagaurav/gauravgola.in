import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GoFileMedia, GoGear, GoHome, GoPerson } from "react-icons/go";
import { motion } from 'framer-motion';
import { TbMovie } from "react-icons/tb";

const MobileNav: React.FC = () => {
  const router = useRouter();

  const navLinks = [
    { name: 'Home', icon: <GoHome size={24} /> },
    { name: 'About', icon: <GoPerson size={24} /> },
    { name: 'Media', icon: <TbMovie size={24} /> },
    { name: 'Uses', icon: <GoGear size={24} /> },
    { name: 'Gallery', icon: <GoFileMedia size={24} /> },
  ];

  const linkVariants = {
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.1,
      },
    },
  };

  return (
    <nav className="fixed bottom-3 left-1 right-1 border dark:border-gray-800 md:top-0 rounded-lg flex justify-around items-center h-16 bg-gradient-to-b from-white to-gray-200 dark:from-black dark:to-gray-800">
      {navLinks.map((link) => (
        <Link
          key={link.name}
          href={link.name.toLowerCase() === 'home' ? '/' : `/${link.name.toLowerCase()}`}
        >
          <motion.div
            className={`flex flex-col items-center justify-center text-black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 ${
              router.pathname === `/${link.name.toLowerCase()}` ? 'text-blue-500 dark:text-blue-500' : ''
            }`}
            whileTap="tap"
            variants={linkVariants}
          >
            <div className="flex flex-col justify-center items-center">
              <div>
                {link.icon}
              </div>
              <div className="text-xs">
                {link.name}
              </div>
            </div>
          </motion.div>
        </Link>
      ))}
    </nav>
  );
};

export default MobileNav;