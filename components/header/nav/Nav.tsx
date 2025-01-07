'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { height } from '../anim';
import BodyNav from './Body/Body';
import FooterNav from './Footer/Footer';
import ImageNav from './Image/Image';

const links = [
  { title: 'Home', href: '/', src: 'home.png' },
  { title: 'Shop', href: '/shop', src: 'shop.png' },
  { title: 'About Us', href: '/about', src: 'home.png' },
  { title: 'Album', href: '/album', src: 'lookbook.png' },
  { title: 'Contact', href: '/contact', src: 'contact.png' },
];

export default function Index() {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className="overflow-hidden"
    >
      <div className="flex flex-col gap-12 mb-20 md:mb-0 md:flex-row md:justify-between">
        <div className="flex flex-col justify-between">
          <BodyNav links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <FooterNav />
        </div>
        <ImageNav src={links[selectedLink.index].src} isActive={selectedLink.isActive} />
      </div>
    </motion.div>
  );
}

