import styled from "styled-components";
import HeadingContainer from "../../components/HeadingContainer";
import TeachingTimeline from "./teaching";

import { forwardRef } from "react";

interface TeachingExperienceProps {
  // empty props
}

const TeachingExperience = forwardRef<HTMLDivElement, TeachingExperienceProps>(({ }, ref) => {
  return (
    <Container ref={ref}>
      <HeadingContainer number={4} writeups="Teaching" />
      <ContentContainer>
        <TeachingTimeline />
      </ContentContainer>
    </Container>
  );
});

export default TeachingExperience;

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
