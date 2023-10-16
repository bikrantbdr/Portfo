import styled from "styled-components"


const Container = styled.div`
    display: flex;
    height:60vh;
    width: 60%;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    flex-direction: ${props => props.index % 2 === 0 ? 'row' : 'row-reverse'};
    align-items: center;
    justify-content: space-evenly; 
    z-index: 1;
`
const ImageContainer = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    cursor: pointer;
`
const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: translateY(0%);
    transition: transform 12s ease-in-out 0s;
    /* border-radius: 16px; */

    &:hover {
        transform: translateY(-80%);
    }
`
const ContentContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:12px;
    padding: 0 16px;
    text-align: center;
`
const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: baseline;
    gap: 8px;
`
const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 500;
    color: #000000;
`
const Date = styled.p`
    font-size: 1.25rem;
    font-weight: 400;
    color: #797979;

`
const Description = styled.p`
    font-size: 1rem;
    font-weight: 450;
    font-family: 'Poppins', sans-serif;
    color: #797979;
    width: 80%;
    padding: 0 0 12px 0;
    line-height: 1.5;

`
const TechContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
`
const Tech = styled.div`
    min-width: 40px;
    min-height: 40px;
    border: 1px solid #d5d5d52f;
    box-shadow:0 0 10px rgba(0,0,0,.1) ;
    padding: 8px;
    font-weight: 600;
    color: #242424;
    font-family: 'Mulish', sans-serif;
    margin: 0 4px;
`
const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    min-width: 50%;
    margin-top: 12px;
`
const Link = styled.a`
    text-decoration: none;
    color: #000000;
    font-size: 1rem;
    font-weight: 400;
    padding: 8px;
    display: flex;
    gap: 8px;

    &:hover {
        color: #969696;
    }
`


const ProjectComponent = ({index,item}) => {
  return (
    <Container index={index}>
        <ImageContainer>
            <Image src={item.image} alt="image"/>
        </ImageContainer>
        <ContentContainer>
            <TitleContainer>
            <Title>{item.title}</Title>
            <Date>({item.date})</Date>
            </TitleContainer>
            <Description>{item.description}</Description>
            <TechContainer>
                {
                    item.tech.map((item,index) => (
                        <Tech key={index}>
                           {item}
                        </Tech>
                    ))
                }
            </TechContainer>
            <LinkContainer>
                <Link href={item.link.github} target="_blank">Github
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path></svg>
                </Link>
                <Link href={item.link.live} target="_blank">Demo 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path><path d="M11 13l9 -9"></path><path d="M15 4h5v5"></path></svg>
                </Link>
            </LinkContainer>
        </ContentContainer>

    </Container>
  )
}

export default ProjectComponent