"use client"
import Description from '@/components/main/Description'
import Intro from '@/components/main/Intro'
import Section from '@/components/main/Section'
import Footer from '@/components/footer/Footer2'
import Preloader from '@/components/preloader/Preloader'
import Lenis from 'lenis'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Scroll from '@/components/main/Scroll'
import ImageScroll from '@/components/main/ImageScroll'
import { useStore } from '@/store/store'

export default function Home() {

  const [isLoading, setIsLoading] = useState(true)
  const { isPreload, setIsPreload } = useStore()

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
      setIsPreload()
    }, 2000)
  }, [])
  return (
    <>
      <main>
        <AnimatePresence mode='wait'>
          {isLoading && !isPreload && <Preloader />}
        </AnimatePresence>
        <Intro />
        <Description />
        <Section />
        <Scroll />
        <ImageScroll />
        <Footer />
      </main>
    </>
  );
}
