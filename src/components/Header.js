import { useContext } from 'react';
import {
  IconButton,
  Icon,
  Image,
  Tab,
  TabList,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import styled from '@emotion/styled';

import { UserContext } from 'context/UserContext';
import blankKey from 'assets/keycaps/blank.png';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
`;

const KeyCap = styled(Image)`
  width: 50px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  & > img:first-of-type {
    margin-right: 15px;
  }
`;

const Title = styled(Text)`
  font-weight: bold;
`;

const TabsThemeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Header = ({ handleTabChange }) => {
  const { user, setUser } = useContext(UserContext);
  const chakraTheme = useTheme();

  const theme = user.selectedTheme;

  const toggleTheme = () => {
    setUser({
      ...user,
      selectedTheme: theme === 'light' ? 'dark' : 'light',
    });
  };

  return (
    <HeaderWrapper>
      <TitleWrapper onClick={handleTabChange}>
        <KeyCap src={blankKey} fallbackSrc='https://via.placeholder.com/150' />
        <Title fontSize='md'>jerryiu.com</Title>
      </TitleWrapper>

      <TabsThemeWrapper>
        <TabList>
          <Tab>About Me</Tab>
          <Tab>Experiences</Tab>
          <Tab>Projects</Tab>
        </TabList>

        {theme !== 'light' ? (
          <IconButton
            aria-label='Light theme'
            icon={
              <Icon
                as={BsFillSunFill}
                color={chakraTheme.colors.primary.main}
                fontSize={'sm'}
              />
            }
            onClick={toggleTheme}
          />
        ) : (
          <IconButton
            aria-label='Dark theme'
            icon={
              <Icon
                as={BsFillMoonFill}
                color={chakraTheme.colors.primary.secondary}
                fontSize={'18px'}
              />
            }
            onClick={toggleTheme}
          />
        )}
      </TabsThemeWrapper>
    </HeaderWrapper>
  );
};

export default Header;
