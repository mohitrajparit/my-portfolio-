import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import Animation from '../assets/Animation2.json'
import { useEffect,useState } from 'react';
import Navbar from './Navbar';
const Home = () => {
  const [nav,setNav]=useState(true);
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  
  return (
<>
    <Navbar/>
    <div className='w-14' style={{ backgroundColor: '#0a192f' }}>
    <Lottie animationData={Animation} loop={true} />
</div>
  
<div className="grid grid-cols-2 gap-4 bg-[#0a192f]">
    <div name='home' className='w-[110%] h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '
      >
        <p className='text-green-600 text-3xl'>Hi my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Mohit Raj Parit
        </h1>
        <h2 className='text-1xl py-2 sm:text-[1.35rem] font-bold text-[#8892b0]'>
          {true ? <TypeAnimation
          sequence={[
            'I \'m a Full Stack Developer',
            1000, 
            'I \'m a Competitive Programmer',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '1.5em', display: 'inline-block' }}
          repeat={Infinity}
    />:<h2 className='text-[1.5em] inline-block'>I'm a Full Stack Developer</h2>}
       
        </h2>
        <p className='text-[#8892b0] text-[1.20rem] py-4 max-w-[700px]'>
        I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className='text-white group border-2 rounded-full px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600 '>
            View Work 
            <span className='group-hover:rotate-90 duration-300 '>
              <HiArrowNarrowRight className='ml-3'/>
            </span>

          </button>
        </div>

        </div>
      </div>
      <div>
      <Lottie animationData={Animation} loop={true} width={2} />
      </div>
    </div>
    </>
  )
}

export default Home


