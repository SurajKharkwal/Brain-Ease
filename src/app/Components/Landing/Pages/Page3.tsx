"use client"
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export const Page3 = () => {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    gsap.set(text1.current, { xPercent: -50})
    gsap.to(text1.current, {
      xPercent: 10,
      opacity: 0.2,
      scrollTrigger: {
        trigger: text1.current,
        scrub: 1,
      }
    });
    gsap.set(text3.current, { xPercent: -40})
    gsap.to(text3.current, {
      xPercent: 50,
      opacity: 0.2,
      scrollTrigger: {
        trigger: text3.current,
        scrub: 1,
      }
    });
    gsap.set(text2.current, { xPercent: 50})
    gsap.to(text2.current, {
      xPercent: -50,
      opacity: 0.2,
      scrollTrigger: {
        trigger: text2.current,
        scrub: 1,
      }
    });
  }, [])

  return (
    <div className='w-[100vw] h-[88vh] overflow-hidden max-md:leading-[25vh] relative text-[20vh] max-md:text-[20vw] font-extrabold'>
      <div className='shine aspect-square w-[10%] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]'></div>
      <h1 className='w-[150vw]' ref={text1}>BRAIN-<i className='text-purple-300 '>EASE</i></h1>
      <h1  ref={text2} id='textShade' className=' max-2xl:w-[300vw] w-[150vw]  textShade text-[#070C24]'>HERE IS HOW IT LOOKS </h1>
      <h1 className='w-[150vw] max-2xl:w-[200vh] ' ref={text3}>LETS <b className='text-purple-300'>GETSTATED</b></h1>
      <h1></h1>
    </div>
  )
}

