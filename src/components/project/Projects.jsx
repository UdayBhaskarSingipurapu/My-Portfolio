import React from 'react'
import Efficio from '../../assets/Efficio.png'
import event from '../../assets/event.png'
import Nestify from '../../assets/Nestify.png'
import travel from '../../assets/TravelBug.png'
import Upskillink from '../../assets/Upskillink.png'

const Projects = () => {
    return (
        <div className="px-4 py-8  text-white">
            <div className='flex flex-col items-center'>
                <p className='text-4xl font-bold'>Projects</p>
                <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>
                <p className='md:text-xl text-center mt-4 max-w-2xl'>
                    A collection of my recent work showcasing my skills in web development, algorithm design,
                    <span className='md:text-xl'> and problem-solving.</span>
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {[{
                    title: "Nestify",
                    desc: "A full-stack platform for students to find hostels, request visitors, and handle maintenance.",
                    img: Nestify,
                    stack: ["React", "Node", "Express", "MongoDB"],
                    code: "https://github.com/UdayBhaskarSingipurapu/NESTIFY---Client",
                    live: "https://nestify-client.vercel.app/"
                }, {
                    title: "Travel Bug",
                    desc: "Travel Bug is a web application designed for property listing and management, allowing users to view, add, update, and delete properties..",
                    img: travel,
                    stack: ["React", "MongoDB", "Express", "Tailwind"],
                    code: "https://github.com/UdayBhaskarSingipurapu/Travel-Bug",
                    live: "https://travel-bug-gamma.vercel.app/listings"
                }, {
                    title: "Efficio",
                    desc: "Efficio is an advanced project management tool.",
                    img: Efficio,
                    stack: ["React", "Nodejs", "Express", "mongodb", "ContextAPI"],
                    code: "https://github.com/harsha12a/Efficio",
                    live: "https://efficio-frontend.vercel.app/"
                }, {
                    title: "Event Engage",
                    desc: "A dynamic event management tool for MLSA",
                    img: event,
                    stack: ["React", "Boostrap"],
                    code: "https://github.com/UdayBhaskarSingipurapu/MLSA-Frontend",
                    live: "https://mlsa-frontend-iota.vercel.app/"
                },
                {
                    title: "Upskillink",
                    desc: "Upskillink is a platform for students to learn and grow.",
                    img: Upskillink,
                    stack: ["React", "Tailwind CSS"],
                    code: "https://github.com/harsha12a/upskillink",
                    live: "https://upskillink.vercel.app/"
                }].map((project, index) => (
                    <div key={index} className='group bg-neutral-800 rounded-lg overflow-hidden border border-neutral-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col justify-between'>
                        <img src={project.img} alt={project.title} className='w-full h-48 object-cover' />
                        <div className='p-4 flex flex-col justify-between flex-1'>
                            <div>
                                <h1 className='text-xl font-bold text-white mb-2'>{project.title}</h1>
                                <p className='text-neutral-400 text-sm mb-4'>{project.desc}</p>
                                <div className='flex flex-wrap gap-2 mb-4'>
                                    {project.stack.map((tech, i) => (
                                        <span key={i} className='px-2 py-1 bg-neutral-700 text-neutral-300 rounded'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                            <div className='flex gap-3'>
                                <a href={project.code} target="_blank" rel="noreferrer" className='px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded transition'>
                                    Code
                                </a>
                                <a href={project.live} target="_blank" rel="noreferrer" className='px-4 py-2 text-sm bg-green-600 hover:bg-green-700 text-white rounded transition'>
                                    Live Site
                                </a>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects
