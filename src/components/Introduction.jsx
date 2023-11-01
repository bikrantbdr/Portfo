import styled from "styled-components"
import { motion } from "framer-motion"
import me from '../assets/profile-img.png'

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 65vw;
    --heightvalue: 55vh;
    display: flex;
    z-index:1;

    background: linear-gradient(
    to right,
    ${props => props.theme.primaryBody} 50%,
    ${props => props.theme.primaryText} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.primaryBody} 50%,
    ${props => props.theme.primaryText} 50%) top;
  
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.primaryBody};
    border-right: 2px solid ${props => props.theme.primaryText};
    border-radius: 2px;

    @media (max-width: 768px) {
        width: 80vw;
        --heightvalue: 70vh;
        flex-direction: column;

        background: linear-gradient(
        to bottom,
        ${props => props.theme.primaryBody} 50%,
        ${props => props.theme.primaryText} 50%) left,
        linear-gradient(
        to bottom,
        ${props => props.theme.primaryBody} 50%,
        ${props => props.theme.primaryText} 50%) right;

        background-repeat: no-repeat;
        background-size: 2px 100%;

        border-top: 2px solid ${props => props.theme.primaryBody};
        border-bottom: 2px solid ${props => props.theme.primaryText};
        border-radius: 1px;

        border-left: none;
        border-right: none;
    }

`

const Content = styled(motion.div)`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;


    @media (max-width: 768px) {
        font-size: 1.5rem;
        width: 100%;
        height: 50%;
    }
`
const Text = styled.div`
    font-size: 2rem;
    color: ${props => props.theme.secondaryText};
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 0.25rem;

    &>*:last-child{
        color: ${props => `rgba(${props.theme.primaryBody},0.6)` };
        font-size: 1.25rem;
        font-weight:300;
    }

    @media (max-width: 768px) {
        font-size: 1.5rem;
        padding: 0.5rem 1rem;
    }



`


const Introduction = () => {
  return (
    <Box initial={{height:0}}
    animate={{height: 'var(--heightvalue)'}}
    transition={{ type: 'spring', duration:2, delay:1 }}
    >
      <Content>
      <Text>
                    <h1>Hi,</h1>
                    <h3>I&apos;m Bikrant.</h3>
                    <h4>I create cool designs and make them work online.</h4>
                </Text>
      </Content>
      <Content
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, delay:2}}
        >
        <img src={me} alt="me" style={{width:'100%', height:'98%', objectFit:'contain'}} />
        
      </Content>
    </Box>
  )
}

export default Introduction