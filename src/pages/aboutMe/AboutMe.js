import { useEffect, useState } from 'react';
import { useTheme, Box, Image, Text } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

import profilePic from 'assets/profile-picture.jpg';
import StyledDivider from 'components/Divider';
import Details from './Details';
import Skills from './Skills';

const AboutMeWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const ProfilePic = styled(Image)`
  border-radius: 6px;
`;

const Main = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.loadWaving ? 'flex-start' : 'space-between'};
  color: rgba(50, 50, 53, 0.85);
  font-weight: bold;
  line-height: 29px;
  margin-bottom: 25px;
`;

const AboutMe = ({ loading }) => {
  const [loadWaving, setLoadWaving] = useState(true);
  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;

  useEffect(() => {
    !loading &&
      setTimeout(() => {
        setLoadWaving(false);
      }, 1500);
  }, [loading]);

  return (
    <AboutMeWrapper pl={'40px'}>
      <Main loadWaving={loadWaving}>
        <ProfilePic
          src={profilePic}
          alt='profile picture'
          w={{
            base: '200px',
            sm: '275px',
            md: '300px',
            xl: '325px',
          }}
          h={{
            base: '310px',
            sm: '425px',
            md: '460px',
            xl: '500px',
          }}
        />
        <AnimatePresence
          initial={true}
          exitBeforeEnter={false}
          onExitComplete={() => null}>
          {loadWaving ? (
            <div style={{ width: '100%', margin: 'auto' }}>
              <motion.div
                key='wave'
                initial={{ rotate: 0 }}
                animate={{
                  scale: [0.5, 1, 1, 1, 1, 1, 0],
                  rotate: [0, -25, 25, -25, 25, 1, 1],
                }}
                transition={{
                  duration: 1.66,
                  repeat: Infinity,
                }}>
                <Text
                  fontSize='75px'
                  fontWeight='bold'
                  w='50px'
                  h='50px'
                  m='auto'>
                  👋
                </Text>
              </motion.div>
            </div>
          ) : (
            <div>
              <Text
                fontSize='xl'
                fontWeight='bold'
                mb='30px'
                lineHeight='50px'
                color={color.secondary}>
                Hi ! 👋
              </Text>
              <Text
                fontSize='sm'
                fontWeight='medium'
                lineHeight='29px'
                maxW='570px'
                color={color.secondary}>
                My name is <span style={{ color: color.alt }}> Jerry</span>, I’m
                a software developer based in Toronto, Canada.
                <br />
                <br />
                I’ve recently graduated from the University of Western Ontario
                where I completed my bachlor degree in Computer Science.
                <br />
                <br />
                During my undergrad at Western I had the opportunity to
                participate in their internship program where I got to intern at
                places like the Royal Bank of Canada (RBC), Phlyt and Dimension
                Data. You can read more under the “Experiences” tab.
              </Text>
            </div>
          )}
        </AnimatePresence>
      </Main>
      <StyledDivider />
      <Skills />
      <StyledDivider />
      <Details />
    </AboutMeWrapper>
  );
};

export default AboutMe;
