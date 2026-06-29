import styled from 'styled-components'
import { motion } from 'framer-motion'
import SkillSectionComponent from '../components/SkillSectionComponent'

import figma from '../assets/logo/figma.svg'
import canva from '../assets/logo/canva.svg'
import css from '../assets/logo/css.svg'
import javascript from '../assets/logo/javascript.svg'
import react from '../assets/logo/react.svg'
import next from '../assets/logo/next.svg'
import node from '../assets/logo/node.svg'
import express from '../assets/logo/express.svg'
import mongodb from '../assets/logo/mongodb.svg'
import postman from '../assets/logo/postman.svg'
import git from '../assets/logo/git.svg'

const skillSet = [
  {
    skillType: "Languages",
    skill: [
      { name: "JavaScript", icon: javascript },
      { name: "TypeScript" },
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
      { name: "PHP" },
      { name: "CSS", icon: css },
    ],
  },
  {
    skillType: "Frameworks & Libraries",
    skill: [
      { name: "ReactJS", icon: react },
      { name: "NextJS", icon: next },
      { name: "NodeJS", icon: node },
      { name: "ExpressJS", icon: express },
    ],
  },
  {
    skillType: "Databases",
    skill: [
      { name: "MongoDB", icon: mongodb },
      { name: "MySQL" },
    ],
  },
  {
    skillType: "Tools & Platforms",
    skill: [
      { name: "Git", icon: git },
      { name: "AWS (S3, EC2, RDS)" },
      { name: "Postman", icon: postman },
      { name: "Figma", icon: figma },
      { name: "Canva", icon: canva },
    ],
  },
  {
    skillType: "Concepts",
    skill: [
      { name: "REST APIs" },
      { name: "SEO Optimization" },
      { name: "Agile/Scrum" },
      { name: "Machine Learning (ML)" },
    ],
  },
]

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 180px 0;
  min-height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  user-select: none;
  overflow-x: hidden;

  @media (max-width: 960px) {
    gap: 24px;
    padding: 120px 0;
  }
`
const Title = styled.h1`
  color: #000;
  font-family: Pacifico;
  font-size: 46px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 1.2px;
  top: 20px;
  left: 20px;
  position:fixed;
  z-index: 10;

  @media (max-width: 768px) {
    font-size: 32px;
    top: 10px;
    left: 10px;
  }
`
const Subtitle = styled.h2`
  color: #b3b3b370;
  z-index: 0;
  font-family: Raleway;
  font-size: 38px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  letter-spacing: 1.33px;
  position:fixed;
  top: 80px;
  left: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1200px;
  padding: 0 40px;
  z-index: 2;
  margin-top: 0px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 24px;
    gap: 24px;
  }
`

const SkillPage = () => {
  return (
    <Container
      className="skillPage"
      initial={{ y: window.innerHeight }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Title>Skills</Title>
      <Subtitle>Learning everyday💡</Subtitle>

      <GridContainer>
        {skillSet.map(({ skillType, skill }, index) => (
          <SkillSectionComponent
            key={skillType}
            skillType={skillType}
            skill={skill}
            index={index}
          />
        ))}
      </GridContainer>
    </Container>
  )
}

export default SkillPage
