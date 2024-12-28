import { useRef } from "react";
import styled from "styled-components";

import Hero from "./sections/Hero";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Work";
import TeachingExperience from "./sections/Teaching";

function App() {
  // Create refs for each child component
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // aboutme
    useRef<HTMLDivElement>(null), // work
    useRef<HTMLDivElement>(null), // projects
    useRef<HTMLDivElement>(null), // teaching
    useRef<HTMLDivElement>(null)  // contact
  ];

  const scrollTo = (idx: number) => {
    sectionRefs[idx].current?.scrollIntoView({
      behavior: "smooth", // Enables smooth scrolling
      block: "start",     // Aligns the top of the section with the top of the viewport
    });
  }

  return (
    <Body>
      <Wrapper>
        <Hero scrollToAboutMe={() => scrollTo(0)} scrollToWork={() => scrollTo(1)}
              scrollToProject={() => scrollTo(2)} scrollToTeaching={() => scrollTo(3)}
              scrollToContact={() => scrollTo(4)} />
        <Aboutme ref={sectionRefs[0]} />
        <WorkExperience ref={sectionRefs[1]} />
        <Projects ref={sectionRefs[2]} />
        <TeachingExperience ref={sectionRefs[3]} />
        <Skills />
        <Footer />
        <Contact ref={sectionRefs[4]} />
      </Wrapper>
    </Body>
  )
}

const Body = styled.div`
  position: relative;
`;

const Wrapper = styled.main`
  width: 100%;
  background-color: black;
`;

export default App;
