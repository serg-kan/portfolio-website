import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';

import { FcApproval } from "react-icons/fc";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";


const StyledTimeline = styled.div`
  background-color: #f2f2f2;

  .dateActive {
    color: #333;
  }

  /* .vertical-timeline.vertical-timeline-custom-line::before {
  background: #333;
  }

  /* Icon container's border */
  /* .vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--work .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #1976d2, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }

  .vertical-timeline.vertical-timeline-custom-line .vertical-timeline-element--education .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #c2185b, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
  }  */
`;

function Timeline(props) {
  return (
    <>
      <StyledTimeline id="timeline">
        <div className="container py-5">
          <div className="float-md-start">
            <h2>Резюме</h2>
          </div>
        </div>
        <VerticalTimeline className="vertical-timeline vertical-timeline-custom-line">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#212529', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #212529' }}
            date="2021 - настоящее время"
            dateClassName={"dateActive"}
            iconStyle={{ background: '#212529', color: '#fff' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Бизнес-аналитик</h3>
            <h5 className="vertical-timeline-element-subtitle">Леруа Мерлен</h5>
            <p className="text-light">
              Разработка требований, оценка, приоритизация
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: '#A0A0A0	', color: '#fff' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Fullstack-разработчик</h3>
            <h5 className="vertical-timeline-element-subtitle">Леруа Мерлен</h5>
            <p className="text-muted">
              Разработка системы мониторинга и управления релизами <br />
              React.js, Redux, redux-saga <br />
              Node.js, Express.js, MongoDB, PostgreSQL
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: '#A0A0A0	', color: '#fff' }}
            icon={<MdWork />}
          >
            <h3 className="vertical-timeline-element-title">Стажер</h3>
            <h5 className="vertical-timeline-element-subtitle">Accenture</h5>
            <p className="text-muted">
              Документация, UNIT-тестирование, аналитика <br />
              Selenium, Jest, Mocha, Chai
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2014 - 2018"
            iconStyle={{ background: '#A0A0A0			', color: '#fff' }}
            icon={<FaGraduationCap />}
          >
            <h3 className="vertical-timeline-element-title">Студент</h3>
            <h5 className="vertical-timeline-element-subtitle">Высшая школа экономики</h5>
            <p className="text-muted">
              Major: Факультет компьютерных наук, Программная инженерия
              <br />
              Minor: Финансовая экономика
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: '#212529', color: '#fff' }}
            icon={<AiFillStar />}
          />
        </VerticalTimeline>
      </StyledTimeline>
    </>
  );
}

export default Timeline;