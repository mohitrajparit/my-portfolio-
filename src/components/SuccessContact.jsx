import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { motion } from 'framer-motion'; // Import motion from Framer Motion

const SuccessContact = () => {
  return (
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-gray-200 mb-4 text-[1.6rem] lg:text-[3rem]">
        Thanks for messaging!
      </p>
      <motion.div
        className="flex items-center bg-green-100 p-4 rounded-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-[1.6rem] font-semibold text-green-600 mr-2 lg:text-[2.5rem]">
          Message Sent
        </p>
        <MdCheckCircle style={{ color: 'green', fontSize: '2rem' }} className="h-8 w-8" />
      </motion.div>
    </motion.div>
  );
};

export default SuccessContact;
