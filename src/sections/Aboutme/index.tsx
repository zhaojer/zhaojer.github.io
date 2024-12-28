import HeadingContainer from "../../components/HeadingContainer";
import styled from "styled-components";
import Introduction from "./introduction";

import { forwardRef } from "react";

interface AboutMeProps {
  // empty props
}

const AboutMe = forwardRef<HTMLDivElement, AboutMeProps>(({ }, ref) => {
  return (
    <Container ref={ref}>
      <HeadingContainer number={1} writeups="About Me" />
      <ContentContainer>
        <Description>
          <Introduction />
        </Description>
      </ContentContainer>
    </Container>
  );
});

export default AboutMe;

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;

  color: white;
  background-color: black;
`;

const ContentContainer = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  padding: 0vh 12.5% 0;
`;
