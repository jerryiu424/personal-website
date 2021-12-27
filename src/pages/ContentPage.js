import { useState } from 'react';
import { Box, Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import styled from '@emotion/styled';

import Header from 'components/Header';
import AboutMe from './aboutMe/AboutMe';
import ExperiencesPage from './experiences';
import ProjectPage from './project';

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`;

const ContentPage = ({ loading }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <ContentWrapper
      p={{
        base: '50px 20px 0px 20px',
        lg: '50px 120px 0px 120px',
        xl: '50px 150px 0px 150px',
        '2xl': '50px 350px 0px 350px',
      }}>
      <Tabs
        variant='unstyled'
        index={tabIndex}
        onChange={(index) => setTabIndex(index)}>
        <Header handleTabChange={() => setTabIndex(0)} />
        <TabPanels>
          <TabPanel>
            <AboutMe loading={loading} />
          </TabPanel>
          <TabPanel>
            <ExperiencesPage />
          </TabPanel>
          <TabPanel>
            <ProjectPage />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ContentWrapper>
  );
};

export default ContentPage;
