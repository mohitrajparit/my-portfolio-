import React from 'react'

const DesBut = ({link,text}) => {
  return (
    <span className='m-2'>
      <a href={link} class="relative inline-flex items-center justify-center p-3 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
    <span class="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
    <span class="absolute bottom-0 right-0 block w-48 h-48 mb-24 mr-3 transition duration-500 origin-bottom-left transform rotate-45 translate-x-20 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
    <span class="relative text-white">{text}</span>
</a>
    </span>
    

  )
}

export default DesBut