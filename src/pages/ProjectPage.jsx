import React from 'react'
import { motion } from 'framer-motion'

const ProjectPage = () => {
  return (
    <motion.div
      initial={{ x: window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >ProjectPage</motion.div>
  )
}

export default ProjectPage