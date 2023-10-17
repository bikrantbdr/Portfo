import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import SkillPage from "./pages/SkillPage";
import { AnimatePresence } from "framer-motion";
import HomeButton from './components/HomeButton'
import styled from "styled-components";

const Wrapper = styled.div`
  position:relative;
`
function App() {
  const location = useLocation();
  return (
    <Wrapper>
      <HomeButton />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/skill" element={<SkillPage />} />
        </Routes>
      </AnimatePresence>
    </Wrapper>
  )
}

export default App
