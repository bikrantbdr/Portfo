import styled from 'styled-components'
import { motion } from 'framer-motion'
import SkillSectionComponent from '../components/SkillSectionComponent'

import figma from '../assets/logo/figma.svg'
import canva from '../assets/logo/canva.svg'
import html from '../assets/logo/html.svg'
import css from '../assets/logo/css.svg'
import javascript from '../assets/logo/javascript.svg'
import react from '../assets/logo/react.svg'
import next from '../assets/logo/next.svg'
import tailwind from '../assets/logo/tailwind.svg'
import styledcomponent from '../assets/logo/styled.svg'
import node from '../assets/logo/node.svg'
import express from '../assets/logo/express.svg'
import mongodb from '../assets/logo/mongodb.svg'
import postman from '../assets/logo/postman.svg'
import git from '../assets/logo/git.svg'
import github from '../assets/logo/github.svg'
import vscode from '../assets/logo/vscode.svg'

const skillSet = [
  {
    skillType: "UI/UX",
    skill: [
      {
        name: "Figma",
        icon: figma,
      },
      {
        name:'canva',
        icon: canva,
      }
    ],
  },
  {
    skillType: "Frontend",
    skill: [
      {
        name: "HTML",
        icon: html,
      },
      {
        name: "CSS",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "React",
        icon: react,
      },
      {
        name: "Next.js",
        icon: next,
      },
      {
        name: "Tailwind",
        icon: tailwind,
      },
      {
        name: "Styled-Component",
        icon: styledcomponent,
      },
    ],
  },
  {
    skillType: "Backend",
    skill: [
      {
        name: "Node.js",
        icon: node,
      },
      {
        name: "Express.js",
        icon: express,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Postman",
        icon: postman,
      },
    ],
  },
  {
    skillType: "Tools",
    skill: [
      {
        name: "Git",
        icon: git,
      },
      {
        name: "Github",
        icon: github,
      },
      {
        name: "VSCode",
        icon: vscode,
      },
    ],
  },

]


const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 80px 0;
  height: 100vh;
  width: 100vw;
  background-color: #f9f9f9;
  user-select: none;

  @media (max-width: 960px) {
    /* padding: 8px 8px; */
    gap: 8px;
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

      {skillSet.map(({ skillType, skill },index) => (
        <SkillSectionComponent
          key={skillType}
          skillType={skillType}
          skill={skill}
          index={index}
        />
      ))}
          
        

    </Container>
  )
}

export default SkillPage