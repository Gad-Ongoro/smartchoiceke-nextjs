'use client';

import React from 'react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}

function AnimatedXPage({children}: {children: ReactNode}) {
  return (
    <motion.div 
      variants={animations} 
      initial='initial'
      animate='animate' 
      exit='exit'
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedXPage;