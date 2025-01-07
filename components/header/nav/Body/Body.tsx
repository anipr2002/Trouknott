import { motion } from 'framer-motion';
import Link from 'next/link';
import { blur, translate } from '../../anim';

interface BodyProps {
  links: { title: string; href: string }[];
  selectedLink: { isActive: boolean; index: number };
  setSelectedLink: (link: { isActive: boolean; index: number }) => void;
}

export default function BodyNav({ links, selectedLink, setSelectedLink }: BodyProps) {
  const getChars = (word: string) => {
    return word.split('').map((char, i) => (
      <motion.span
        custom={[i * 0.02, (word.length - i) * 0.01]}
        variants={translate}
        initial="initial"
        animate="enter"
        exit="exit"
        key={`${char}_${i}`}
      >
        {char}
      </motion.span>
    ));
  };

  return (
    <div className="flex flex-wrap mt-10 md:mt-20">
      {links.map((link, index) => (
        <Link key={`l_${index}`} href={link.href} className="no-underline uppercase text-black">
          <motion.p
            onMouseOver={() => setSelectedLink({ isActive: true, index })}
            onMouseLeave={() => setSelectedLink({ isActive: false, index })}
            variants={blur}
            animate={selectedLink.isActive && selectedLink.index !== index ? 'open' : 'closed'}
            className="m-0 flex overflow-hidden text-[32px] md:text-[5vw] font-light pr-[30px] pt-[10px]"
          >
            {getChars(link.title)}
          </motion.p>
        </Link>
      ))}
    </div>
  );
}

