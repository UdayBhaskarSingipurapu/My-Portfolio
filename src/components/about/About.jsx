import React from 'react'
import profile from '../../assets/udaybhaskar.jpg'
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
                    src={profile}
                    alt=""
                    className="rounded-2xl w-[270px] h-[290px] md:w-[400px] md:h-[410px] lg:w-[400px] lg:h-[400px] mx-auto"
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
                <div className='flex flex-col sm:flex-row mt-5 gap-4 text-[17px]'>
                    <a
                        href="#contact"
                        className='text-white bg-blue-500 px-5 py-3 font-bold flex items-center justify-center hover:bg-blue-600 transition rounded'
                    >
                        Get In Touch
                        <span className='ml-2 text-2xl'><MoveRight /></span>
                    </a>

                    <a
                        href='https://drive.google.com/file/d/14HrUsqyZ-Wkbx1O9YUZenowl3V-42hGR/view?usp=sharing'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-blue-400 border-2 border-blue-500 px-5 py-3 text-center hover:bg-blue-500 hover:text-white transition rounded'
                    >
                        View Resume
                    </a>
                </div>

            </div>
            <hr className="my-6 border-t border-gray-700" />
        </div>
    );
}

export default About