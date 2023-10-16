import styled from 'styled-components'
import { Github, Twitter, Facebook } from '../data/SVGs'
import Theme from '../data/Theme'
import { motion } from 'framer-motion'

const Container = styled.div`
    position: fixed;
    bottom: 0;
    left:2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    z-index: 1;
   `
const SocialMediaContainer = styled.div`
    margin:0.3rem 0 0 0;
    `
const Line = styled(motion.div)`
    display: block;
    width: 3px;
    height: 8rem;
    background-color: ${(props) => props.color === "dark" ? Theme.secondaryText : Theme.primaryText};
`

const SocialMediaComponent = ({ theme, delay = 2 }) => {
    return (
        <Container>
            <SocialMediaContainer>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 5, 1] }}
                    transition={{ type: "spring", duration: 1, delay: delay }}
                >
                    <a href="https://github.com/bikrantbdr" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                        <Github
                            width={25}
                            height={25}
                            fill={theme === "dark" ? Theme.secondaryText : Theme.primaryText}
                        />
                    </a>
                </motion.div>
            </SocialMediaContainer>
            <SocialMediaContainer>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 5, 1] }}
                    transition={{ type: "spring", duration: 1, delay: delay + 0.2 }}
                >
                    <a href="https://twitter.com/bikrant_bidari" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                        <Twitter
                            width={25}
                            height={25}
                            fill={theme === "dark" ? Theme.secondaryText : Theme.primaryText}
                        />
                    </a>
                </motion.div>
            </SocialMediaContainer>
            <SocialMediaContainer>
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1, 1.5, 1] }}
                    transition={{ type: "spring", duration: 1, delay: delay + 0.4 }}
                    whileHover={{ scale: 1.1 }}
                >
                    <a href="https://www.facebook.com/bikrant.bidari" target="_blank" rel="noreferrer" style={{ color: "inherit" }}>
                        <Facebook
                            width={25}
                            height={25}
                            fill={theme === "dark" ? Theme.secondaryText : Theme.primaryText}
                        />
                    </a>
                </motion.div>
            </SocialMediaContainer>
            <Line
                //passing theme as props to styled component
                color={theme}
                initial={{ height: 0 }}
                animate={{ height: "8rem" }}
                transition={{ type: "spring", duration: 1, delay: delay + 0.2 }}
            />

        </Container>
    )
}

export default SocialMediaComponent