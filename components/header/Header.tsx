'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { opacity, background } from './anim';
import Nav from './nav/Nav';
import { Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="fixed top-0 z-[99999] w-full bg-[#f4f0ea] box-border p-4 md:p-5"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1],
        delay: 2, // Delay for the preloader animation
      }}
    >
      <div className="relative flex justify-center text-[12px] md:text-[15px] uppercase font-normal">
        <Link href="/" className="absolute left-0 text-black no-underline flex items-center h-full">

          <Image src="/logo.png" width={40} height={40} alt="Trouknott" />
          <span>Trouknott</span>
        </Link>
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex items-center justify-center gap-2 cursor-pointer"
        >
          <div
            className={`relative w-[22.5px] before:block before:h-[1px] before:w-full before:bg-black before:absolute before:top-[-4px] before:transition-all before:duration-1000 before:ease-[cubic-bezier(0.76,0,0.24,1)] after:block after:h-[1px] after:w-full after:bg-black after:absolute after:top-[4px] after:transition-all after:duration-1000 after:ease-[cubic-bezier(0.76,0,0.24,1)] ${
              isActive
              ? 'before:rotate-45 before:top-0 after:-rotate-45 after:top-0'
              : ''
              }`}
          ></div>
          <div className="relative flex items-center">
            <motion.p
              variants={opacity}
              animate={!isActive ? 'open' : 'closed'}
              className="m-0"
            >
              Menu
            </motion.p>
            <motion.p
              variants={opacity}
              animate={isActive ? 'open' : 'closed'}
              className="absolute m-0 opacity-0"
            >
              Close
            </motion.p>
          </div>
        </div>
        <motion.div
          variants={opacity}
          animate={!isActive ? 'open' : 'closed'}
          className="absolute right-0 flex gap-8"
        >
          {/* <p className="hidden md:block cursor-pointer">Shop</p> */}
          <div className="flex items-center gap-2">
            <Instagram className="text-black/50" />
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? 'open' : 'closed'}
        className="absolute left-0 top-full w-full h-full bg-black opacity-50"
      ></motion.div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </motion.div>
  );
}
