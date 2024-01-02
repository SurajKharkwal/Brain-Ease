import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export const Page2 = () => {
  const box = useRef(null);
  const textHeading = useRef(null);
  const text = useRef(null);

  useEffect(() => {
    gsap.set([box.current, textHeading.current, text.current], {
      y: 60,
      opacity: 0,
    })
    const arr = [box.current, textHeading.current, text.current]
    arr.map(element => {
      gsap.to(element, {
        y:0,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          start: "top 75%",
          trigger: element,
        }
      })
    });

  }, [])


  return (
    <div className='w-full h-[82vh] grid justify-center items-center grid-cols-[1fr_1fr] max-md:flex max-md:flex-col '>
      <div className='w-full h-full flex justify-center items-center' >
        <div ref={box} className='aspect-square w-[65%] border-2 border-gray-500/30 shadow-2xl shadow-gray-300/10 bg-gray-500/20 rounded-lg backdrop-blur-xl'></div>
      </div>
      <div className='flex justify-center h-full w-full items-center flex-col'>
        <div ref={textHeading} className='text-center '>
          <h1 className='font-extrabold text-[5vh] leading-[5vh]'>Chose Between</h1>
          <h1 className='font-extrabold text-[5vh] text-purple-300 leading-[5vh]'>Public <b className='text-white'>or</b> Private</h1>
          <h1 className='font-extrabold text-[5vh] leading-[5vh]'>Hub...</h1>
        </div>
        <p ref={text} className='text-slate-400 w-[80%] text-center'><br />
          Discover the Versatility of BrainEase: Where you can create <b>Public</b> or <b>Private</b> Hubs for Dynamic Chatting and Streaming Experiences with People
        </p>
      </div>

    </div>
  )
}
