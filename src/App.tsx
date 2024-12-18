import Hero from './sections/Hero';
import styled from "styled-components";
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  return (
    <Body>
      <Wrapper>
        <Hero />
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
