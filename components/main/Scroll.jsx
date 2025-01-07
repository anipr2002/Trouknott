'use client';

import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import styles from './Scroll.module.scss';

const phrase = "Weddings are a celebration of love and commitment, bringing together family and friends to create cherished memories that last a lifetime. From intimate gatherings to grand ceremonies, each wedding is a unique reflection of the couple's story and vision. With meticulous planning, thoughtful details, and a touch of creativity, we craft unforgettable experiences that perfectly capture the essence of your special day";

export default function Scroll() {

  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect( () => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
      gsap.to(refs.current, {
        scrollTrigger: {
            trigger: container.current,
            scrub: true,
            start: `top 50%`,
            end: `+=${window.innerHeight / 1.5}`,
        },
        opacity: 1,
        ease: "none",
        stagger: 0.1
    })
  }

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach( (word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    })
    return body
  }

  const splitLetters = (word) => {
    let letters = []
    word.split("").forEach( (letter, i) => {
      letters.push(<span className = "text-2xl md:text-[3.5vw]" key={letter + "_" + i} ref={el => {refs.current.push(el)}}>{letter}</span>)
    })
    return letters;
  }

  return (
    <main ref={container} className={styles.main}>
      <div ref={body} className={styles.body}>
        {
          splitWords(phrase)
        }
      </div>
    </main>
  )
}