import styled from "styled-components";

function HeadingContainer({ number, writeups }: { number: number, writeups: string }) {
  return (
    <Container>
      <HeadingWrapper>
        <HorizontalDivider />
        <Fonts>
          <H4>#{number}</H4>
          <H2>{writeups}</H2>
        </Fonts>
        <HorizontalDivider2 />
      </HeadingWrapper>
    </Container>
  );
}

export default HeadingContainer;

const Container = styled.figure`
  width: 100%;
  background-color: black;
  margin: 0;
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Fonts = styled.div`
  flex-grow: 1;

  font-weight: 500;
  line-height: 1;

  padding: 0 2.5vw;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5vw;

  color: white;
`;

const H4 = styled.h4`
  font-size: 6vw;
`;

const H2 = styled.h2`
  font-size: 8vw;
`;

const HorizontalDivider = styled.hr`
  height: 0%;
  flex-grow: 1;
  background-color: transparent;
  border-top: 3px solid white;
`;

const HorizontalDivider2 = styled.hr`
  height: 0%;
  flex-grow: 2;
  background-color: transparent;
  border-top: 3px solid white;
`;
