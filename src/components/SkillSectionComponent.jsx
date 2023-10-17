import styled from "styled-components"
import bg1 from '../assets/skill-bg-1.svg'
import bg2 from '../assets/skill-bg-2.svg'
import { useState } from "react"
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:64px;
  width: 90%;
  height:100px;
  rotate: -6deg;
  position: relative;
  cursor: pointer;

  background-image: ${props => props.index % 2 === 0 ? `url(${bg1})` : `url(${bg2})`};
  filter: ${props => props.showSkill ? 'grayscale(20%)' : 'grayscale(100%)'};
  transition:filter 0.3s ease-in-out;
  
  background-size: cover;
  background-repeat: no-repeat;

@media (max-width: 768px) {
  width: 100%;
  height: 40px;
  gap: 16px;
  background-size: contain;
  flex-wrap: wrap;
}


`

const Title = styled.h1`
  color: rgba(0, 0, 0, 0.20);
text-align: center;
font-family: Raleway;
font-size: 56px;
font-style: normal;
font-weight: 800;
line-height: normal;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
opacity: ${props => props.showSkill ? 0 : 1};
transition: opacity 1s ease-in-out;

@media (max-width: 768px) {
  font-size: 32px;
}
`

const Icon = styled.img`
  height: 60%;
  width: auto;
  object-fit: contain;
  filter: grayscale(80%);
  
  cursor: pointer;
  opacity: ${props => props.showSkill ? 1 : 0};
  transition: opacity 1s ease-in-out;

  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    height: 24px;
    width: auto;
    object-fit: contain;
  }

`

const SkillSectionComponent = ({skillType,skill, index}) => {
  const [showSkill, setShowSkill] = useState(false)
  return (
    <Container index ={index} onMouseEnter={()=>(setShowSkill(true))} onMouseLeave={()=>(setShowSkill(false))}  showSkill={showSkill}>
      
        <Title showSkill={showSkill}>
      {skillType}
      </Title>
      
      {skill.map((item, index) => {
        return (
          <Icon src={item.icon} key={index} showSkill={showSkill} />
        )

      })}
      
      
      
    </Container>
  )
}

export default SkillSectionComponent