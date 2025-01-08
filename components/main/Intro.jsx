"use client";
import React from 'react'
import Image from 'next/image';
import Background from '../../public/b.png';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Reveal } from '@/components/animation/reveal';
import { Title } from '@/components/animation/title';

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start']
  })


  return (
    <>
    <div className="mx-auto flex h-dvh flex-col items-center justify-center px-8 lg:max-w-[75%] lg:px-16">
        <Title className="relative z-20 mb-8 mt-64 text-center text-[3.75rem] font-normal uppercase leading-[.85] text-[tomato] mix-blend-color-dodge md:text-[8rem] lg:mt-0 lg:text-[12rem]">
          <div className="overflow-hidden px-2">
            <span className="block"> TROUKNOTT </span>
          </div>

        </Title>
      </div>

      <Reveal className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={Background}
          className="h-full w-full scale-[2] object-cover object-bottom"
          alt=""
          priority
        />
      </Reveal>
    </>
  )
}
