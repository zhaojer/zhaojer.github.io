import styled from "styled-components";
import HeadingContainer from "../../components/HeadingContainer";
import TeachingTimeline from "./teaching";

function TeachingExperience() {
  return (
    <Container>
      <HeadingContainer number={4} writeups="Teaching" />
      <ContentContainer>
        <TeachingTimeline />
      </ContentContainer>
    </Container>
  );
}

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
