import styled from "styled-components";
import { FC } from "react";

interface BubbleProps {
  isContactOpen: boolean,
}

const Bubble: FC<BubbleProps> = ({ isContactOpen }) => {
  return (
    <BubbleContainer onClick={() => { }} $isContactOpen={isContactOpen}>
      <Title>Let's Talk</Title>
      <MainWrapper>
        <Desc>Feel free to send email via </Desc>
        <EmailWrapper
          href={`mailto:jerryzhaous@gmail.com?subject=hello&body=Sending Email to Jerry Zhao&nbsp`}
        >
          jerryzhaous@gmail.com
        </EmailWrapper>
      </MainWrapper>
    </BubbleContainer>
  );
}

export default Bubble;

const BubbleContainer = styled.div<{ $isContactOpen?: boolean; }>`
  width: 70vw;
  min-height: max(40vh, 50px);

  margin-bottom: 3vh;
  padding: 3vh 6vw;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: start;

  position: relative;
  z-index: 100;

  background-color: black;
  color: white;
  border-radius: 10px;

  transform-origin: bottom center;
  transform: ${(props) => (props.$isContactOpen ? "scale(100%)" : "scale(0%)")};
  transition: transform 0.2s ease-in;

  &::before {
    content: "";
    width: 0;
    height: 0;

    position: absolute;
    top: 100%;
    left: 50%;
    width: 0;
    height: 0;

    border: 20px solid transparent;
    border-top-color: black;
    border-left-color: black;
  }
`;

const Title = styled.div`
  width: 100%;

  font-size: max(3vw, 42px);
`;

const Desc = styled.div`
  width: 100%;
  padding-top: 3%;

  font-size: max(3vw, 20px);
  font-weight: 300;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MainWrapper = styled.div`
  width: 100%;
`;

const EmailWrapper = styled.a`
  display: block;

  text-decoration: none;
  color: white;
  cursor: default;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 5vw;

  &:hover {
    text-decoration: underline;
  }
`;
