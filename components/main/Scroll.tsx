'use client';

import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';

const phrase = "Weddings are a celebration of love and commitment, bringing together family and friends to create cherished memories that last a lifetime. From intimate gatherings to grand ceremonies, each wedding is a unique reflection of the couple's story and vision. With meticulous planning, thoughtful details, and a touch of creativity, we craft unforgettable experiences that perfectly capture the essence of your special day";

export default function Scroll() {

  let refs = useRef<HTMLSpanElement[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: "top 50%",
        end: `+=${window.innerHeight / 1.5}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.1,
    });
  };

  const splitWords = (phrase: string) => {
    let body: JSX.Element[] = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(
        <p key={`${word}_${i}`} className="text-[3.5vw] font-bold m-0 mr-[1.5vw]">
          {letters}
        </p>
      );
    });
    return body;
  };

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={`${letter}_${i}`}
          ref={(el) => {
            if (el) refs.current.push(el);
          }}
          className="opacity-20"
        >
          {letter}
        </span>
      );
    });
    return letters;
  };

  return (
    <div ref={container} className="flex h-screen items-end justify-center  text-black">
      <div ref={body} className="w-[90%] flex flex-wrap">
        {splitWords(phrase)}
      </div>
    </div>
  );
}

