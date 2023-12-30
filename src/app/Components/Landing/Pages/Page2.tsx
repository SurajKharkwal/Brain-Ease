import React from 'react'

export const Page2 = () => {
  return (
    <div className='w-full h-[82vh] grid justify-center items-center grid-cols-[1fr_1fr] '>
      <div className='w-full h-full flex justify-center items-center' >
        <div className='aspect-square w-[65%] border-2 border-gray-500/30 shadow-2xl shadow-gray-300/10 bg-gray-500/20 rounded-lg backdrop-blur-xl'></div>
      </div>
      <div className='flex justify-center h-full w-full items-center flex-col'>
        <h1 className='font-extrabold text-[5vh] leading-[5vh]'>Chose Between</h1>
        <h1 className='font-extrabold text-[5vh] text-purple-300 leading-[5vh]'>Public <b className='text-white'>or</b> Private</h1>
        <h1 className='font-extrabold text-[5vh] leading-[5vh]'>Hub...</h1>
        <p className='text-slate-400 w-[80%] text-center'><br />
          Discover the Versatility of BrainEase: Where you can create <b>Public</b> or <b>Private</b> Hubs for Dynamic Chatting and Streaming Experiences with People
        </p>
      </div>

    </div>
  )
}
