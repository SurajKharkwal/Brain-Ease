"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export const Page5 = () => {
  const glassBox = useRef(null)
  const box1 = useRef(null)
  const box2 = useRef(null)
  const box3 = useRef(null)
  const box4 = useRef(null)
  const wrapper = useRef(null)

  useEffect(() => {
    gsap.set(box1.current, {
      xPercent: 50,
      yPercent: 50,
      opacity: 0,
      scale: 0.5,
    })
    gsap.set(box2.current, {
      xPercent: 50,
      yPercent: -50,
      opacity: 0,
      scale: 0.5,
    })
    gsap.set(box3.current, {
      xPercent: -50,
      yPercent: -50,
      opacity: 0,
      scale: 0.5,
    })
    gsap.set(box4.current, {
      xPercent: -50,
      yPercent: 50,
      opacity: 0,
      scale: 0.5,
    })
    gsap.to([box1.current, box2.current, box3.current, box4.current], {
      xPercent: 0,
      yPercent: 0,
      scale: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: box1.current,
        start: "900% center",
        end: "+=400 top",
        scrub: 1,
      }
    })
    gsap.set (glassBox.current, { opacity: 0, scale: 0.8});
    gsap.to (glassBox.current, {
      opacity: 1, 
      scale: 1,
      scrollTrigger: {
        trigger: glassBox.current,
        scrub: 1,
        start: "+=1500 center"
      }
    })

  }, [])


  return (
    <div className='w-[100vw] flex justify-center items-center h-[88vh]'>
      <div ref={glassBox} className='w-[90%] flex justify-center items-center h-[90%] border-2 border-gray-500/30 shadow-2xl shadow-gray-300/10 bg-gray-500/20 rounded-lg backdrop-blur-xl'>
        <div ref={wrapper} className='w-[95%] h-[95%] flex flex-col ' >

          <div className='w-[100%] flex h-[50%]'>
            <div ref={box1} className='w-[100%] h-[100%] max-md:hidden bg-white' ></div>
            <div ref={box2} className='w-[100%] h-[100%] bg-purple-200' ></div>
          </div>
          <div className='w-[100%] flex h-[50%]'>
            <div ref={box3} className='w-[100%] h-[100%] max-md:hidden bg-cyan-100' ></div>
            <div ref={box4} className='w-[100%] h-[100%] bg-amber-100' ></div>
          </div>
        </div>
      </div>
    </div>
  )
}
