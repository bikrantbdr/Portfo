import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 28px;
  padding: 36px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }
`

const Title = styled.h2`
  color: #111;
  font-family: Raleway;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
`

const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const SkillItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 20px;
  border-radius: 50px;
  background: #f4f4f5;
  border: 1px solid #e4e4e7;
  color: #3f3f46;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.2s ease;

  &:hover {
    background: #e4e4e7;
    color: #18181b;
    transform: scale(1.03);
  }
`

const Icon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: contain;
`

const SkillSectionComponent = ({skillType, skill}) => {
  return (
    <Card>
      <Title>{skillType}</Title>
      <SkillContainer>
        {skill.map((item, idx) => (
          <SkillItem key={idx}>
            {item.icon && <Icon src={item.icon} alt={item.name} />}
            <span>{item.name}</span>
          </SkillItem>
        ))}
      </SkillContainer>
    </Card>
  )
}

export default SkillSectionComponent