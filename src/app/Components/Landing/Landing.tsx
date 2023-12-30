"use client"
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Page1 } from './Pages/Page1'
import { Page2 } from './Pages/Page2'
import { Page3 } from './Pages/Page3'
import { Page4 } from './Pages/Page4'
import { Page5 } from './Pages/Page5'
import { Page6 } from './Pages/Page6';


gsap.registerPlugin(ScrollTrigger);

export const Landing = () => {
  const Landing = useRef(null);
  const page1 = useRef(null);
  const page2 = useRef(null);
  const page3 = useRef(null);
  const page4 = useRef(null);
  const page5 = useRef(null);
  const hTab = useRef(null);

  useEffect(() => {
    const LandingCurrent = Landing.current;
    const hTabCurrent = hTab.current;
    const page1Current = page1.current;
    const page2Current = page2.current;
    const page3Current = page3.current;
    const page4Current = page4.current;
    const page5Current = page5.current;

    gsap.set(LandingCurrent, {
      opacity: 0,
      y: -60,
      scale: 0.9
    });

    gsap.to(LandingCurrent, {
      delay: 0.5,
      opacity: 1,
      duration: 1,
      y: 0,
      scale: 1
    });
    gsap.to([page3Current, page4Current, page5Current], {
      xPercent: -200,
      ease: "none",
      scrollTrigger: {
        trigger: hTabCurrent,
        start: "top 9%",
        pinSpacing:false,
        pin: true,
        scrub:1,
        end: "bottom 80%",
        immediateRender: false,
        markers: true
      }
    })



  }, []);

  return (
    <div ref={Landing} className='mt-[12vh] '>
      <div ref={page1} className='w-full h-full'>
        <Page1 />
      </div>
      <div ref={page2} className='w-full h-full'>
        <Page2 />
      </div>
      <div className='overflow-hidden pin'>
        <div ref={hTab} id='hTab' className='flex w-full overflow-x-hidden relative h-[88vh]'>
          <div ref={page3} className=' hSet w-full left-0 absolute z-10 h-full'>
            <Page3 />
          </div>
          <div ref={page4} className=' hSet w-full left-[100%] absolute z-20 h-full'>
            <Page4 />
          </div>
          <div ref={page5} className=' hSet w-full absolute left-[200%] z-30 h-full'>
            <Page5 />
          </div>
        </div>
      </div>
      <div>
        <Page6 />
      </div>
    </div>
  );
};

