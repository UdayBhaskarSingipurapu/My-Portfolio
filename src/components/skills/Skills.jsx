import React, { useState } from 'react'
import skills from '../../assets/skills.jpeg'
import javascript from '../../assets/javascript-logo-svgrepo-com.svg'
import java from '../../assets/java-4-logo-svgrepo-com.svg'
import cpp from '../../assets/c-plus-plus@logotyp.us.svg'
import c from '../../assets/c-program-icon.svg'
import oops from '../../assets/oops.svg'
import algorithms from '../../assets/depth-first-search-svgrepo-com.svg'
import ds from '../../assets/bar-chart-bar-graph-svgrepo-com.svg'
import { HiOutlineLightBulb } from "react-icons/hi";
import python from '../../assets/python-svgrepo-com.svg'
import react from '../../assets/react-svgrepo-com.svg'
import node from '../../assets/node-js-svgrepo-com.svg'
import express from '../../assets/express-svgrepo-com.svg'
import bootstrap from '../../assets/bootstrap-svgrepo-com.svg'
import tailwind from '../../assets/tailwind-svgrepo-com.svg'
import vscode from '../../assets/vs-code-svgrepo-com.svg'
import docker from '../../assets/docker-svgrepo-com.svg'
import git from '../../assets/git-svgrepo-com.svg'
import github from '../../assets/github-142-svgrepo-com.svg'
import sql from '../../assets/sql-svgrepo-com.svg'
import mongo from '../../assets/mongodb-svgrepo-com.svg'

const Skills = () => {
    const [core, setCore] = useState(true);
    const [languages, setLanguages] = useState(false);
    const [frameworks, setFrameworks] = useState(false);
    const [tools, setTools] = useState(false);
    const [database, setDatabase] = useState(false);

    const handleCore = () => {
        setCore(true);
        setLanguages(false);
        setFrameworks(false);
        setTools(false);
        setDatabase(false);
    };

    const handleLanguages = () => {
        setCore(false);
        setLanguages(true);
        setFrameworks(false);
        setTools(false);
        setDatabase(false);
    };

    const handleFrameworks = () => {
        setCore(false);
        setLanguages(false);
        setFrameworks(true);
        setTools(false);
        setDatabase(false);
    };

    const handleTools = () => {
        setCore(false);
        setLanguages(false);
        setFrameworks(false);
        setTools(true);
        setDatabase(false);
    };

    const handleDb = () => {
        setCore(false);
        setLanguages(false);
        setFrameworks(false);
        setTools(false);
        setDatabase(true);
    }

    return (
        <div className='px-4 md:px-10 lg:px-20 py-10'>
            <div className='flex flex-col items-center mb-10 text-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-2'>Skills</h1>
                <p className='text-sm md:text-base '>My technical expertise and tools I use to bring ideas to life.</p>
            </div>

            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <img src={skills} alt="skills" className='w-[300px] md:w-[400px] lg:w-[450px] rounded-md shadow-md' />
                <div className='w-full lg:w-2/3'>
                    <div className='flex flex-wrap justify-center gap-6 text-lg md:text-xl font-semibold'>
                        <div className='flex flex-col items-center cursor-pointer' onClick={handleCore}>
                            <button className={ 'text-gray-300 hover:text-blue-500 transition'}>Core</button>
                            {core && <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>}
                        </div>
                        <div className='flex flex-col items-center cursor-pointer' onClick={handleLanguages}>
                            <button className={'text-gray-300 hover:text-blue-500 transition'}>Languages</button>
                            {languages && <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>}
                        </div>
                        <div className='flex flex-col items-center cursor-pointer' onClick={handleFrameworks}>
                            <button className={'text-gray-300 hover:text-blue-500 transition'}>Frameworks</button>
                            {frameworks && <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>}
                        </div>
                        <div className='flex flex-col items-center cursor-pointer' onClick={handleTools}>
                            <button className={'text-gray-300 hover:text-blue-500 transition'}>Tools</button>
                            {tools && <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>}
                        </div>
                        <div className='flex flex-col items-center cursor-pointer' onClick={handleDb}>
                            <button className={'text-gray-300 hover:text-blue-500 transition'}>Database</button>
                            {database && <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>}
                        </div>
                    </div>

                    <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {core && (
                            <>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={ds} alt="js" className='w-10 h-10 text-white' />
                                    <h1 className='text-xl font-medium'>Data Structures</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={algorithms} alt="java" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>Algorithms</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <HiOutlineLightBulb  className='text-yellow-500 bg-neutral-800 p-1 h-[40px] w-[30px]' />
                                    <h1 className='text-xl font-medium'>Problem Solving</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={oops} alt="c" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>OOP</h1>
                                </div>
                            </>
                        )}

                        {languages && (
                            <>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={javascript} alt="js" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>JavaScript</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={java} alt="java" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>Java</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={cpp} alt="cpp" className='w-14 h-14' />
                                    <h1 className='text-xl font-medium'>C++</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={c} alt="c" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>C</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={python} alt="c" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>Python</h1>
                                </div>
                            </>
                        )}

                        {frameworks && (
                            <>
                                {/* Replace these with your framework cards */}
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={react} alt="js" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>React</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={node} alt="java" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>NodeJs</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={express} alt="cpp" className='w-10 h-10 bg-white' />
                                    <h1 className='text-xl font-medium'>Express JS</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={tailwind} alt="c" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>Tailwind CSS</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={bootstrap} alt="c" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>Boostrap</h1>
                                </div>
                            </>
                        )}

                        {tools && (
                            <>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={vscode} alt="js" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>VS Code</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={git} alt="java" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>Git</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={github} alt="cpp" className='w-10 h-10 bg-white' />
                                    <h1 className='text-xl font-medium'>GitHub</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={docker} alt="c" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>Docker</h1>
                                </div>
                            </>
                        )}
                        {database && (
                            <>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={sql} alt="js" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>SQL</h1>
                                </div>
                                <div className='flex items-center gap-4 border-2 border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition'>
                                    <img src={mongo} alt="java" className='w-10 h-10' />
                                    <h1 className='text-xl font-medium'>MongoDB</h1>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
