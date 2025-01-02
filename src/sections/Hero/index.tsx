import styled from "styled-components";
import { FC } from "react";
import { IoSchool } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaHandshakeAngle } from "react-icons/fa6";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

interface HeroProps {
  scrollToAboutMe: () => void,
  scrollToWork: () => void,
  scrollToProject: () => void,
  scrollToTeaching: () => void,
  scrollToContact: () => void,
}

const Hero: FC<HeroProps> = ({ scrollToAboutMe, scrollToWork, scrollToProject, scrollToTeaching, scrollToContact }) => {
  return (
    <Container>
      <HeroWrapper>
        <Line1 onClick={scrollToAboutMe}>
          <Icon1 />
          <div>
            i <Gray>L</Gray>eArn
          </div>
        </Line1>
        <Line2 onClick={scrollToWork}>
          <div>
            i Devel<Gray>O</Gray>p
          </div>
          <Icon2 />
        </Line2>
        <Line3 onClick={scrollToProject}>
          <Icon3 />
          <div>
            i inNo<Gray>V</Gray>ate
          </div>
        </Line3>
        <Line4 onClick={scrollToTeaching}>
          <div>
            i m<Gray>E</Gray>ntoR
          </div>
          <Icon4 />
        </Line4>
      </HeroWrapper>
      <BarcodeContainer>
        <Barcode onClick={scrollToContact} >Jerry</Barcode>
        <LinksContainer>
          <a
            href="https://www.youtube.com/@jz1729"
            target="_blank"
            rel="noreferrer noopener"
          >
            <YoutubeIcon />
          </a>
          <a
            href="https://github.com/zhaojer/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/jerryzhao1729/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <LinkedinIcon />
          </a>
        </LinksContainer>
        <ResumeContainer>
          <ResumeLink href="/resumes/JerryResume2025.pdf" target="_blank" rel="noopener noreferrer">
            Résumé
          </ResumeLink>
          <ResumeLink href="/resumes/JerryCV2025.pdf" target="_blank" rel="noopener noreferrer">
            CV
          </ResumeLink>
        </ResumeContainer>
      </BarcodeContainer>
    </Container>
  );
}

export default Hero;

const Container = styled.section`
  position: relative;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: black;
`;

const HeroWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 1;
`;

const Line = styled.div`
  width: 100%;
  height: 25vh;
  flex-grow: 1;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Major Mono Display", sans-serif;
  font-weight: 600;

  background-color: black;
  color: white;

  &:after {
    cursor: pointer;

    content: "";
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 100%;
    background-color: white;
    mix-blend-mode: difference;

    transform: scaleX(0);
    transition: transform 1.0s ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const Line1 = styled(Line)`
  font-size: 10vw;

  &:after {
    transform-origin: right center;
  }
`;

const Icon1 = styled(IoSchool)`
  color: black;
  max-width: 100px;
  max-height: 100px;

  margin-left: 10%;
  z-index: 1;
`;

const Line2 = styled(Line)`
  font-size: 10vw;

  &:after {
    transform-origin: left center;
  }
`;

const Icon2 = styled(LiaLaptopCodeSolid)`
  color: black;
  max-width: 100px;
  max-height: 100px;

  margin-right: 10%;
  z-index: 1;
`;

const Line3 = styled(Line)`
  font-size: 10vw;

  &:after {
    transform-origin: right center;
  }
`;

const Icon3 = styled(HiOutlineLightBulb)`
  color: black;
  max-width: 100px;
  max-height: 100px;

  margin-left: 10%;
  z-index: 1;
`;

const Line4 = styled(Line)`
  font-size: 10vw;

  &:after {
    transform-origin: left center;
  }
`;

const Icon4 = styled(FaHandshakeAngle)`
  color: black;
  max-width: 100px;
  max-height: 100px;

  margin-right: 5%;
  z-index: 1;
`;

const Gray = styled.span`
  color: #504f4f;
`;

const BarcodeContainer = styled.div`
  width: 100%;
  padding: 10vh 0 1vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5vh;

  z-index: 100;
`;

const Barcode = styled.span`
  cursor: pointer;

  color: white;
  font-size: 5vmax;
  font-family: "Libre Barcode 39 Text";
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: horizontal;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`;

const GithubIcon = styled(AiFillGithub)`
  color: white;
  width: 3vmax;
  height: 3vmax;
`;

const LinkedinIcon = styled(AiFillLinkedin)`
  color: white;
  width: 3vmax;
  height: 3vmax;
`;

const YoutubeIcon = styled(AiFillYoutube)`
  color: white;
  width: 3vmax;
  height: 3vmax;
`;

const ResumeContainer = styled.div`
  font-size: 1.5vmax;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
`;

const ResumeLink = styled.a`
  color: white;
`;