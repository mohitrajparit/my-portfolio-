import React from 'react'
import Navbar from './Navbar'
import Rct from '../assets/react.png'
import crudd from '../../assets/crud.png'
import imgu from '../../assets/imgu.png'
import img from '../../assets/image.png'
import nike from '../../assets/nike.png'
import drum from '../../assets/drumbeat.png'
import weather from '../../assets/weather.png'
import tin from '../../assets/tindog.png'
import da from '../../assets/da.png'
import DesBut from './DesButton'
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
      <h2 className='text-gray-300 font-bold'>CRUD-application</h2>
      <img src={crudd} width={300} className='p-2 m-auto'/>
      <DesBut link={"https://proj-crud-mp.vercel.app/"} text={"Live Demo"}/>
      <DesBut link={"https://github.com/mohitrajparit/proj-crud-mp"} text={"Source Code"} />
    </div>
    <div className='w-[80%] pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Image Cloud</h2>
      <img src={imgu} width={300} className='p-2 m-auto'/>
      <DesBut link={"https://github.com/mohitrajparit/image-uploader-react"} text={"Live Demo"}/>
      <DesBut link={"https://github.com/mohitrajparit/image-uploader-react"} text={"Source Code"} />
    </div>
    
    <div className='w-[80%]  pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Climate Monitering</h2>
      <img src={img} width={300} className='p-2 m-auto'/>

      <DesBut link={"https://github.com/mohitrajparit/Climate-Monitering"} text={"Live Demo"}/>
      <DesBut link={"https://github.com/mohitrajparit/Climate-Monitering"} text={"Source Code"} />
    </div>
    <div className='w-[80%]  pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Weather app</h2>
      <img src={weather} width={300} className='p-2 m-auto'/>
      <DesBut link={"https://mohitrajparit.github.io/Weather-App/"} text={"Live Demo"}/>
      <DesBut link={"https://github.com/mohitrajparit/Weather-App"} text={"Source Code"} />
    </div>
    <div className='w-[80%] pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Nike clone</h2>
      <img src={nike} width={300} className='p-2 m-auto'/>
      
      <DesBut link={"https://nike-clone-omega-cyan.vercel.app/"} text={"Live Demo"}/>
      <DesBut link={"https://github.com/mohitrajparit/Nike-clone"} text={"Source Code"} />
    </div>
    <div className='w-[80%]  pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
      <h2 className='text-gray-300 font-bold'>Real time dataset analysis</h2>
      <img src={da} width={300} className='p-2 m-auto'/>
      
      <DesBut link={"https://github.com/mohitrajparit/dsML/blob/main/dataAnalyse01.ipynb"} text={"Live Demo"}/>
      <DesBut link={"https://github.com/mohitrajparit/dsML/blob/main/dataAnalyse01.ipynb"} text={"Source Code"} />
    </div>
    
  </div>
  </div>
    </div>
    </>
  )
}

export default Work