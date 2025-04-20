import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import interviewBit from '../../assets/icons8-interviewbit.svg'
import leetcode from '../../assets/leetcode-1.svg'
import codechef from '../../assets/codechef.jpeg'
import codeforces from '../../assets/codeforces.png'
import gfg from '../../assets/gfg.png'
import hc from '../../assets/hakcerrank.png'

const Coding = () => {
    return (
        <div className='px-4 py-12  text-white'>
            <div className='flex flex-col items-center text-center'>
                <h1 className='text-4xl md:text-5xl font-bold mb-2'>Coding Profiles</h1>
                <div className="mt-3 h-1 w-20 bg-blue-500 rounded"></div>
                <p className='text-base md:text-lg mt-5 max-w-xl'>
                    Track my problem-solving journey and coding achievements across different platforms.
                </p>
            </div>

            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                <a href="https://leetcode.com/Uday_116" target="_blank" rel="noopener noreferrer"
                    className='border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-lg transition duration-300 bg-gray-800 flex flex-col items-center text-center'>
                        <img src={leetcode} alt="" className=' text-yellow-400 mb-4 w-14 h-14 '/>
                        <span className='text-xl font-semibold mb-1'>LeetCode</span>
                        <p className='text-sm text-gray-300'>@Uday_116</p>
                </a>

                <a href="https://www.codechef.com/users/udaybhaskar99" target="_blank" rel="noopener noreferrer"
                    className='border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-lg transition duration-300 bg-gray-800 flex flex-col items-center text-center'>
                        <img src={codechef} alt="" className=' text-yellow-400 mb-4 w-14 h-14 '/>
                        <span className='text-xl font-semibold mb-1'>CodeChef</span>
                        <p className='text-sm text-gray-300'>@udaybhaskar99</p>
                </a>

                <a href="https://codeforces.com/profile/s.udaybhaskar2005" target="_blank" rel="noopener noreferrer"
                    className='border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-lg transition duration-300 bg-gray-800 flex flex-col items-center text-center'>
                        <img src={codeforces} alt="" className=' text-yellow-400 mb-4 w-14 h-14 '/>
                        <span className='text-xl font-semibold mb-1'>Codeforces</span>
                        <p className='text-sm text-gray-300'>@s.udaybhaskar2005</p>
                </a>

                <a href="https://www.interviewbit.com/profile/uday-bhaskar_489/" target="_blank" rel="noopener noreferrer"
                    className='border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-lg transition duration-300 bg-gray-800 flex flex-col items-center text-center'>
                        <img src={interviewBit} alt="" className=' text-yellow-400 mb-4 w-14 h-14'/>
                        <span className='text-xl font-semibold mb-1'>InterviewBit</span>
                        <p className='text-sm text-gray-300'>@uday-bhaskar_489/</p>
                </a>

                <a href="https://www.geeksforgeeks.org/user/sudaybhasgtcp/" target="_blank" rel="noopener noreferrer"
                    className='border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-lg transition duration-300 bg-gray-800 flex flex-col items-center text-center'>
                        <img src={gfg} alt="" className=' text-yellow-400 mb-4 w-14 h-12'/>
                        <span className='text-xl font-semibold mb-1'>GeeksforGeeks</span>
                        <p className='text-sm text-gray-300'>@sudaybhasgtcp</p>
                </a>

                <a href="https://www.hackerrank.com/profile/s_udaybhaskar201" target="_blank" rel="noopener noreferrer"
                    className='border border-gray-700 rounded-xl p-6 hover:scale-105 hover:shadow-lg transition duration-300 bg-gray-800 flex flex-col items-center text-center'>
                        <img src={hc} alt="" className=' text-yellow-400 mb-4 w-14 h-12'/>
                        <span className='text-xl font-semibold mb-1'>Hackerrank</span>
                        <p className='text-sm text-gray-300'>@s_udaybhaskar201</p>
                </a>
            </div>
        </div>
    )
}

export default Coding
