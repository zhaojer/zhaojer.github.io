import styled from "styled-components";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Hero from "./sections/Hero";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";

function App() {
  return (
    <Body>
      <Wrapper>
        <Hero />
        <Aboutme />
        <Projects />
        <Skills />
        <Footer />
        <Contact />
      </Wrapper>
    </Body>
  )
}

const Body = styled.div`
  position: relative;
`;

const Wrapper = styled.main`
  width: 100%;
  background-color: black;
`;

export default App;
