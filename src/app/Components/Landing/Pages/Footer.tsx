/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaGithub } from "react-icons/fa";
import footerImage from '../../../../../public/images/footer.png';

export const Footer = () => {
    return (
        <div className='w-full font-extralight bg-neutral-900 flex justify-center items-center flex-col '>
            <div className='flex justify-center w-full items-center'>
                <div className='w-[50%] max-md:w-[70%] p-2 grid justify-center gap-3 items-center'>
                    <h5 className=' text-purple-300 font-extralight'>No Hidden charges included</h5>
                    <h2 className='font-extrabold text-3xl'>Start using Brain-<i className='text-purple-300'>Ease</i></h2>
                    <div className='flex items-center gap-[7vw] border-b-2 justify-center'>
                        <p className='p-2'>Click the btn to get started</p>
                        <a className='bg-purple-300 p-1 rounded-md shadow-sm shadow-gray-900/80' href="">Start</a>
                    </div>
                </div>
                <div className='w-[50vw] max-sm:hidden h-auto p-4 flex justify-center items-center'>
                    <div className='w-[30vw] max-lg:w-[40vw] '>
                        <Image
                            src={footerImage}
                            alt='img'
                            style={{
                                maxWidth: '60%',
                                height: "auto",
                            }} />
                    </div>
                </div>
            </div>
            <div className='flex max-md:flex-col p-8 justify-center items-center w-full'>
                <div className='w-full flex justify-center items-center flex-col'>
                    <h1>Brain-<i className='text-purple-300'>Ease</i></h1>
                    <p>Hope you like the website...</p>
                </div>
                <div className='w-full flex justify-center items-center gap-4'>
                    <div className='flex flex-col'>
                        <b>Policy</b>
                        <a href="">Privacy</a>
                        <a href="">Cookie</a>
                    </div>
                    <div className='flex flex-col'>
                        <p>Account</p>
                        <a href="">Sign-in</a>
                        <a href="">Sign-up</a>
                    </div>
                    <div className='flex justify-center items-center flex-col'>
                        <b>Let's Chat</b>
                        <i>kharkwalsuraj13@gmail.com</i>
                        <i className='flex gap-4 justify-start items-center'>
                            <FaInstagram />
                            <FaLinkedin />
                            <FaGithub />
                        </i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
