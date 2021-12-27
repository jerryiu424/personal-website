import { useContext, useEffect, useState } from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

import { UserContext } from 'context/UserContext';
import { lightTheme, darkTheme } from 'theme/theme';
import LandingPage from './LandingPage';
import ContentPage from './ContentPage';
import Footer from 'components/Footer';

const PageWrappers = styled.div`
  height: 100vh;
  font-family: 'Roboto';
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    width: 100%;
    scroll-snap-align: start;
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.primary.secondary};
  }

  & > *:first-of-type {
    height: 100vh;
    background-color: #323235;
  }
`;

const ContentWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const theme = user.selectedTheme === 'light' ? lightTheme : darkTheme;

  console.log('Theme:', theme);

  return (
    <ChakraProvider theme={theme}>
      <PageWrappers
        theme={theme}
        id='root-page-wrapper'
        onScroll={(event) => {
          event.preventDefault();
          let position = document.getElementById('root-page-wrapper').scrollTop;
          let height = document
            .getElementById('root-page-wrapper')
            ?.getBoundingClientRect().height;
          if (position > height * 0.65) {
            setLoading(false);
          }
        }}>
        <LandingPage />
        <ContentWrapper id="root-content-wrapper">
          <ContentPage loading={loading} />
          <Footer />
        </ContentWrapper>
      </PageWrappers>
    </ChakraProvider>
  );
};

export default App;
