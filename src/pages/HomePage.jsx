import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialMediaComponent from '../components/SocialMediaComponent'
import { motion } from 'framer-motion'

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: ${props => props.theme.primaryBody};
  color: ${props => props.theme.primaryText};
  position: relative;
`
const Logo = styled(motion.div)`
  position: absolute;
  top: 3vh;
  left: 3vw;
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  `
const About = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.primaryText};
  font-size: 1.25rem;
  font-weight: 500;
  position: absolute;
  top: 50%;
  left:3vw;
  transform:translate(-50%, -50%) rotate(-90deg) ;
  cursor: pointer;
`
const Blog = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.primaryText};
  font-size: 1.25rem;
  font-weight: 500;
  position: absolute;
  top: 50%;
  right:3vw;
  transform:translate(50%, -50%) rotate(90deg) ;
`
const Skill = styled(Link)`
  position: absolute;
  bottom: 3vh;
  left:50%;
  transform: translateX(-50%);
  text-decoration: none;
  color: ${props => props.theme.primaryText};
  font-size: 1.25rem;
  font-weight: 500;
  cursor: pointer;
  `


const HomePage = () => {

  const [active, setActive] = useState(false)
  return (
    <Container
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}

    >
      <Logo
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        Bukki.
      </Logo>

      <About to='/about'>
        <motion.div
          initial={{
            y: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          animate={{
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          About
        </motion.div>
      </About>
      <SocialMediaComponent theme="light" delay={1.2} />
      <Blog to='/project'>
        <motion.div
          initial={{
            y: -200,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          animate={{
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Project
        </motion.div>
      </Blog>
      <Skill to="/skill">
        <motion.div
          initial={{
            y: 200,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          animate={{
            y: 0,
            transition: { type: 'spring', duration: 1.5, delay: 1 }
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Skill
        </motion.div>
      </Skill>
    </Container >
  )
}

export default HomePage