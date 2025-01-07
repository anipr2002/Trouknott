"use client"
import Description from '@/components/main/Description'
import Intro from '@/components/main/Intro'
import Section from '@/components/main/Section'
import Footer from '@/components/footer/Footer1'
import Preloader from '@/components/preloader/Preloader'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Scroll from '@/components/main/Scroll'
import Header from '@/components/header/Header'
import ImageScroll from '@/components/main/ImageScroll'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    setTimeout(() => {
      setIsLoading(false)
      window.scrollTo(0, 0)
    }, 2000)
  }, [])
  return (
    <>
      <main>
        <Header />
        <AnimatePresence mode='wait'>
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Intro />
        <Description />
        <Section />
        {/* <div className='h-[50%]'></div> */}
        <Scroll />
        <ImageScroll />
        <Footer />
      </main>
    </>
  );
}
