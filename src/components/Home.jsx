import React from 'react'
import img  from '../../assets/images/profile.jpg';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';

import { useEffect,useState } from 'react';
const Home = (nav) => {
 
  return (

    
    <div name='home' className=' w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '
      >
        <p className='text-green-600 text-3xl'>Hi my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mohit Raj Parit
        </h1>
        <h2 className='text-1xl py-2 sm:text-2xl font-bold text-[#8892b0]'>
          {true ? <TypeAnimation
          sequence={[
            'I \'m a Full Stack Developer',
            1000, 
            'I \'m a Competitive Programmer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
    />:<h2 className='text-[2em] inline-block'>I'm a Full Stack Developer</h2>}
       
        </h2>
        <p className='text-[#8892b0] text-[1.25rem] py-4 max-w-[700px]'>
        I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 rounded px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600 '>
            View Work 
            <span className='group-hover:rotate-90 duration-300 '>
              <HiArrowNarrowRight className='ml-3'/>
            </span>

          </button>
        </div>
      </div>
    </div>
  )
}

export default Home



