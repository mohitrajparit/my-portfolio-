import React from 'react'
import Navbar from './Navbar'
import Rct from '../assets/react.png'
const Work = () => {
  return (
    <>
    <Navbar />

    <div name='work' className=' w-full h-max bg-[#0a192f]'>
    <div className='max-w-[1000px] mx-auto p-4'>
    <div className='mt-24 '>
    <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Work</p>
    <p className='py-4 text-lg text-gray-200'>These are some of my projects:</p>
  </div>
  <div className='w-full grid grid cols-1 sm:grid-cols-2 gap-4 text-center py-8 '>
    <div className='w-[80%] pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
    <div className='w-[80%] pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
    <div className='w-[80%] pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
    <div className='w-[80%]  pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
    <div className='w-[80%]  pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
    <div className='w-[80%]  pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
    <div className='w-[80%] pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
    <div className='w-[80%]  pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Qwerty</h2>
      <img src={Rct} width={70} className='p-2 m-auto'/>
      <button className='m-1 p-1 bg-pink-400 rounded-full'>Live Demo</button>
      <button className='m-1 p-1 bg-pink-400 rounded-full '>Source Code</button>
    </div>
  </div>
  </div>
    </div>
    </>
  )
}

export default Work