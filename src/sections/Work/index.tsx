import styled from "styled-components";
import HeadingContainer from "../../components/HeadingContainer";
import WorkTimeline from "./work";

function WorkExperience() {
  return (
    <Container>
      <HeadingContainer number={2} writeups="Work" />
      <ContentContainer>
        <WorkTimeline />
      </ContentContainer>
    </Container>
  );
}

export default WorkExperience;

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