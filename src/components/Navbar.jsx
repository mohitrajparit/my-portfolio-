import React,{useContext, useState} from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Navbar = () => {
  const [nav,setNav]=useState(false);
  const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img></img>
      </div>
      <ul className='hidden md:flex'>
          <li className='hover:animate-pulse hover:text-green-600'>
            <a href="/">Home</a>
          </li>
          <li className='hover:animate-pulse hover:text-green-600'>
            <a href="/about">About</a>
          </li>
          <li className='hover:animate-pulse hover:text-green-600'>
            <a href="/skills">Skills</a>
          </li>
          <li className='hover:animate-pulse hover:text-green-600'>
            <a href="/work">Work</a>
          </li>
          <li className='hover:animate-pulse hover:text-green-600'>
            <a href="/contact">Contact</a>
          </li>
      </ul>
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav? <FaBars/> :<FaTimes/>}
      </div>
      <ul className={!nav ?'hidden' :'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <li className='py-6 text-4xl'>
            <a href="/">Home</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href="/about">About</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href="/skills">Skills</a>
          </li >
          <li className='py-6 text-4xl'>
            <a href="/work">Work</a>
          </li>
          <li className='py-6 text-4xl'>
            <a href="/contact">Contact</a>
          </li>
      </ul>
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-60px mb-2 mt-2 pt-2 pb-2 flex justify-between items center items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Linkedin <FaLinkedin size={30}/></a>
          </li>
          <li className='w-[160px] h-60px flex justify-between items center items-center ml-[-110px] mb-2 mt-2 pt-2 pb-2 hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Github <FaGithub size={30}/></a>
          </li>
          <li className='w-[160px] mb-2 mt-2 pt-2 pb-2 h-60px flex justify-between items center items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Mail <HiOutlineMail size={30}/></a>
          </li>
          <li className='w-[160px] mb-2 mt-2 pt-2 pb-2 h-60px flex justify-between items center items-center ml-[-110px] hover:ml-[-10px] duration-300 bg-[#565f69] '>
            <a className='flex justify-between items-center w-full text-gray-300 ' href="/">Resume <BsFillPersonLinesFill size={30}/></a>
          </li>
        </ul>
      </div>
    
    </div>
  )
}

export default Navbar