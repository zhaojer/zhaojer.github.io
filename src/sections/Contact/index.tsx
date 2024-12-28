import styled from "styled-components";

import { useState } from "react";
import Lottie from "react-lottie-player";
import lottiePhone from "../../assets/lottie/phone.json";
import Bubble from "./bubble";

import { forwardRef } from "react";

interface ContactProps {
  // empty props
}

const Contact = forwardRef<HTMLDivElement, ContactProps>(({ }, ref) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <Container ref={ref}>
      <SpellContainer>
        <Spell>Contact</Spell>
      </SpellContainer>
      <FooterContainer>
        <LottieContainer>
          <Bubble isContactOpen={isContactOpen} />
          <LottiePlayer
            loop
            animationData={lottiePhone}
            play
            onClick={() => {
              setIsContactOpen((prev) => !prev);
            }}
          />
        </LottieContainer>
        <MarqueeWrapper>

        </MarqueeWrapper>
      </FooterContainer>
    </Container>
  );
});

export default Contact;

const Container = styled.section`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
`;

const SpellContainer = styled.div`
  width: 100%;
  max-height: 1vh;
  padding: 3vh 3vw;

  box-sizing: border-box;
`;

const Spell = styled.span`
  display: inline-block;
  font-weight: 400;
  line-height: 1.2;

  font-size: min(10vw, 50px);

  color: black;
`;

const FooterContainer = styled.div`
  width: 100%;
`;

const LottieContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LottiePlayer = styled(Lottie)`
  width: 150px;
  height: 150px;

  cursor: pointer;
`;

const MarqueeWrapper = styled.div`
  width: 100%;
  height: 20px;

  padding: 3vh 0;

  overflow: hidden;
  white-space: nowrap;

  background-color: black;
  color: white;

  letter-spacing: 2px;
`;
