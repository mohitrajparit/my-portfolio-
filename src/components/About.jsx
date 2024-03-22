import React from 'react'
import Navbar from './Navbar'
const About = () => {
  return (
    <>
    <Navbar/>
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
          <span>
            <p className='text-4xl font-bold inline transition-all duration-900 border-b-4 border-green-600'>
              About
            </p>
            </span>

          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Mohit Raj Parit,nice to meet you .Please take a look around.</p>
            </div>
            <div>
              <p>I am a passionate and driven pre final year Computer Science Engineering student. I have a strong interest in technology and its applications, particularly in full stack development and computer programming. With a curious mind and a knack for problem-solving,I have solved a plenty of question on <a href="https://leetcode.com/_mohit_raj/" className="text-green-500 hover:text-green-700 underline"
      target="_blank" rel="noopener noreferrer">Leetcode</a> , <a href="https://www.codechef.com/users/mohit_raj_066" className="text-green-500 hover:text-green-700 underline"
      target="_blank" rel="noopener noreferrer">Codechef</a> , <a href="https://codeforces.com/profile/mohitraj0606" className="text-green-500 hover:text-green-700 underline"
      target="_blank" rel="noopener noreferrer">Codeforces</a> , etc. I am constantly exploring new ideas and technologies to expand my skill set and enhance my capabilities as a developer.</p>  
            </div>
          </div>
        </div>
    </div>
    </>
  )
}

export default About