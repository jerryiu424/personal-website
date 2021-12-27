import { Image, Grid, GridItem, Text, Icon } from '@chakra-ui/react';
import { BiCodeBlock } from 'react-icons/bi';
import styled from '@emotion/styled';

import htnLogo from 'assets/projects/htn.png';
import shopifyLogo from 'assets/projects/shopify.png';
import toHacksLogo from 'assets/projects/to-hacks.png';
import ProjectCard from './ProjectCard';

const ProjectImage = styled(Image)`
  height: 150px;
`;

const ProjectPage = () => {
  return (
    <Grid
      templateRows='auto'
      templateColumns='repeat(12,1fr)'
      gap='50px'
      mb='50px'>
      <GridItem colSpan={1} />
      <GridItem colSpan={10} textAlign='center'>
        <Text fontSize='lg' fontWeight='bold'>
          Projects
        </Text>
      </GridItem>
      <GridItem colSpan={1} />

      <ProjectCard
        icon={<Icon as={BiCodeBlock} w='200px' fontSize='100px' />}
        title='Personal Website'
        github='https://github.com/jerryiu424/personal-website'>
        You're already here aren't you ;)

      </ProjectCard>

      <ProjectCard
        icon={<ProjectImage src={htnLogo} />}
        title='MeetBetween'
        subtitle='Hack the North RBC Prize Winner'
        github='https://devpost.com/software/meetbetween'>
        Created a demo in 48 hours to bring serendipity into hybrid workspaces,
        allowing in-person and remote employees to interact through physical
        tablets and instantaneous video chats
      </ProjectCard>

      <ProjectCard
        icon={<ProjectImage src={shopifyLogo} />}
        title='The Shoppies'
        github='https://github.com/jerryiu424/shopify-challenge'>
        Created a movie finder application for the shopify frontend dev challenge.
      </ProjectCard>

      <ProjectCard
        icon={<ProjectImage src={toHacksLogo} />}
        title='WordLens'
        subtitle='TOHacks 2019 winner'
        github='https://github.com/jerryiu424/Help-Me-Read-Pls'>
        Created an immersive learning application in 36 hours to give students a
        deeper meaning into their readings. Our application provides literature
        analytics (both speech and text) while displaying everything in an easy
        to use UI. The core functionalities of this project was built with{' '}
        <b>Azure's speech-to-text</b> and <b>immersive reader APIs</b>.
      </ProjectCard>
    </Grid>
  );
};

export default ProjectPage;
