import styled from 'styled-components';
import UmichIconLink from '../../assets/icons/umich.png';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function TeachingTimeline() {
  return (
    <VerticalTimelineStyled>
      {work.map((el, idx) => (
        <VerticalTimelineElement
          key={idx}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'black', color: '#fff', }}
          contentArrowStyle={{ borderRight: '1vmax solid #fff' }}
          date={el.date}
          iconStyle={{ minWidth: '4vmax', minHeight: '4vmax', background: el.theme, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          icon={el.icon}
        >
          <h3 className="vertical-timeline-element-title">{el.position}</h3>
          <h4 className="vertical-timeline-element-subtitle">{el.company}</h4>
          <Description>
            {el.description}
          </Description>
        </VerticalTimelineElement>
      ))}
    </VerticalTimelineStyled>
  );
}

export default TeachingTimeline;

const VerticalTimelineStyled = styled(VerticalTimeline)`
  max-width: 95%;

  font-size: 2vw;
  font-weight: 300;
`;

const Description = styled.p`
  font-size: 1vmax !important;
`;

const work = [
  {
    company: 'EECS 493, 484, 485, 587',
    position: 'Graduate Student Instructor',
    date: 'Aug 2023 - Present',
    icon: UmichIcon(),
    description: 'Led an instructional team by assigning and overseeing grading tasks, mentoring fellow teaching assistants, and ensuring the effective delivery of course material, while also directly engaging students through lab sessions, office hours, and exam preparation.',
    theme: 'white'
  },
  {
    company: 'EECS 493',
    position: 'Course Developer',
    date: 'May - Aug 2024',
    icon: UmichIcon(),
    description: "Developed a course website with an automated CI/CD pipeline, enhanced course assignments with new features, and documented detailed specifications to improve the course's technical and instructional quality.",
    theme: 'white'
  },
  {
    company: 'Engineering OnRamp',
    position: 'Program Advisor',
    date: 'June - Aug 2024',
    icon: UmichIcon(),
    description: 'Mentored 200 future engineers through hands-on classroom projects, community-building activities, and mental wellness initiatives, fostering their academic growth and enthusiasm for engineering.',
    theme: 'white'
  },
  {
    company: 'EECS 493',
    position: 'Instructional Assistant',
    date: 'Aug 2022 - July 2023',
    icon: UmichIcon(),
    description: 'Taught weekly lab sessions, provided hands-on guidance during office hours, and supported over 400 students in mastering user-centered design and front-end development.',
    theme: 'white'
  },
  {
    company: 'EECS 493',
    position: 'Course Developer',
    date: 'May 2022 - Aug 2022',
    icon: UmichIcon(),
    description: 'Redesigned the curriculum, crafted engaging assignments and a capstone project focused on user-centered design, and planned the course schedule to ensure a seamless and impactful learning experience.',
    theme: 'white'
  },
];

function UmichIcon() {
  return (
    <img src={UmichIconLink} alt="Nouri Icon" style={{ width: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
  );
}
