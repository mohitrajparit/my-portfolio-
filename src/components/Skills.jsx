import React from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';
import C from '../assets/c.png';
import Cpp from '../assets/cpp.png';
import Ts from '../assets/Ts.png';
import Next from '../assets/next-js.png';
import Mysql from '../assets/mySql.png';
import Vs from '../assets/vscode.png';
import Express from '../assets/express.png';
import Bootstrap from '../assets/bootstrap.png';
import Navbar from './Navbar';

const Skills = () => {
  return (
    <>
      <Navbar />
      <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4'>
          <div className='mt-24'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>Skills</p>
            <p className='py-4 text-lg'>These are the technologies I've worked with</p>
          </div>
          <div className='w-full grid cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {[
              { src: HTML, name: 'HTML' },
              { src: CSS, name: 'CSS' },
              { src: Javascript, name: 'JavaScript' },
              { src: ReactImg, name: 'React' },
              { src: Mongo, name: 'MongoDB' },
              { src: Node, name: 'Node JS' },
              { src: GitHub, name: 'Github' },
              { src: Tailwind, name: 'Tailwind' },
              { src: C, name: 'C++' },
              { src: Cpp, name: 'C' },
              { src: Ts, name: 'Typescript' },
              { src: Next, name: 'Next Js' },
              { src: Mysql, name: 'Mysql' },
              { src: Vs, name: 'Vs Code' },
              { src: Express, name: 'Express Js' },
              { src: Bootstrap, name: 'Bootstrap' },
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img className='w-20 mx-auto' src={tech.src} alt={`${tech.name} icon`} />
                <p className='my-4'>{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className='h-100'></div>
      </div>
    </>
  );
};

export default Skills;
