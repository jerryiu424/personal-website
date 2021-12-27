import { useTheme, Grid, GridItem, Kbd, Text } from '@chakra-ui/react';
import { useInView } from 'react-intersection-observer';
import styled from '@emotion/styled';

import { SlideUp } from 'animations/variants';
import { motion } from 'framer-motion';

const SectionWrapper = styled(GridItem)`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const Title = styled(Kbd)`
  width: 100%;
  margin-bottom: 10px;
  font-family: 'Roboto';
  font-size: 16px;
  border-radius: 6px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const skills = [
  {
    title: 'Programming languages',
    content: 'Javascript (Typescript), Java, Python, SQL',
  },
  {
    title: 'Frameworks',
    content:
      'React, NodeJS, NextJS, Redux, Material Ui, Chakra Ui, AntDesign, Spring, Express, Flask',
  },
  {
    title: 'Cloud',
    content:
      'Docker, Kubernetes, AWS (S3, EC2, Amplify, Route 53), Pivotal Cloud Foundry, GCP (RabbitMQ), Azure (ACR)',
  },
  {
    title: 'Others',
    content: 'Git, Figma, JIRA, VBA',
  },
];

const Section = ({ title, children, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const chakraTheme = useTheme();
  const color = chakraTheme.colors.primary;

  return (
    <motion.div
      ref={ref}
      variants={SlideUp(index * 0.2)}
      initial='initial'
      animate={inView ? 'enter' : 'initial'}>
      <SectionWrapper
        colSpan={[1,2,2,1]}>
        <Title h='40px' bg={color.secondary} color={color.main}>
          {title}
        </Title>
        <Text fontSize='sm'>{children}</Text>
      </SectionWrapper>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <Grid
        templateRows='1fr auto'
        templateColumns='repeat(2, 1fr)'
        m='25px 0 50px 0'
        columnGap='100px'
        rowGap='30px'>
        <GridItem colSpan={2}>
          <Text fontSize='lg' fontWeight='500'>
            My skills
          </Text>
        </GridItem>
        {skills.map(({ title, content }, index) => {
          return (
            <Section index={index} title={title} key={index}>
              {content}
            </Section>
          );
        })}
      </Grid>
    </>
  );
};

export default Skills;
