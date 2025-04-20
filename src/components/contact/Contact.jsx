import React from 'react';
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import linkedin from '../../assets/linkedin-1-svgrepo-com.svg';
import github from '../../assets/github-142-svgrepo-com.svg';

const Contact = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-2'>Contact</h1>
                <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>
                <p className='text-base mt-5 max-w-xl text-center'>Let's connect to discuss opportunities, collaborations, or just to say hello.</p>
            </div>

            {/* Get in Touch Section */}
            <div className="bg-[#1f1f1f] text-white mx-auto p-6 rounded-lg shadow-lg border border-gray-700 w-3/4 md:w-[75%] lg:w-[60%]">
                <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>

                <div className="flex items-start space-x-4 mb-4">
                    <div className="text-blue-400 text-2xl rounded-full p-2">
                        <MdEmail />
                    </div>
                    <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:s.udaybhaskar116@gmail.com" className="text-gray-300 hover:underline">s.udaybhaskar116@gmail.com</a>
                    </div>
                </div>

                <div className="flex items-start space-x-4 mb-4">
                    <div className="text-blue-400 text-2xl rounded-full p-2">
                        <MdLocationOn />
                    </div>
                    <div>
                        <p className="font-medium">Location</p>
                        <p className="text-gray-300">Vijayawada, AP, India</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="text-blue-400 text-2xl rounded-full p-2">
                        <MdAccessTime />
                    </div>
                    <div>
                        <p className="font-medium">Response Time</p>
                        <p className="text-gray-300">Usually within 24 hours</p>
                    </div>
                </div>
            </div>

            {/* Connect Me Section */}
            <div className="bg-[#1f1f1f] text-white mx-auto p-6 rounded-lg shadow-lg border border-gray-700 w-3/4 md:w-[75%] lg:w-[60%]">
                <h2 className="text-2xl font-semibold mb-6">Connect Me</h2>
                <div className='flex flex-col md:flex-row flex-wrap gap-4'>

                    <a href="https://linkedin.com/in/uday-bhaskar-singipurapu" target="_blank" rel="noopener noreferrer"
                        className='md:w-1/4 rounded-2xl bg-[#2f2f2f] p-4 mx-auto items-center flex flex-col hover:bg-[#3a3a3a] transition'>
                        <img src={linkedin} alt="LinkedIn" className='w-14 h-14' />
                        <h1 className='text-xl mt-2'>LinkedIn</h1>
                    </a>

                    <a href="https://github.com/UdayBhaskarSingipurapu" target="_blank" rel="noopener noreferrer"
                        className='md:w-1/4 rounded-2xl bg-[#2f2f2f] p-4 mx-auto items-center flex flex-col hover:bg-[#3a3a3a] transition'>
                        <img src={github} alt="GitHub" className='w-14 h-14' />
                        <h1 className='text-xl mt-2'>GitHub</h1>
                    </a>

                    <a href="https://x.com/Udaybhaskar9000" target="_blank" rel="noopener noreferrer"
                        className='md:w-1/4 rounded-2xl bg-[#2f2f2f] p-4 mx-auto items-center flex flex-col hover:bg-[#3a3a3a] transition'>
                        <FaTwitter className='w-14 h-14 text-blue-500' />
                        <h1 className='text-xl mt-2'>Twitter</h1>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
