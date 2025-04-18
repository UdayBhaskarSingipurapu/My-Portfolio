import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import { MoveRight } from 'lucide-react';

const Home = () => {
    return (
        <div className='pt-25 md:pt-35 lg:pt-40 mx-auto px-4 flex flex-col-reverse md:flex-row md:gap-10 lg:gap-16 '>
            <div className='flex flex-col md:w-[57%] lg:w-[50%]'>
                <div className='p-1'>
                    <h1 className='text-blue-500 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-6xl'>
                        Hello I'm
                    </h1>
                    <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-1 mb-3'>
                        Uday Bhaskar Singipurapu
                    </h1>
                    <div className='mt-5 h-1 w-20 bg-blue-500 rounded mb-2'></div>
                </div>
                <p className='mt-10 text-[18px] md:text-[20px]'>
                    I build exceptional digital experiences with clean code and modern frameworks. <br />
                    Passionate about algorithms, problem-solving, and creating intuitive interfaces.
                </p>
                <div className='flex flex-row mt-10 gap-6 text-[17px]'>
                    <button className='text-white bg-blue-500 p-3 font-bold flex items-center'>
                        View Projects 
                        <span className='font-bold ml-2 text-2xl'><MoveRight /></span>
                    </button>
                    <button className='text-blue-400 border-2 border-blue-500 p-3'>Contact Me</button>
                </div>

            </div>
            <div className="bg-[#1e1e1e] text-white rounded-xl shadow-lg max-w-xl mt-5 mb-2 overflow-hidden md:w-[43%] lg:w-[50%]">
                <div className="bg-[#2e2e2e] px-4 py-2 flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                <div className="p-4 font-mono text-[15px] md:text-[17px] leading-7">
                    <span className="text-blue-400">const</span> <span className="text-green-400">Uday</span> = <span className="text-yellow-400">{`{`}</span><br />
                    &nbsp;&nbsp;<span className="text-pink-400">role</span>: <span className="text-orange-400">'</span>
                    <Typewriter
                    words={['Full Stack Developer', 'Competitive programmer', 'AI Enthusiast']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                    />
                    <span className="text-orange-400">'</span>
                    <br />
                    <span className="text-yellow-400">{`}`}</span>
                </div>
            </div>
        </div> 
    );
};

export default Home;
