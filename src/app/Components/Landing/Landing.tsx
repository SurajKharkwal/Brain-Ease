"use client"
import React, { useEffect, useRef } from 'react'
import { Page1 } from './Pages/Page1'
import { Page2 } from './Pages/Page2'
import { Page3 } from './Pages/Page3'
import { Page4 } from './Pages/Page4'
import { Page5 } from './Pages/Page5'
import { Page6 } from './Pages/Page6'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);



export const Landing = () => {
  const container = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);
  const wrapper = useRef(null);
  const pages = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.set(wrapper.current, {
      y: -120,
      scale: 0.9,
      opacity: 0
    })
    gsap.to(wrapper.current, {
      y: 0,
      opacity: 1,
      scale: 1,
      delay: 0.5,
      duration: 1,
    })

    gsap.to([page3.current, page4.current, page5.current], {
      xPercent: -200,
      scrollTrigger: {
        trigger: pages.current,
        start: "top top",
        scrub: 1,
        end: "+=3000 bottom"
      }
    })

  }, [])


  return (
    <div className='w-full bg-[#070C24] h-full' ref={wrapper}>
      <div className="shine absolute top-0 left-[25%] w-[25%] h-[25vh] "></div>
      <div className="shine absolute top-0 left-[25%] w-[25%] h-[25vh] "></div>
      <div className="shine absolute top-[90vh] right-10 w-[25%] h-[25vh] "></div>
      <div className="shine absolute top-[90vh] right-10 w-[25%] h-[25vh] "></div>
      <div><Page1 /></div>
      <div><Page2 /></div>
      <div ref={container} className='relative h-[350vh]'>
        <div ref={pages} className='sticky flex overflow-hidden top-[10vh]' >
          <div ref={page3} ><Page3 /></div>
          <div ref={page4} ><Page4 /></div>
          <div ref={page5} ><Page5 /></div>
        </div>
      </div>
      <div><Page6 /></div>
    </div>
  )
}
