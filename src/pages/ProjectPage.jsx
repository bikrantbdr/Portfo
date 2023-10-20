import ProjectComponent from '../components/ProjectComponent'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import carrental from "../assets/car-rental.webp"

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
    title: 'Car Rental',
    date: 'Feb 2021',
    image: carrental,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.',
    tech: ['React', 'Styled-component'],
    link: {
      github:'https://github.com/bikrantbdr',
      live:'https://github.com/bikrantbdr'
    }
  },
  {
    title: 'Car Rental',
    date: 'Feb 2021',
    image: carrental,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.',
    tech: ['React', 'Styled-component'],
    link: {
      github:'https://github.com/bikrantbdr',
      live:'https://github.com/bikrantbdr'
    }
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