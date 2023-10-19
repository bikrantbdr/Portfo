import { motion } from 'framer-motion'
import styled from 'styled-components'
import Moonimg from '../assets/Moon.png'
import MountainImg from '../assets/Mountain.png'
import union from "../assets/Union.png"
import ReflectionImg from '../assets/reflection.png'
import arrow from '../assets/arrow.svg'

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(180deg, #0b0a0a 13%, #1A2537 49%, #0D4DA6 100%);
  position: relative;

  /* @media (max-width: 950px) {
    overflow-y:  hidden;
  } */
`
const BGimg = styled.img`
  width:100vw;
  height:100vh;
  object-fit: cover;
  z-index:1;

&:hover{
  transform: scale(1.5);
  transition: all 20s ease-in-out;
}

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
  width:100vw;
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
  width:100vw;
  min-height:360px;
  opacity: 0.25;
  object-fit: cover;
  object-position: 0% 20%;

  @media (max-width: 950px) {
    object-position: 30%;
  }
`
const NamePostContainer = styled.div`
  min-width: 30%;
  position: absolute;
  top:15vh;
  left:12px;
  z-index:5;
  display:flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 560px) {
    width:90%;
    top:15vh;
    left:0px;
    gap: 16px;
  }
`
const Name = styled.h1`
font-family: 'Caveat Brush', cursive;
font-size: 96px;
font-weight: 400;
color: #fff;
text-align: center;

@media (max-width: 600px) {
  font-size: 56px;
  text-align: left;
  padding: 0 0 0 32px;
}
`
const Arrow = styled.img`
/* width:auto; */
/* height:50px; */
object-fit: cover;
width: 90%;

`
const Position = styled.h2`
  color: #FFF;
font-family: Amiko;
font-size: 70px;
font-style: normal;
font-weight: 400;
line-height: 105.4%; /* 101.184px */
width:80%;
/* padding: 0 0 0 32px; */
text-align: left;

@media (max-width: 600px) {
  font-size: 36px;
  width:100%;
  /* padding: 0 0 0 32px; */
}
`
const DescriptionContainer = styled.div`
  width:100%;
  min-height:40vh;
  position: absolute;
  bottom:0px;
  left:0px;
  z-index:5;
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  @media (max-width:750px){
  bottom:5vh;
}


`

const Description = styled.p`
 color: #d1d1d1;
text-align: center;
font-family: Amiko;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: 105.4%; /* 25.296px */
width:60%;

@media (max-width:956px){
  font-size: 18px;
  width:80%;
}

@media (max-width:450px){
  /* font-weight: 12px; */
}
`

const ContactButton = styled.a`
  width: 200px;
  height: 60px;
  background: rgba(189, 189, 189, 0.641);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: #fff;
  cursor: pointer;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Amiko;
  font-size: 18px;

  &:hover {
    background: rgba(189, 189, 189, 0.841);
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
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

      <NamePostContainer>
        <Name>
          Bikrant Bidari
        </Name>
        <Arrow src={arrow} alt="arrow" />
        <Position>
        Full stack dev 
        </Position>
      </NamePostContainer>

      <DescriptionContainer>
        <Description>
        Hey there, I am a web developer and UI/UX designer. I am currently studying Computer engineering in Thapathali campus, IOE.
        <br/>
        <br/>
Trying to enjoy my life everyday. 
        </Description>
        <ContactButton href='https://github.com/bikrantbdr' target="_blank" >
          Contact Me
        </ContactButton>
      </DescriptionContainer>

    </Container>
  )
}

export default AboutPage