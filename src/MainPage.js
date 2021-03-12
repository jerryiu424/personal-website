import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';

import AboutMe from './AboutMe';
import LandingPage from './LandingPage';
import SkillSet from './SkillSet';
import Projects from './Projects';
import WorkExperience from './WorkExperience';

const PageWrappers = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  font-family: 'Rubik';
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;
  }

  & > *:nth-child(2) {
    overflow-y: scroll;
  }
`;

const ContentPageWrapper = styled.div`
  background: #fffff1;
  color: black;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainPage = () => {
  return (
    <PageWrappers>
      <Element name='home'>
        <LandingPage />
      </Element>
      <Element name='additional-page'>
        <ContentPageWrapper>
          <AboutMe />
          <SkillSet />
          <WorkExperience />
          <Projects />
        </ContentPageWrapper>
      </Element>
    </PageWrappers>
  );
};

export default MainPage;
