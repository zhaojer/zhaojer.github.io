import { useState, useEffect, useRef } from "react";
import styled from "styled-components";

import Hero from "./sections/Hero";
import Aboutme from "./sections/Aboutme";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import WorkExperience from "./sections/Work";
import TeachingExperience from "./sections/Teaching";

import { FaRegArrowAltCircleUp } from "react-icons/fa";

function App() {
  // Indicate when to show button for scrolling back top
  const [showButton, setShowButton] = useState(false);
  // Handle scroll event to track user's scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current vertical scroll position
      setShowButton(scrollPosition > 100); // Show button if scrolled down 100px
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling effect
    });
  };

  // Create refs for each child component (section)
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // aboutme
    useRef<HTMLDivElement>(null), // work
    useRef<HTMLDivElement>(null), // projects
    useRef<HTMLDivElement>(null), // teaching
    useRef<HTMLDivElement>(null)  // contact
  ];
  // Scroll to corresponding section
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
      {showButton && <ScrollToTopButton onClick={scrollToTop}/>}
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

const ScrollToTopButton = styled(FaRegArrowAltCircleUp)`
  width: 2.5vmax;
  min-width: 20px;
  height: auto;

  position: fixed;
  bottom: 1vh;
  right: 1vw;

  color: #fff;
  cursor: pointer;
`;

export default App;
