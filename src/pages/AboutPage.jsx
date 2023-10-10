import React from 'react'
import { motion } from 'framer-motion'
import SocialMediaComponent from '../components/SocialMediaComponent'
import styled from 'styled-components'
import Moonimg from '../assets/Moon.png'
import MountainImg from '../assets/Mountain.png'
import union from "../assets/Union.png"
import ReflectionImg from '../assets/reflection.png'

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #0b0a0a 13%, #1A2537 49%, #0D4DA6 100%);
  position: relative;

  @media (max-width: 950px) {
    overflow-y: hidden;
  }
`
const BGimg = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
  z-index:1;

`

const Moon = styled.img`
  position: absolute;
  top:-120px;
  right:0px;
  z-index:2;
  width:350px;
  height:450px;

  @media (max-width: 950px) {
    width:220px;
  height:320px;
  position: fixed;
  }
`
const MountainContainer = styled.div`
  width:100%;
  min-height:200px;
  position: absolute;
  top:10%;
  right:0px;

  display:flex;
  flex-direction: column;
  z-index:3;

`
const Mountain = styled.img`
  width:100%;
  height:355px;

  @media (max-width: 950px) {
    object-fit: cover;
    object-position: 30%;
  }
`
const Reflection = styled.img`
  width:100%;
  min-height:360px;
  opacity: 0.25;
  object-fit: cover;
  object-position: 0% 20%;

  @media (max-width: 950px) {
    object-position: 30%;
  }
`

const AboutPage = () => {
  return (
    <Container
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <BGimg src={union} alt="back" />
      <Moon src={Moonimg} alt="moon" />
      <MountainContainer>
        <Mountain src={MountainImg} alt="Mountain" />
        <Reflection src={ReflectionImg} alt="Reflection" />
      </MountainContainer>

    </Container>
  )
}

export default AboutPage