import { useContext } from 'react';
import { useTheme, Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

import emailLight from 'assets/socials/email-light.png';
import emailDark from 'assets/socials/email-dark.png';
import linkedinLight from 'assets/socials/linkedin-light.png';
import linkedinDark from 'assets/socials/linkedin-dark.png';
import githubLight from 'assets/socials/github-light.png';
import githubDark from 'assets/socials/github-dark.png';
import resumeLight from 'assets/socials/resume-light.png';
import resumeDark from 'assets/socials/resume-dark.png';
import { UserContext } from 'context/UserContext';

const lightIcons = [emailLight, linkedinLight, githubLight, resumeLight];
const darkIcons = [emailDark, linkedinDark, githubDark, resumeDark];
const socialLinks = [
  'mailto:jerryiu424@gmail.com',
  'https://www.linkedin.com/in/jerryiu424',
  'https://github.com/jerryiu424',
  'https://drive.google.com/file/d/1Tj5OhFvvliFhfmcmij3X_wXwmmKYvQux/view?usp=sharing',
];

const FooterWrapper = styled(Box)`
  width: 100%;
  min-height: 75px;
  max-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
`;

const SocialWrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 30px;
  }
  & > *:hover {
    opacity: 0.5;
    cursor: pointer;
  }
  & > *:last-of-type {
    margin-right: 0px;
  }
`;

const Social = styled(Image)`
  width: 25px;
  height: 25px;
  fill: red;
  color: red;
`;

const Footer = () => {
  const { user } = useContext(UserContext);
  const theme = user.selectedTheme;

  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;

  const icons = theme === 'light' ? lightIcons : darkIcons;

  return (
    <FooterWrapper
      bg={color.secondary}
      color={color.main}
      p={{
        base: '0px 50px 0px 50px',
        xl: '0px 175px 0px 175px',
      }}>
      <Text color={color.main}>
        © 2021 Jerry Iu - Built with React and Chakra UI
      </Text>
      <SocialWrapper>
        {icons.map((icon, index) => {
          const link = socialLinks[index];
          return (
            <a href={link} target='_BLANK' rel='noreferrer' key={index}>
              <Social src={icon} alt='social media' />
            </a>
          );
        })}
      </SocialWrapper>
    </FooterWrapper>
  );
};

export default Footer;
