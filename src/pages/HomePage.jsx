import styled, {keyframes} from 'styled-components'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialMediaComponent from '../components/SocialMediaComponent'
import { motion } from 'framer-motion'
import spinnerlogo from '../assets/logo.png'
import Introduction from '../components/Introduction'

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
  color : ${props => props.active ? props.theme.secondaryText: props.theme.primaryText };
  z-index: 2;
  transition: all 1s ease;
  `
const About = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.secondaryText};
  mix-blend-mode: difference;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.15rem;
  position: absolute;
  top: 50%;
  left:3vw;
  transform:translate(-50%, -50%) rotate(-90deg) ;
  cursor: pointer;
  z-index: 2;

  
`
const Project = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.secondaryText};
  mix-blend-mode: difference;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  position: absolute;
  top: 50%;
  right:3vw;
  transform:translate(50%, -50%) rotate(90deg) ;
  cursor: pointer;
  z-index: 2;
`
const Skill = styled(Link)`
  position: absolute;
  bottom: 3vh;
  left:50%;
  transform: translateX(-50%);
  text-decoration: none;
  /* color: ${props => props.theme.primaryText};   */
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  cursor: pointer;
  z-index: 2;
  color: ${props => props.theme.secondaryText};
  mix-blend-mode: difference;
  `


const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
  position: absolute;
  top: ${props => props.active ? '85%' :'50%'  };
  left: ${props => props.active ? '92%' :'50%'  };
  transform: translate(-50%,-50%);
  background-color: transparent;
  border: none;
  outline:none;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  transition: all 1s ease;
  cursor:pointer;

&>:first-child{
    animation: ${rotate} infinite 2s linear;
}

&>:last-child{
    display: ${props => props.active ? 'none' :'inline-block'  };
}

@media (max-width: 768px) {
    top: ${props => props.active ? '93%' :'50%'  };
    left: ${props => props.active ? '80%' :'50%'  };
    transform: translate(-50%,-50%);
    
}

`
const HelloText = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 1rem;
  font-family: 'Raleway';
`

const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.active ? '50%' : '0%'};
height: ${props => props.active ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;

@media (max-width: 768px) {
    width: ${props => props.active ? '100%' : '0%'};
    height: ${props => props.active ? '50%' : '0%'};
    right: 0;
    top: 0;
    /* bottom: 0; */
    left: 0;
    transition: height 1s ease 0.5s, width 0.5s ease;
}
`

const SpinnerComponent = styled.img`
  width: ${props => props.active? '120px' : '200px'};
  height: ${props => props.active? '120px' : '200px'};

  @media (max-width: 768px) {
    width: ${props => props.active? '90px' : '150px'};
    height: ${props => props.active? '90px' : '150px'};
  }
`


const HomePage = () => {

  const [active, setActive] = useState(false)
  const handleActive = () =>setActive(!active)

  return (
    <Container
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.2 } }}

    >
      <Logo
        active ={active}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        Bukki.
      </Logo>
      <About to='/about' active={active} >
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
      <SocialMediaComponent theme={active?"dark":"light"} delay={1.2} />
      <Project to='/project'>
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
      </Project>
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

      <Center active={active}>
        <SpinnerComponent src={spinnerlogo} onClick={()=> handleActive()} alt="logo" active={active} />
        <HelloText>Hi There</HelloText>
      </Center>
      <DarkDiv active={active} />
      {active && <Introduction active={active} />}

      
    </Container >
  )
}

export default HomePage