/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Prototype1 } from '../../Prototype/Prototype1'
import { Gi3DGlasses } from "react-icons/gi";
import { RiFocus2Line } from "react-icons/ri";
import { IoIosAlarm } from "react-icons/io";
import { FaMessage } from "react-icons/fa6";

export const Page1 = () => {
    return (
        <div className='w-full h-full' >
            <div className='w-full min-h-[68vh] mt-[10vh] max-md:mt-[20vh] max-md:flex max-md:flex-col grid grid-cols-[1fr_2fr]'>

                <div className='w-full h-full'>
                    <ul className=' flex pl-[5vh] flex-col justify-center items-start h-full'>
                        <h1 className='font-extrabold text-[5vh] max-md:text-[4vh] leading-[5vh]'>Let's Start</h1>
                        <h1 className='font-extrabold text-[5vh] max-md:text-[4vh] leading-[5v]'>Our Learning</h1>
                        <h1 className='font-extrabold text-[5vh] max-md:text-[4vh] leading-[5vh]'>in <b className='text-purple-300'>Public</b></h1>
                        <br />
                        <p className='text-slate-300 pr-4'>This platform allows you to elevate your focus level and study in public with people you enjoy. I hope you find it appealing.</p>
                        <a className='p-2 bg-purple-300 rounded-lg text-slate-900 font-bold hover:bg-purple-200 mt-4' href="">Get Started</a>
                    </ul>
                </div>
                <div className='w-full max-md:h-[30vh]'>
                    <Prototype1 />
                </div>
            </div>
            <div className='h-[20vh] max-md:pr-4 flex flex-col justify-center items-center w-full'>
                <ul className=' glass w-[40%] max-md:w-[90%] h-[50%] grid grid-cols-[1fr_1fr_1fr_1fr] gap-2 backdrop:blur-xl  justify-center items-center border-2 border-gray-700/40 shadow-xl bg-gray-500/10 rounded-lg'>
                    <li className='flex hover:scale-110 justify-center items-center flex-col'>
                        <Gi3DGlasses className="text-3xl max-md:text-2xl text-gray-500/50" />
                        <b className=' text-gray-500/90'>Streaming</b>
                    </li>
                    <li className='flex hover:scale-110 justify-center items-center flex-col'>
                        <RiFocus2Line className="text-3xl max-md:text-2xl text-gray-500/50 " />
                        <b className=' text-gray-500/90'>FocusTime</b>
                    </li>
                    <li className='flex hover:scale-110 justify-center items-center flex-col'>
                        <IoIosAlarm className="text-3xl max-md:text-2xl text-gray-500/50" />
                        <b className=' text-gray-500/90'>Alarm</b>
                    </li>
                    <li className='flex hover:scale-110 justify-center items-center flex-col'>
                        <FaMessage className="text-3xl max-md:text-2xl text-gray-500/50" />
                        <b className=' text-gray-500/90'>Chatting</b>
                    </li>
                </ul>
            </div>
        </div>
    )
}
