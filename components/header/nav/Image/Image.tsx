'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { opacity } from '../../anim';

export default function ImageNav({ src, isActive }: { src: string; isActive: boolean }) {
  return (
    <motion.div
      variants={opacity}
      initial="initial"
      animate={isActive ? 'open' : 'closed'}
      className="hidden md:block w-[500px] h-[450px] relative"
    >
      <Image src={`/${src}`} fill={true} alt="image" className="object-cover" />
    </motion.div>
  );
}

