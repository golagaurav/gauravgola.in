import React, { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  hamFastFadeContainer,
  popUp,
} from "./../../content/FramerMotionVariants";
import { useDarkMode } from "../../context/darkModeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import NavBar from "./os";
import { UserName } from "@/utils/utils";
import Image from "next/image";


/* Navbar Component */
export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const { isDarkMode, changeDarkMode } = useDarkMode();


  return (
    <div
      className="w-full fixed dark:text-white top-0 flex items-center justify-between bg-white dark:bg-black bg-opacity-70 dark:bg-opacity-70 px-4 py-[10px] sm:px-6 z-50 print:hidden"
      ref={navRef}
    >

      <Link href="/" className="mr-3 flex" aria-label="Link to Home Page">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={popUp}
        className="cursor-pointer"
      >
        <Image src="/img/logo.png" alt={UserName} width="40" height="40"  />
      </motion.div>
      </Link>

      {/* DarkMode Container */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={popUp}
        className="cursor-pointer flex space-x-6"
      >
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={changeDarkMode}
          size={24}
        />
      </motion.div>

      <motion.div
          className="fixed font-normal rounded-lg z-10"
          variants={hamFastFadeContainer}
          initial="hidden"
          animate="visible"
          exit="hidden" >
        <NavBar />
      </motion.div>
    </div>
  );
}

