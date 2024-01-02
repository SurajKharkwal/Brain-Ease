import React, { useEffect, useRef } from 'react'
import { Footer } from './Footer'
import { FaGithub } from "react-icons/fa";
import gsap from 'gsap';

export const Page6 = () => {
  const textHeading = useRef(null);
  const text = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    const arr = [textHeading.current, text.current, btn.current];
    arr.map(element => {
      gsap.set(element, {
        y: 50,
        opacity: 0,
      })
    });
    arr.map(element =>{
      gsap.to(element, {
        y:0,
        opacity: 1,
        scrollTrigger: {
          trigger: element
        }
      })
    })
    

  }, [])


  return (
    <div className='w-full flex flex-col h-[100vh] '>
      <div className='h-[65vh] w-full flex text-2xl gap-4 justify-center items-center flex-col '>
        <h1 ref={textHeading} className='font-extrabold text-5xl max-sm:text-3xl max-md:text-4xl ' >Collaborate to Brain-<i className='text-purple-300'>Ease</i></h1>
        <p ref={text} className='w-[60%] text-gray-500 font-extralight max-md:text-[2vh] max-md:font-light text-center' >Brain-Ease invites you to join our open-source project available on GitHub! Contribute and be a part of our community to make a difference.</p>
        <a ref={btn} className='flex max-md:text-[2vh] justify-center items-center gap-4  border-2 p-2 rounded-lg text-purple-300 border-purple-300 shadow-md hover:bg-slate-600/20 shadow-purple-200' href=""><FaGithub />Github</a>
      </div>
      <Footer />
    </div>
  )
}
