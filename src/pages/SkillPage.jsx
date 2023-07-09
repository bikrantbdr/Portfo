import React from 'react'
import { motion } from 'framer-motion'

const SkillPage = () => {
  return (
    <motion.div
      initial={{ y: window.innerHeight }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >SkillPage</motion.div>
  )
}

export default SkillPage