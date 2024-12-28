import HeadingContainer from "../../components/HeadingContainer";
import ProjectCard from "../../components/ProjectCard";
import Carousal from "./carousal";
import styled from "styled-components";

import { forwardRef } from "react";

interface ProjectsProps {
  // empty props
}

const Projects = forwardRef<HTMLDivElement, ProjectsProps>(({ }, ref) => {
  return (
    <Container ref={ref}>
      <HeadingContainer number={3} writeups="Research" />
      <ProjectContainer>
        <SpellContainer>
          <Spell>Everyone can code,</Spell>
          <Spell className="pink">
            But not everyone can write the <Carousal />
          </Spell>
        </SpellContainer>
        <CardContainer>
          {PROJECTS.map((prj, idx) => {
            return (
              <ProjectCard
                key={idx}
                title={prj.title}
                description={prj.description}
                repolink={prj.repolink}
                stack={prj.stacks}
                reverse={idx % 2 === 0}
              />
            );
          })}
        </CardContainer>
      </ProjectContainer>
    </Container>
  );
});

export default Projects;

const PROJECTS = [
  {
    title: "Hot Path Prediction",
    description: `A BERT model, fine-tuned on a large dataset of code paths generated from
      PolyBench Benchmark Suite using the Ball-Larus Path Profiling Algorithm, performs
      static hot path prediction on compiler intermediate representations (IR) with 99% accuracy.`,
    repolink: "https://github.com/cse583/transformers",
    stacks: ["C++ (LLVM)", "Python (PyTorch, Transformers, scikit-learn)"],
  },
  {
    title: "Flirting Analysis",
    description: `An LSTM model and a BERT model, trained/fine-tuned on a public text dataset
      with data augmentation and rigorous hyperparameter tuning,
      detect flirtatious messages with 94% accuracy.`,
    repolink: "https://github.com/zhaojer/flirting-detection",
    stacks: ["Python (TensorFlow, PyTorch, Transformers)"],
  },
  {
    title: "Parallel SCS",
    description: `Two novel parallel algorithms for the shortest common supersequence problem
      implemented on both CPU and GPU with near-linear speedup and close-to-1 efficiency.`,
    repolink: "https://github.com/zhaojer/parallel-scs",
    stacks: ["C++ (OpenMP, CUDA)"],
  },
];

const Container = styled.section`
  width: 100%;
`;

const ProjectContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const SpellContainer = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 4vh 0 8vh;
  padding-left: 5vw;

  display: grid;
  grid-template-rows: 1fr 1fr;
`;

const Spell = styled.span`
  display: inline-block;
  font-size: 4.3vw;
  font-weight: 400;
  line-height: 1.4;

  color: white;

  &.pink {
    display: flex;
  }
`;

const CardContainer = styled.div`
  padding: 0 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`;
