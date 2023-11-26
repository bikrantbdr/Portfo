import ProjectComponent from '../components/ProjectComponent'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import tcioe from "../assets/project/tcioe.png"
import lit from "../assets/project/lit.jpeg"
import gericht from "../assets/project/gericht.jpeg"
import dormden from "../assets/project/dormden.jpeg"

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 120px 0;
  min-height: 100vh;
  background-color: #f9f9f9;
  user-select: none;
`
const Title = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  color: #000000;
  position:fixed;
  top: 20px;
  left: 20px;
  font-family: 'Pacifico', cursive;
`
const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 0;
  color: #00000038;
  font-family: 'Mulish', sans-serif;
  position:fixed;
  top: 80px;
  left: 20px;

  @media (max-width:960px){
    font-size:1.1rem;
  }

`

const Data = [
  {
    title: 'TCIOE ',
    date: 'July 2023',
    image: tcioe,
    description: 'A modern and fresh site for Thapathali campus, collaborated with my fellow students and working under EMIS unit as full stack developer. Still our ongoing project:',
    tech: ['React', 'Styled-component'],
    link: {
      github:'https://github.com/bikrantbdr/',
      live:'https://tcioe.edu.np/'
    },
    translate: '-72%',
  },
  {
    title: 'DormDen ',
    date: 'Jan 2023',
    image: dormden,
    description: 'DormDen is a platform for students to find their perfect hostel. It is a full stack project made with React, Node, Express and MongoDB. Learned to make a full stack project with proper authentication and authorization',
    tech: ['React', 'Styled-component','Node'],
    link: {
      github:'https://github.com/bikrantbdr/TheDormDen',
      live:'https://dormden.me/'
    },
    translate: '-10%',
  },
  {
    title: 'Lost in tech ',
    date: 'July 2022',
    image: lit,
    description: 'A website to introduce our tech fest to students. Based on React library along with other packages like react-scroll, styled-components. While working on this project i mainly learned proper file management and structuring',
    tech: ['React', 'Styled-component'],
    link: {
      github:'https://github.com/bikrantbdr/lostintech',
      live:'https://bikrantbdr.github.io/lostintech/'
    },
    translate: '-79%',
  },
  {
    title: 'Resturant Page',
    date: 'April 2022',
    image: gericht,
    description: 'A simple landing page made with React and CSS. Has a clean and concise introduction of restaurant along with its menu. I mainly learned to make proper reusable components',
    tech: ['React', 'CSS'],
    link: {
      github:'https://github.com/bikrantbdr/react-gericht-page/',
      live:'https://bikrantbdr.github.io/react-gericht-page/'
    },
    translate: '-81%',
  },
]

const ProjectPage = () => {
  return (
    <Container
      initial={{ x: window.innerWidth }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', duration: 1.5, delay: 0.5 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Title>Projects</Title>
      <Subtitle>Each project is a unique piece of development 🧩</Subtitle>
      {
        Data.map((item, index) => (
          <ProjectComponent
            key={index}
            index={index}
            item={item}
          />
        ))
      }

    
    </Container>
  )
}

export default ProjectPage