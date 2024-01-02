"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'

export const Page4 = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const box = useRef(null);
  useEffect(() => {
    gsap.set(text1.current, { xPercent: 50, opacity: 0 })
    gsap.to(text1.current, {
      xPercent: -50,
      opacity: 1,
      scrollTrigger: {
        trigger: text1.current,
        start: "+=1000 center",
        end: "+=1000, top",
        scrub: 1,
      }
    });
    gsap.set(text2.current, { xPercent: -50, opacity: 0 })
    gsap.to(text2.current, {
      xPercent: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: text2.current,
        start: "+=700 center",
        end: "+=1000, top",
        scrub: 1,
      }
    });
    gsap.set(box.current, { scale: 0.5, opacity:0})
    gsap.to(box.current, {
      scale: 1,
      opacity:1,
      scrollTrigger: {
        trigger: box.current,
        start: "+=700 center",
        end: "+=1000, 30%",
        scrub: 1,
      }
    });
  }, []);


  return (
    <div className='w-[100vw] flex justify-center flex-col-2 relative h-[88vh] '>
      <div className='absolute bottom-0 right-0 shine aspect-square w-[25%]'></div>
      <section className=' -rotate-90 w-[88vh] h-[20vw] text-[15vh] font-extrabold'>
        <h1 ref={text1} className='leading-10'>Home</h1>
        <h1 ref={text2} className='textShade text-[#070C24]' >Page</h1>
      </section>
      <div ref={box} className='w-[80vw] flex justify-center items-center aspect-video'>
        <div className='w-[80%] max-lg:-translate-x-[30%] max-md:mr-14 max-md:w-[90%] max-md:-translate-x-[40%] aspect-video bg-white ' ></div>
      </div>
    </div>
  )
}
