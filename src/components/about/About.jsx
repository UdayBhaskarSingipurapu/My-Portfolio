import React from 'react'
import image from '../../assets/image.png'
import { CodeXml } from 'lucide-react';
import { Mails } from 'lucide-react';
import { HiOutlineLightBulb } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { MoveRight } from 'lucide-react';

const About = () => {
    return (
        <div className="ps-2 flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-0 lg:items-center">
            <div className="lg:w-[40%] ">
                <img
                    src={image}
                    alt=""
                    className="rounded-2xl w-[280px] h-[270px] md:w-[400px] md:h-[380px] lg:w-[420px] lg:h-[420px] mx-auto"
                />
            </div>
            <div className="lg:w-[60%] md:ps-4">
                <h2 className="text-3xl">About Me</h2>
                <div className="mt-5 h-1 w-20 bg-blue-500 rounded mb-4"></div>
                <p className="text-2xl">Software Development Engineer</p>
                <br />
                <p>
                    I'm a passionate Software Development Engineer with a strong
                    foundation in algorithms, data structures, and web development. My
                    journey began with solving complex problems and evolved into
                    creating intuitive digital experiences.
                </p>
                <br />
                <p>
                    With expertise in modern frameworks like React and Next.js, I
                    specialize in building responsive, accessible, and performant web
                    applications. I enjoy optimizing code efficiency and user experience
                    equally.
                </p>
                <div className='mt-5 flex flex-wrap md:flex-row'>

                    <div className='flex flex-row gap-4 items-center w-full md:w-1/2 mb-6'>
                        <HiOutlineLightBulb  className='text-blue-500 bg-neutral-800 p-1 h-[40px] w-[30px]' />
                        <div>
                            <p className='text-2xl'>Problem Solving</p>
                            <p>Analytical approach to challenges</p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-4 items-center w-full md:w-1/2 mb-6'>
                        <CodeXml className='text-blue-500 bg-neutral-800 p-1 h-[40px] w-[30px]' />
                        <div>
                            <p className='text-2xl'>Clean Code</p>
                            <p>Maintainable, readable solutions</p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-4 items-center w-full md:w-1/2 mb-6'>
                        <Mails className='text-blue-500 bg-neutral-800 p-1 h-[40px] w-[30px]' />
                        <div>
                            <p className='text-2xl'>Communication</p>
                            <p>Clear and effective teamwork</p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-4 items-center w-full md:w-1/2 mb-6'>
                        <AiOutlineThunderbolt className='text-blue-500 bg-neutral-800 p-1 h-[40px] w-[30px]' />
                        <div>
                            <p className='text-2xl'>Fast Learner</p>
                            <p>Adapting to new technologies</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row mt-5 gap-6 text-[17px]'>
                    <button className='text-white bg-blue-500 p-3 font-bold flex items-center'>
                        Get In Touch
                        <span className='font-bold ml-2 text-2xl'><MoveRight /></span>
                    </button>
                    <button className='text-blue-400 border-2 border-blue-500 p-3'>View Resume</button>
                </div>
            </div>
            <hr className="my-6 border-t border-gray-700" />
        </div>
    );
}

export default About