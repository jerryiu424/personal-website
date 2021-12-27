import { GridItem, Icon, Text } from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';
import styled from '@emotion/styled';

const IconWrapper = styled.div`
  width: 150px;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const GithubButton = styled.a`
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

const ProjectCard = ({ icon, github, title, subtitle = '', children }) => {
  return (
    <>
      <GridItem colSpan={2} />
      <GridItem colSpan={3}>
        <IconWrapper>{icon}</IconWrapper>
      </GridItem>
      <GridItem colSpan={7}>
        <TitleWrapper>
          <Text fontSize='md' fontWeight='bold' mr='35px'>
            {title}
          </Text>
          <GithubButton href={github} target='_BLANK' rel='noreferrer'>
            <Icon as={BsGithub} fontSize='md' />
          </GithubButton>
        </TitleWrapper>
        <Text fontSize='sm' opacity={0.5}>
          {subtitle}
        </Text>
        <Text fontSize='16px'>{children}</Text>
      </GridItem>
    </>
  );
};

export default ProjectCard;
