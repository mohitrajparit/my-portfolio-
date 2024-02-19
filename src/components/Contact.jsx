import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form action="" method="POST" className='flex flex-col max-w-[600px] w-full' >
        <div className='pb-8 mt-10'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 m-auto'>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form or shoot me an email</p>
        </div>
        <input className='bg-[#ccd6f6] p-2' type="name" placeholder='Name' name='name'/>
        <input className='my-4 p-2 bg-[#ccd6f6] ' name='email' placeholder='Email' />
        <textarea className='bg-[#ccd6f6] p-2' name='meassage' rows='10' placeholder='Message'/>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact