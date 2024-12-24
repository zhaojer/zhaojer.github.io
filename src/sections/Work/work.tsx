
import styled from 'styled-components';
import NouriIconLink from '../../assets/icons/nouri.svg';
import IntelIconLink from '../../assets/icons/intel.svg';
import MoreThinksIconLink from '../../assets/icons/morethinks.jpg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function WorkTimeline() {
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
          <h3 className="vertical-timeline-element-title">{el.company}</h3>
          <h4 className="vertical-timeline-element-subtitle">{el.position}</h4>
          <Description>
            {el.description}
          </Description>
        </VerticalTimelineElement>
      ))}
    </VerticalTimelineStyled>
  );
}

export default WorkTimeline;

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
    company: 'Nouri',
    position: 'Software Engineer Intern',
    date: 'June - Sept 2024',
    icon: NouriIcon(),
    description: 'Developed a web app (React/JS, Python, GCP/Firebase) to streamline the journey from recipe creation to grocery shopping.',
    theme: '#274E5A'
  },
  {
    company: 'MoreThinks Solutions',
    position: 'Software Engineer Intern',
    date: 'June - Sept 2024',
    icon: MoreThinksIcon(),
    description: 'Developed a social media platform (Qwik/TS, Tailwind, AWS) for influencers to promote their partnered products.',
    theme: 'black'
  },
  {
    company: 'Intel',
    position: 'Software Engineer Intern',
    date: 'May - July 2021',
    icon: IntelIcon(),
    description: 'Developed a relational database (SQL) to track installed manufacturing tools, and conducted ETL process (Pandas, SQLAlchemy) to systematically update and validate data.',
    theme: 'white'
  },
];

function NouriIcon() {
  return (
    <img src={NouriIconLink} alt="Nouri Icon" style={{ width: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
  );
}

function IntelIcon() {
  return (
    <img src={IntelIconLink} alt="Intel Icon" style={{ width: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
  );
}

function MoreThinksIcon() {
  return (
    <img src={MoreThinksIconLink} alt="MoreThinks Icon" style={{ width: '100%', height: 'auto', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
  );
}