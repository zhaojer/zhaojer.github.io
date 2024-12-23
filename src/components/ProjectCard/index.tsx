import { AiFillGithub } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import styled from "styled-components";
import { FC } from "react";
import parseURLPath from "../../utils/parseURLPath";

interface ProjectCardProps {
  title: string,
  description: string,
  repolink: string,
  stack: string[],
  reverse: boolean
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, repolink, stack, reverse }) => {
  const handleCardClick = () => { };

  return (
    <BigContainer>
      <MainWrapper $reverseOrder={reverse === true} onClick={handleCardClick}>
        <Description>
          <Title>
            {title}
          </Title>
          <Desc>{description}</Desc>
          <HorizontalBar />
          <StackContainer>
            {stack.map((el, idx) => {
              return <Stack key={idx}>{el}</Stack>;
            })}
          </StackContainer>
        </Description>
      </MainWrapper>
      <IconContainer $reverseOrder={reverse === true}>
        <ExternalLink href={repolink} target="_blank" rel="noreferrer noopener">
          <GithubIcon />
          <LinkDesc>{parseURLPath(repolink)}</LinkDesc>
          <LinkIcon className="dark" />
        </ExternalLink>
      </IconContainer>
    </BigContainer>
  );
}

export default ProjectCard;

const BigContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const MainWrapper = styled.div<{ $reverseOrder?: boolean; }>`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: ${props => props.$reverseOrder ? "row" : "row-reverse"};

  background-color: black;
  color: white;
`;

const Description = styled.div`
  width: 50%;

  margin-bottom: 5vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5vh;
`;

const Title = styled.h3`
  position: relative;
  margin: 0;

  font-weight: 700;
  letter-spacing: 2px;
  font-size: 4vw;

  overflow: hidden;
`;

const Desc = styled.p`
  margin: 0;
  font-size: 1.2vw;
  line-height: 1.4;
`;

const HorizontalBar = styled.hr`
  width: 100%;
  height: 3px;

  margin: -1vh 0;

  background-color: white;
`;

const StackContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1vmax;
`;

const Stack = styled.li`
  font-weight: 300;
  font-size: 1.8vw;
`;

const IconContainer = styled.div<{ $reverseOrder?: boolean; }>`
  width: 100%;
  display: flex;
  justify-content: ${props => props.$reverseOrder ? "flex-start" : "flex-end"};
  align-items: center;
`;

const ExternalLink = styled.a`
  text-decoration: none;
  color: white;

  padding: 0 20px;

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2vw;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 100%;
    background-color: #ffffff;
    mix-blend-mode: difference;

    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover::after {
    transform: scaleX(1);

    font-weight: 500;
  }
`;

const GithubIcon = styled(AiFillGithub)`
  width: 1vmax;
  height: 1vmax;

  min-width: 25px;
  min-height: 25px;
`;

const LinkIcon = styled(FaExternalLinkAlt)`
  width: 1vmax;
  height: 1vmax;

  min-width: 15px;
  min-height: 15px;

  &.dark {
    position: sticky;
    font-weight: 500;
    font-size: 3vw;
    z-index: 100;
    color: black;
  }
`;

const LinkDesc = styled.span`
  font-size: 2vw;
  font-weight: 300;
`;
