"use client"
import { useEffect } from 'react'
import Lenis from 'lenis'
import React from 'react'
import Zoom from '@/components/album/ZoomParallax/Zoom'

const Album = () => {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className="mt-[50vh] mb-[100vh]">
      <Zoom />
    </main>
  )
}

export default Album
