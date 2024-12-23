import HeadingContainer from "../../components/HeadingContainer";
import styled, { css } from "styled-components";

import { useState, useEffect } from "react";
import { Textfit } from "react-textfit";

const CATEGORY = ["Frontend", "Backend", "Database", "ML", "Others"];

const profToColor = (prof: number) => {
  // proficiency (1, 2, 3): higher == better
  switch (prof) {
    case 1:
      return "#9d2f33";
    case 2:
      return "#d39816";
    case 3:
      return "#96d90654";
    default:
      return "white";
  }
};

function Skills() {
  const [area, setArea] = useState(0);

  useEffect(() => {
    const skillsIntervalId = setInterval(() => {
      setArea((prev) => (prev + 1) % 5);
    }, 6000);
    return () => {clearInterval(skillsIntervalId)}
  }, []);

  return (
    <Container>
      <HeadingContainer number={3} writeups="Skills" />
      <SkillsWrapper>
        <LanguagesContainer id="SkillsSection">
          <LanguageHeader>
            <Textfit mode="single">
              {CATEGORY.map((el, idx) => {
                return (
                  <Category key={idx} $isSelected={idx === area}>
                    {el}
                  </Category>
                );
              })}
            </Textfit>
          </LanguageHeader>
          {LINES.map((line, idx) => {
            return (
              <LineContainer key={idx}>
                <Textfit mode="single">
                  {line.map((lang, idx2) => {
                    return (
                      <TextWrapper
                        key={idx2}
                        $isSelected={lang.type === CATEGORY[area]}
                        $prof={profToColor(lang.prof)}
                      >
                        <Text $isSelected={lang.type === CATEGORY[area]}>
                          {lang.name}
                        </Text>
                      </TextWrapper>
                    );
                  })}
                </Textfit>
              </LineContainer>
            );
          })}
        </LanguagesContainer>
      </SkillsWrapper>
    </Container>
  );
}

export default Skills;

const LINE_1 = [
  { name: "React", type: "Frontend", prof: 3 },
  { name: "Spring Boot", type: "Backend", prof: 1 },
  { name: "JS/TS", type: "Frontend", prof: 3 },
  { name: "Python", type: "ML", prof: 3 },
  { name: "SQLPlus", type: "Database", prof: 3 },
];

const LINE_2 = [
  { name: "MongoDB", type: "Database", prof: 2 },
  { name: "C/C++", type: "Others", prof: 3 },
  { name: "PyTorch", type: "ML", prof: 2 },
  { name: "CUDA", type: "Others", prof: 2 },
  { name: "HTML", type: "Frontend", prof: 3 },
];

const LINE_3 = [
  { name: "MySQL", type: "Database", prof: 2 },
  { name: "Java", type: "Backend", prof: 2 },
  { name: "TensorFlow", type: "ML", prof: 2 },
  { name: "Next", type: "Frontend", prof: 1 },
  { name: "Pandas", type: "ML", prof: 1 },
];

const LINE_4 = [
  { name: "Docker", type: "Others", prof: 1 },
  { name: "CSS", type: "Frontend", prof: 3 },
  { name: "Django", type: "Backend", prof: 1 },
  { name: "NumPy", type: "ML", prof: 1 },
  { name: "Vue", type: "Frontend", prof: 2 },
];

const LINE_5 = [
  { name: "Figma", type: "Frontend", prof: 3 },
  { name: "GCP", type: "Backend", prof: 2 },
  { name: "AWS", type: "Backend", prof: 2 },
  { name: "Git/GitHub", type: "Others", prof: 3 },
  { name : "Tailwind", type: "Frontend", prof: 2},
];

const LINE_6 = [
  { name: "DynamoDB", type: "Database", prof: 2 },
  { name: "LLVM", type: "Others", prof: 2 },
  { name: "Node", type: "Backend", prof: 1 },
  { name: "Bootstrap", type: "Frontend", prof: 3 },
  { name: "Firebase", type: "Database", prof: 2 },
];

const LINES = [LINE_1, LINE_2, LINE_3, LINE_4, LINE_5, LINE_6];

const Container = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const SkillsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5px;
`;

const LanguagesContainer = styled.div`
  width: 100%;
`;

const LanguageHeader = styled.div`
  width: 100%;
  height: 3vh;

  padding-bottom: 8vh;
`;

const Category = styled.span<{ $isSelected?: boolean; }>`
  display: inline-block;
  padding: 0 3vw;

  color: ${(props) => (props.$isSelected ? "#ffffff" : "#232323")};
  text-decoration: ${(props) => (props.$isSelected ? "underline" : "none")};
  transition: color 0.8s ease-in-out;
`;

const LineContainer = styled.div`
  width: 100%;
  height: 10vh;
  padding: 2vh 0;
`;

const TextWrapper = styled.div<{ $isSelected?: boolean; $prof?: string; }>`
  display: inline-block;
  padding: 0 3vw;
  position: relative;
  line-height: 1.1;

  ${(props) =>
    props.$isSelected &&
    css<{ $prof?: string; }>`
      &:after {
        content: "";
        position: absolute;
        bottom: 0%;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${(props) => props.$prof};
        mix-blend-mode: screen;

        transform: scaleX(0);
        transform-origin: left center;
        transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      }

      &:hover::after {
        transform: scaleX(1);
      }
    `}
`;

const Text = styled.span<{ $isSelected?: boolean; }>`
  font-family: "Lato";
  font-weight: 600;
  color: ${(props) => (props.$isSelected ? "#ffffff" : "#232323")};
  transition: color 0.8s ease-in-out;
`;
