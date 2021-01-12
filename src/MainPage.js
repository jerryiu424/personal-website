import React from 'react';
import styled from 'styled-components';

import AboutMe from './AboutMe';
import LandingPage from './LandingPage';

const PageWrappers = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    height: 100vh;
    scroll-snap-align: start;
  }
`;

const MainPage = () => {
  return (
    <PageWrappers>
      <LandingPage />
      <AboutMe />
    </PageWrappers>
  );
};

export default MainPage;
