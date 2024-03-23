import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { TypeAnimation } from 'react-type-animation';
import Lottie from "lottie-react";
import Animation from '../assets/Animation2.json';
import Navbar from './Navbar';

const Home = () => {
  // useHistory
  const navigate=useNavigate();
  return (
    <div className='bg-[#0a192f]'>
      <Navbar />
      <div className='w-full sm:w-14 hidden sm:flex justify-center' style={{ backgroundColor: '#0a192f' }}>
        <Lottie animationData={Animation} loop={true} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:ml-16 bg-[#0a192f]">
        <div name='home' className='h-screen bg-[#0a192f]'>
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-green-600 text-3xl'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
              Mohit Raj Parit
            </h1>
            <h2 className='text-1xl py-2 sm:text-[1.35rem] font-bold text-[#8892b0]'>
              <TypeAnimation
                sequence={[
                  'I\'m a Full Stack Developer',
                  1000,
                  'I\'m a Competitive Programmer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
              />
            </h2>
            <p className='text-[#8892b0] text-[1.20rem] py-4 max-w-[700px]'>
              I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications.
            </p>
            <div>
            
            <button className='text-white group border-2 rounded-full px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600 '  onClick={() => navigate('/work')}>
                View Work
                <span className='group-hover:rotate-90 duration-300 '>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
              
            </div>
          </div>
        </div>
        <div className='hidden sm:flex justify-center'>
          <div className='w-full sm:w-96 mt-10'>
            <Lottie animationData={Animation} loop={true} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
