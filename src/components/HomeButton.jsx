import home from '../assets/home.svg'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const HomeComponent = styled.div`
position: fixed;
top: 2rem;
left: 50%;
transform: translate(-50%, 0);

background-color: #FCF6F4;
padding: 0.3rem;
border-radius: 50%;
border: 1px solid #000;
width: 2.5rem;
height: 2.5rem;
box-shadow: 0 0 8px 6px rgba(209, 218, 209, 0.676);

display: flex;
justify-content: center;
align-items:center;
z-index:100;

cursor: pointer;

&:hover{
    /* background-color: rgba(156, 169, 156, 0.685); */
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.676);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
}
`

const HomeButton = () => {
    return (
        <HomeComponent
        >
            <NavLink to="/" >
                <img src={home} width={20} height={20} />
            </NavLink>
        </HomeComponent>
    )
}

export default HomeButton