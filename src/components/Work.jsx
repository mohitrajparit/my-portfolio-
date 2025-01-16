import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import Navbar from './Navbar';
import Rct from '../assets/react.png';
import crudd from '../../assets/crud.png';
import imgu from '../../assets/imgu.png';
import img from '../../assets/image.png';
import nike from '../../assets/nike.png';
import drum from '../../assets/drumbeat.png';
import weather from '../../assets/weather.png';
import tin from '../../assets/tindog.png';
import da from '../../assets/da.png';
import DesBut from './DesButton';

const Work = () => {
  return (
    <>
      <Navbar />

      <div name='work' className=' w-full h-max bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4'>
          <div className='mt-24'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600 text-gray-300'>Work</p>
            <p className='py-4 text-lg text-gray-200'>These are some of my projects:</p>
          </div>
          <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
            {[
              { title: 'CRUD-application', img: crudd, liveLink: 'https://proj-crud-mp.vercel.app/', sourceLink: 'https://github.com/mohitrajparit/proj-crud-mp' },
              { title: 'Image Cloud', img: imgu, liveLink: 'https://github.com/mohitrajparit/image-uploader-react', sourceLink: 'https://github.com/mohitrajparit/image-uploader-react' },
              { title: 'Climate Monitoring', img: img, liveLink: 'https://github.com/mohitrajparit/Climate-Monitering', sourceLink: 'https://github.com/mohitrajparit/Climate-Monitering' },
              { title: 'Weather app', img: weather, liveLink: 'https://mohitrajparit.github.io/Weather-App/', sourceLink: 'https://github.com/mohitrajparit/Weather-App' },
              { title: 'Nike clone', img: nike, liveLink: 'https://nike-clone-omega-cyan.vercel.app/', sourceLink: 'https://github.com/mohitrajparit/Nike-clone' },
              { title: 'Real time dataset analysis', img: da, liveLink: 'https://github.com/mohitrajparit/dsML/blob/main/dataAnalyse01.ipynb', sourceLink: 'https://github.com/mohitrajparit/dsML/blob/main/dataAnalyse01.ipynb' },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className='w-[80%] pb-2 shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h2 className='text-gray-300 font-bold'>{project.title}</h2>
                <img src={project.img} width={300} className='p-2 m-auto' />
                <DesBut link={project.liveLink} text={"Live Demo"} />
                <DesBut link={project.sourceLink} text={"Source Code"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
