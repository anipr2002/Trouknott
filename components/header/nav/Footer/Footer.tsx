'use client';

import { motion } from 'framer-motion';
import { translate } from '../../anim';

export default function FooterNav() {
  return (
    <div className="flex flex-wrap items-end text-[12px] uppercase mt-10 md:mt-20 md:justify-between">
      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 md:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex gap-1"
        >
          <span className="text-[#9f9689]">Made by:</span>Ani
        </motion.li>
      </ul>
      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 md:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex gap-1"
        >
          <span className="text-[#9f9689]">Typography:</span> Google Fonts
        </motion.li>
      </ul>
      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 md:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          className="flex gap-1"
        >
          <span className="text-[#9f9689]">Images:</span> Your Photography Company
        </motion.li>
      </ul>
      <ul className="w-1/2 mt-2 overflow-hidden list-none p-0 md:w-auto">
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Privacy Policy
        </motion.li>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          Terms & Conditions
        </motion.li>
      </ul>
    </div>
  );
}

