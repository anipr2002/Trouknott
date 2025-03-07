import React from 'react'

export default function Content() {
  return (
    <div className='bg-[#9D8C78] py-8 px-12 h-full w-full flex flex-col justify-between'>
      <Section1 />
      <Section2 />
    </div>
  )
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  )
}

const Section2 = () => {
  return (
    <div className='flex justify-between items-end'>
      <h1 className='text-[14vw] leading-[0.8]'>Trouknott</h1>
      <p>©copyright</p>
    </div>
  )
}

const Nav = () => {
  return (
    <div className='flex shrink-0 gap-20'>
      <div className='flex flex-col gap-2'>
        <h3 className='mb-2 uppercase text-[#ffffff80]'>About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>
      <div className='flex flex-col gap-2'>
        <h3 className='mb-2 uppercase text-[#ffffff80]'>Contact</h3>
        <p>Mail</p>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Whatsapp</p>
      </div>
    </div>
  )
}
