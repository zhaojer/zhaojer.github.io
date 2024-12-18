import styled from "styled-components";

function Introduction() {
  return (
    <Paragraph>
      I'm Jerry, a Master's student in Computer Science Engineering at the University of Michigan, where I also work as a Graduate Student Instructor, sharing my love for coding and problem-solving with others. My academic journey blends technical depth and human-centered thinking, with a double Bachelor's in Computer Science and Psychology.

      I've tackled challenges ranging from crafting OS-level thread libraries to building user-friendly full-stack web applications, leveraging tools like React, Python, and AWS. My passion for innovation extends to research, where I've enhanced surgeons' training with interactive visualizations, and to internships at Intel and startups, where I've honed my skills in software engineering and scalable system design.

      Beyond code, I thrive in teaching, mentoring, and working in collaborative, cross-functional teams. Let's connect and build something amazing together!
    </Paragraph>
  );
}

export default Introduction;

const Paragraph = styled.p`
  display: block;

  line-height: 1.5;
  line-break: auto;

  font-size: 2.5vw;
  font-family: "Neue Montreal";
  font-weight: 300;
  text-align: justify;
`;