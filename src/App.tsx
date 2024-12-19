import styled from "styled-components";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Hero from "./sections/Hero";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";

function App() {
  return (
    <Body>
      <Wrapper>
        <Hero />
        <Aboutme />
        <Projects />
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
