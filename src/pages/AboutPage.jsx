import { motion, useMotionValue, useTransform } from 'framer-motion'
import styled from 'styled-components'
import Moonimg from '../assets/Moon.png'
import MountainImg from '../assets/Mountain.png'
import union from "../assets/Union.png"
import ReflectionImg from '../assets/reflection.png'
import arrow from '../assets/arrow.svg'
import cv from '../assets/cv.pdf'

const Container = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  background: linear-gradient(180deg, #0b0a0a 13%, #1A2537 49%, #0D4DA6 100%);
  position: relative;
`

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  z-index: 1;
  pointer-events: none;
`

const BGimg = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  position: absolute;
  top: 0; left: 0;
`

const Moon = styled(motion.img)`
  position: absolute;
  top: -120px;
  right: -50px;
  width: 350px;
  height: 450px;

  @media (max-width: 950px) {
    width: 220px;
    height: 320px;
    right: 20px;
    top: -60px;
  }
`

const MountainContainer = styled(motion.div)`
  width: 110vw;
  min-height: 200px;
  position: absolute;
  top: 10%;
  left: -5vw;
  display: flex;
  flex-direction: column;
`

const Mountain = styled(motion.img)`
  width: 100%;
  height: 355px;
  @media (max-width: 950px) {
    object-fit: cover;
    object-position: 30%;
  }
`

const Reflection = styled.img`
  width: 100%;
  height: 355px;
  opacity: 0.25;
  
  @media (max-width: 950px) {
    object-fit: cover;
    object-position: 30%;
  }
`

const ContentWrapper = styled(motion.div)`
  position: relative;
  z-index: 5;
  width: 100%;
  min-height: 100vh;
  padding: 15vh 80px;
  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 768px) {
    padding: 12vh 20px;
    gap: 40px;
  }
`

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
`

const Name = styled.h1`
  font-family: 'Caveat Brush', cursive;
  font-size: 96px;
  font-weight: 400;
  color: #fff;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 56px;
  }
`

const Arrow = styled.img`
  width: 90%;
  max-width: 400px;
  margin-top: -20px;
  margin-bottom: 20px;
`

const Position = styled.h2`
  color: #FFF;
  font-family: Amiko;
  font-size: 60px;
  font-weight: 400;
  line-height: 1.1;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 36px;
  }
`

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 40px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  transition: background 0.3s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`

const CardTitle = styled.h3`
  font-family: Amiko;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
  margin: 0 0 10px 0;
  border-bottom: 2px solid rgba(255,255,255,0.2);
  padding-bottom: 10px;
`

const TimelineItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
`

const TimelineRole = styled.h4`
  font-family: Amiko;
  font-size: 20px;
  font-weight: 600;
  color: #e0e0e0;
  margin: 0;
`

const TimelineCompany = styled.span`
  font-family: Amiko;
  font-size: 16px;
  color: #a0a0a0;
  font-style: italic;
`

const TimelineDate = styled.span`
  font-family: Amiko;
  font-size: 14px;
  color: #888;
`

const TimelineDesc = styled.p`
  font-family: Amiko;
  font-size: 15px;
  color: #d1d1d1;
  line-height: 1.5;
  margin: 8px 0 0 0;
`

const ContactButton = styled.a`
  width: 200px;
  height: 60px;
  background: rgba(189, 189, 189, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Amiko;
  font-size: 18px;
  margin-top: 20px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.05);
  }
`

const AboutPage = () => {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = (e) => {
    x.set(e.clientX - window.innerWidth / 2)
    y.set(e.clientY - window.innerHeight / 2)
  }

  const moonX = useTransform(x, [-1000, 1000], [30, -30])
  const moonY = useTransform(y, [-1000, 1000], [30, -30])

  const mountX = useTransform(x, [-1000, 1000], [5, -5])
  const mountY = useTransform(y, [-1000, 1000], [5, -5])

  return (
    <Container
      initial={{ x: -window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      onMouseMove={handleMouseMove}
    >
      <BackgroundWrapper>
        <BGimg src={union} alt="back" />
        <Moon src={Moonimg} alt="moon" style={{ x: moonX, y: moonY }} />
        <MountainContainer>
          <Mountain src={MountainImg} alt="Mountain" style={{ x: mountX, y: mountY }} />
          <Reflection src={ReflectionImg} alt="Reflection" />
        </MountainContainer>
      </BackgroundWrapper>

      <ContentWrapper>
        <HeroSection>
          <Name>Bikrant Bidari</Name>
          <Arrow src={arrow} alt="arrow" />
          <Position>Full Stack Dev</Position>
          <ContactButton href={cv} download="Bikrant_Bidari_CV.pdf">
            Get CV
          </ContactButton>
        </HeroSection>

        <CardsGrid>
          <GlassCard
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1.5, delay: 0.8 }}
          >
            <CardTitle>Education</CardTitle>
            
            <TimelineItem>
              <TimelineRole>Master's in Global Software Development</TimelineRole>
              <TimelineCompany>Hochschule Fulda | Germany</TimelineCompany>
              <TimelineDate>Present</TimelineDate>
              <TimelineDesc>Currently enrolled, advancing my skills in global software architecture, distributed systems, and modern software engineering practices.</TimelineDesc>
            </TimelineItem>

            <TimelineItem>
              <TimelineRole>Computer Engineering</TimelineRole>
              <TimelineCompany>Thapathali Campus, IOE | Nepal</TimelineCompany>
              <TimelineDate>Graduated</TimelineDate>
              <TimelineDesc>Developed a strong foundation in computer science principles, algorithms, and full-stack web development.</TimelineDesc>
            </TimelineItem>
          </GlassCard>

          <GlassCard
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', duration: 1.5, delay: 1.0 }}
          >
            <CardTitle>Experience</CardTitle>

            <TimelineItem>
              <TimelineRole>Frontend Developer</TimelineRole>
              <TimelineCompany>Elytra Solutions | Nepal</TimelineCompany>
              <TimelineDate>Oct 2023 – Mar 2024</TimelineDate>
              <TimelineDesc>Developed responsive MERN architectures and integrated AWS buckets for secure, scalable cloud storage within a cross-functional team.</TimelineDesc>
            </TimelineItem>

            <TimelineItem>
              <TimelineRole>Full Stack Developer</TimelineRole>
              <TimelineCompany>EMIS Thapathali Campus | Nepal</TimelineCompany>
              <TimelineDate>Jan 2023 – Jan 2024</TimelineDate>
              <TimelineDesc>Rebuilt the official campus website using NextJS for faster loading and improved SEO, collaborating with multiple departments.</TimelineDesc>
            </TimelineItem>

            <TimelineItem>
              <TimelineRole>Software Coordinator</TimelineRole>
              <TimelineCompany>ECAST | Nepal</TimelineCompany>
              <TimelineDate>July 2022 – Mar 2024</TimelineDate>
              <TimelineDesc>Mentored students during the annual C-workshop and led a 14-day "Intro to Web Development" intensive event for beginners.</TimelineDesc>
            </TimelineItem>
          </GlassCard>
        </CardsGrid>
      </ContentWrapper>
    </Container>
  )
}

export default AboutPage