import React from 'react'
import { MdCheckCircle } from 'react-icons/md';

const SuccessContact = () => {
  return (
    <div className="flex flex-col items-center text-center ">
      <p className="text-gray-200 mb-4 text-[1.6rem] lg:text-[3rem]">Thanks for messaging!</p>
      <div className="flex items-center bg-green-100 p-4 rounded-lg">
        <p className="text-[1.6rem] font-semibold text-green-600 mr-2 lg:text-[2.5rem]">Message Sent</p>
        <MdCheckCircle style={{ color: 'green', fontSize: '2rem' }} className='h-8 w-8"' />
      </div>
    </div>
  )
}

export default SuccessContact